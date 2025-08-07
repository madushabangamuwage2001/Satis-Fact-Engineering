"use client"

import { useState } from "react"
import LoadingSpinner from "./LoadingSpinner"

const ContactModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("quick")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert("Thank you for your message! We will get back to you soon.")
        setFormData({ name: "", email: "", message: "" })
        onClose()
      } else {
        const errorData = await response.json()
        setError(errorData.message || "There was an error sending your message. Please try again.")
      }
    } catch (error) {
      console.error("Error:", error)
      setError("Network error. Please check your connection and try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    // Clear error when user starts typing
    if (error) setError("")
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black bg-opacity-50 animate-fade-in" onClick={onClose}></div>

      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full animate-scale-in">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-center  text-xl font-heading font-semibold text-construction-red">Get In Touch</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-construction-red rounded-full p-1"
            aria-label="Close modal"
            disabled={isLoading}
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab("quick")}
            disabled={isLoading}
            className={`flex-1 py-3 px-4 text-sm font-medium transition-colors duration-300 disabled:opacity-50 ${
              activeTab === "quick"
                ? "text-construction-red border-b-2 border-construction-red bg-red-50"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Quick Contact
          </button>
          <button
            onClick={() => setActiveTab("form")}
            disabled={isLoading}
            className={`flex-1 py-3 px-4 text-sm font-medium transition-colors duration-300 disabled:opacity-50 ${
              activeTab === "form"
                ? "text-construction-red border-b-2 border-construction-red bg-red-50"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Send Message
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {activeTab === "quick" ? (
            <div className="space-y-4">
              <p className="text-gray-600 mb-4">Choose your preferred way to contact us:</p>

              {/* WhatsApp */}
              <a
                href="https://wa.me/94763115305"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors duration-300 group"
              >
                <div className="bg-green-500 text-white p-2 rounded-full mr-3 group-hover:bg-green-600 transition-colors duration-300">
                  <i className="fab fa-whatsapp text-lg"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">WhatsApp Chat</h4>
                  <p className="text-sm text-gray-600">+94 763 115 305</p>
                </div>
              </a>

              {/* Facebook Messenger */}
              <a
                href="https://m.me/satisfactengineering"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors duration-300 group"
              >
                <div className="bg-blue-500 text-white p-2 rounded-full mr-3 group-hover:bg-blue-600 transition-colors duration-300">
                  <i className="fab fa-facebook-messenger text-lg"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Facebook Messenger</h4>
                  <p className="text-sm text-gray-600">Chat with us instantly</p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+94763115305"
                className="flex items-center p-3 bg-construction-red bg-opacity-10 hover:bg-opacity-20 rounded-lg transition-colors duration-300 group"
              >
                <div className="bg-construction-red text-white p-2 rounded-full mr-3 group-hover:bg-red-800 transition-colors duration-300">
                  <i className="fas fa-phone text-lg"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Call Us</h4>
                  <p className="text-sm text-gray-600">+94 763 115 305</p>
                </div>
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                  <i className="fas fa-exclamation-circle mr-2"></i>
                  {error}
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  disabled={isLoading}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-construction-red focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={isLoading}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-construction-red focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  disabled={isLoading}
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-construction-red focus:border-transparent resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <LoadingSpinner size="sm" />
                    <span className="ml-2">Sending...</span>
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default ContactModal
