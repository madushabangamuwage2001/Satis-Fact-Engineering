"use client"

import { useState, useEffect } from "react"
import ContactModal from "./ContactModal"

const FloatingCTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    // Show button after 2 seconds
    const timer = setTimeout(() => {
      setShowButton(true)
    }, 2000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  if (!showButton) return null

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-construction-red text-white p-4 rounded-full shadow-lg hover:bg-red-800 transition-all duration-300 animate-bounce-subtle focus:outline-none focus:ring-4 focus:ring-construction-red focus:ring-opacity-50"
        aria-label="Contact us"
      >
        <i className="fas fa-comments text-xl"></i>
      </button>

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

export default FloatingCTA
