"use client"

import { render, screen, fireEvent, act } from "@testing-library/react"
import FloatingCTA from "../components/FloatingCTA"
import jest from "jest" // Import jest to declare it

// Mock the ContactModal component
jest.mock("../components/ContactModal", () => {
  return function MockContactModal({ isOpen, onClose }) {
    return isOpen ? (
      <div data-testid="contact-modal">
        <button onClick={onClose}>Close Modal</button>
      </div>
    ) : null
  }
})

describe("FloatingCTA Component", () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.runOnlyPendingTimers()
    jest.useRealTimers()
  })

  test("shows floating button after 2 seconds", () => {
    render(<FloatingCTA />)

    // Button should not be visible initially
    expect(screen.queryByLabelText("Contact us")).not.toBeInTheDocument()

    // Fast-forward time by 2 seconds
    act(() => {
      jest.advanceTimersByTime(2000)
    })

    // Button should now be visible
    expect(screen.getByLabelText("Contact us")).toBeInTheDocument()
  })

  test("opens modal when button is clicked", () => {
    render(<FloatingCTA />)

    // Fast-forward to show button
    act(() => {
      jest.advanceTimersByTime(2000)
    })

    const button = screen.getByLabelText("Contact us")
    fireEvent.click(button)

    expect(screen.getByTestId("contact-modal")).toBeInTheDocument()
  })

  test("auto-opens modal after 5 seconds of inactivity", () => {
    render(<FloatingCTA />)

    // Fast-forward to show button
    act(() => {
      jest.advanceTimersByTime(2000)
    })

    // Fast-forward another 5 seconds for auto-open
    act(() => {
      jest.advanceTimersByTime(5000)
    })

    expect(screen.getByTestId("contact-modal")).toBeInTheDocument()
  })
})
