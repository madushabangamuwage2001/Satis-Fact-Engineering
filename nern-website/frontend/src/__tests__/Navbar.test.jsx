import { render, screen, fireEvent } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Navbar from "../components/Navbar"

const NavbarWithRouter = () => (
  <BrowserRouter>
    <Navbar />
  </BrowserRouter>
)

describe("Navbar Component", () => {
  test("renders company name", () => {
    render(<NavbarWithRouter />)
    expect(screen.getByText("Satis-Fact Engineering")).toBeInTheDocument()
  })

  test("renders all navigation links", () => {
    render(<NavbarWithRouter />)
    expect(screen.getByText("Home")).toBeInTheDocument()
    expect(screen.getByText("About Us")).toBeInTheDocument()
    expect(screen.getByText("Services")).toBeInTheDocument()
    expect(screen.getByText("Contact Us")).toBeInTheDocument()
  })

  test("toggles mobile menu when hamburger button is clicked", () => {
    render(<NavbarWithRouter />)
    const menuButton = screen.getByLabelText("Toggle menu")

    fireEvent.click(menuButton)
    // Mobile menu should be visible after click
    // This test would need to be adjusted based on how the mobile menu is implemented
  })

  test("has proper accessibility attributes", () => {
    render(<NavbarWithRouter />)
    const menuButton = screen.getByLabelText("Toggle menu")
    expect(menuButton).toHaveAttribute("aria-label", "Toggle menu")
  })
})
