"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import LoadingSpinner from "../components/LoadingSpinner"

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")
    setSuccess(false)

    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSuccess(true)
        setFormData({ name: "", email: "", phone: "", message: "" })
        setTimeout(() => setSuccess(false), 5000) // Hide success message after 5 seconds
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

  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  // Animation variants for contact items
  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
    }),
  }

  // Animation variants for form inputs
  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4 },
    }),
    focus: { scale: 1.02, borderColor: "#ff4d4f", transition: { duration: 0.3 } },
  }

  // Animation variants for buttons
  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    tap: { scale: 0.95 },
  }

  return (
    <div className="pt-21">
      {/* Hero Section with Cover Image */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        className="relative h-96 md:h-[500px] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <motion.img
            src="/src/assets/contact.jpg"
            alt="Satis-Fact Engineering Contact - Professional Construction Services"
            className="w-full h-full object-cover"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </div>

        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <motion.div
          className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl font-body max-w-3xl mx-auto">
            Ready to start your construction project? Get in touch with us for a free consultation and estimate.
          </p>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <i className="fas fa-chevron-down text-2xl"></i>
        </motion.div>
      </motion.section>

      {/* Contact Information & Form */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="section-padding"
      >
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-heading font-bold text-construction-red mb-8">Get In Touch</h2>

              <div className="space-y-6 mb-8">
                {[
                  {
                    icon: "fas fa-map-marker-alt",
                    title: "Office Address",
                    description: "Piliyandala/Matara, Sri Lanka",
                  },
                  {
                    icon: "fas fa-phone",
                    title: "Phone Numbers",
                    description: ["+94 763 115 305", "+94 712 912 196"],
                  },
                  {
                    icon: "fas fa-envelope",
                    title: "Email",
                    description: "asankaabeynayake@gmail.com",
                  },
                  {
                    icon: "fas fa-clock",
                    title: "Business Hours",
                    description: ["Monday - Saturday: 8:00 AM - 6:00 PM", "Sunday: Emergency services only"],
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    custom={index}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <motion.div
                      className="bg-construction-red text-white p-3 rounded-full mr-4 mt-1"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <i className={`${item.icon} text-lg`}></i>
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-semibold text-construction-red mb-1">{item.title}</h3>
                      {Array.isArray(item.description) ? (
                        item.description.map((desc, i) => (
                          <p key={i} className="text-construction-gray">{desc}</p>
                        ))
                      ) : (
                        <p className="text-construction-gray">{item.description}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Contact Options */}
              <div className="space-y-4">
                <h3 className="text-xl font-heading font-semibold text-construction-red mb-4">Quick Contact</h3>

                <motion.a
                  href="https://wa.me/94763115305"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-green-50 rounded-lg transition-colors duration-300 group"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <motion.div
                    className="bg-green-500 text-white p-3 rounded-full mr-4 group-hover:bg-green-600 transition-colors duration-300"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <i className="fab fa-whatsapp text-xl"></i>
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-gray-800">WhatsApp</h4>
                    <p className="text-sm text-gray-600">Chat with us instantly</p>
                  </div>
                </motion.a>

                <motion.a
                  href="tel:+94763115305"
                  className="flex items-center p-4 bg-construction-red bg-opacity-10 rounded-lg transition-colors duration-300 group"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <motion.div
                    className="bg-construction-red text-white p-3 rounded-full mr-4 group-hover:bg-red-800 transition-colors duration-300"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <i className="fas fa-phone text-xl"></i>
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Call Now</h4>
                    <p className="text-sm text-gray-600">+94 763 115 305</p>
                  </div>
                </motion.a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="bg-construction-lightGray p-8 rounded-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-heading font-bold text-construction-red mb-6">Send Us a Message</h2>

              <AnimatePresence>
                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6"
                  >
                    <i className="fas fa-check-circle mr-2"></i>
                    Thank you for your message! We will get back to you soon.
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6"
                  >
                    <i className="fas fa-exclamation-circle mr-2"></i>
                    {error}
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { label: "Full Name *", id: "name", type: "text", placeholder: "Enter your full name" },
                  { label: "Email Address *", id: "email", type: "email", placeholder: "Enter your email address" },
                  { label: "Phone Number", id: "phone", type: "tel", placeholder: "Enter your phone number" },
                ].map((field, index) => (
                  <motion.div
                    key={field.id}
                    variants={inputVariants}
                    initial="hidden"
                    whileInView="visible"
                    custom={index}
                    viewport={{ once: true }}
                  >
                    <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-2">
                      {field.label}
                    </label>
                    <motion.input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      value={formData[field.id]}
                      onChange={handleInputChange}
                      required={field.label.includes("*")}
                      disabled={isLoading}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-construction-red focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder={field.placeholder}
                      whileFocus="focus"
                    />
                  </motion.div>
                ))}

                <motion.div
                  variants={inputVariants}
                  initial="hidden"
                  whileInView="visible"
                  custom={3}
                  viewport={{ once: true }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    disabled={isLoading}
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-construction-red focus:border-transparent resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Tell us about your project requirements, timeline, and any specific details..."
                    whileFocus="focus"
                  ></motion.textarea>
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isLoading}
                  className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  {isLoading ? (
                    <>
                      <LoadingSpinner size="sm" />
                      <span className="ml-2">Sending Message...</span>
                    </>
                  ) : (
                    "Send Message"
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Map Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="section-padding bg-construction-lightGray"
      >
        <div className="container-max">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-heading font-bold text-construction-red mb-4">Find Us</h2>
            <p className="text-lg text-construction-gray">Located in Pliyandala/Matara, Sri Lanka</p>
          </motion.div>

          <motion.div
            className="bg-white p-4 rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.63241465514!2d79.7633!3d6.9271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1635000000000!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Satis-Fact Engineering Location"
            ></iframe>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

export default Contact
