"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const Services = () => {
  const [flippedCard, setFlippedCard] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState({})

  const services = [
    {
      id: 1,
      title: "Masonry & Tiling",
      icon: "fas fa-hammer",
      image: "/src/assets/Masonry & Tiling.jpg",
      shortDesc: "Professional masonry work and premium tiling solutions",
      fullDesc:
        "Expert masonry services including brickwork, stonework, and premium tiling solutions. We use high-quality materials and proven techniques to ensure durability and aesthetic appeal. Our services include titanium flooring, ceramic tiling, and decorative stonework.",
      features: [
        "Titanium Floor Installation",
        "Ceramic & Porcelain Tiling",
        "Natural Stone Work",
        "Decorative Masonry",
      ],
    },
    {
      id: 2,
      title: "Plumbing",
      icon: "fas fa-wrench",
      image: "/src/assets/Plumbing & Waterproofing.jpg",
      shortDesc: "Complete plumbing solutions and waterproofing services",
      fullDesc:
        "Comprehensive plumbing services from installation to maintenance, plus professional waterproofing solutions. We handle everything from basic repairs to complete system installations, ensuring reliable water supply and effective drainage.",
      features: [
        "Pipe Installation & Repair",
        "Bathroom & Kitchen Plumbing",
        "Waterproofing Systems",
        "Drainage Solutions",
      ],
    },
    {
      id: 3,
      title: "Carpentry & Roofing",
      icon: "fas fa-home",
      image: "/src/assets/Carpentry & Roofing.avif",
      shortDesc: "Custom carpentry work and professional roofing services",
      fullDesc:
        "Skilled carpentry services including custom furniture, built-in storage solutions, and professional roofing services. We work with various materials to create functional and beautiful wooden structures that last.",
      features: [
        "Custom Furniture Design",
        "Built-in Storage Solutions",
        "Roof Installation & Repair",
        "Wooden Flooring",
      ],
    },
    {
      id: 4,
      title: "Painting Services",
      icon: "fas fa-paint-brush",
      image: "/src/assets/Painting Services.jpg",
      shortDesc: "Professional painting and color washing services",
      fullDesc:
        "Complete painting services including spray painting, color washing, and decorative finishes. We use premium paints and modern techniques to achieve flawless results that enhance and protect your property.",
      features: ["Spray Painting", "Color Washing", "Interior & Exterior Painting", "Decorative Finishes"],
    },
    {
      id: 5,
      title: "Electrical Work",
      icon: "fas fa-bolt",
      image: "/src/assets/Electrical Work.webp",
      shortDesc: "Safe and reliable electrical installations and repairs",
      fullDesc:
        "Professional electrical services covering installations, repairs, and maintenance. Our certified electricians ensure all work meets safety standards and local regulations, providing reliable power solutions for your property.",
      features: ["Wiring & Rewiring", "Electrical Panel Installation", "Lighting Solutions", "Safety Inspections"],
    },
    {
      id: 6,
      title: "Air Conditioning",
      icon: "fas fa-snowflake",
      image: "/src/assets/Air Conditioning.png",
      shortDesc: "AC installation, maintenance, and repair services",
      fullDesc:
        "Complete air conditioning services including installation, maintenance, and repairs. We work with all major brands and provide energy-efficient cooling solutions for residential and commercial properties.",
      features: ["AC Installation", "Maintenance & Servicing", "Repair Services", "Energy Efficiency Upgrades"],
    },
    {
      id: 7,
      title: "Handyman Services",
      icon: "fas fa-tools",
      image: "/src/assets/Handyman Services.jpeg",
      shortDesc: "Comprehensive handyman services for all your needs",
      fullDesc:
        "Versatile handyman services covering a wide range of maintenance and repair tasks. From minor fixes to major improvements, our skilled professionals handle various projects with efficiency and attention to detail.",
      features: ["General Repairs", "Maintenance Services", "Home Improvements", "Emergency Fixes"],
    },
    {
      id: 8,
      title: "Project Management",
      icon: "fas fa-clipboard-list",
      image: "/src/assets/Project Management.jpg",
      shortDesc: "End-to-end project management and coordination",
      fullDesc:
        "Professional project management services ensuring your construction project runs smoothly from start to finish. We coordinate all aspects including scheduling, quality control, and budget management.",
      features: ["Project Planning", "Timeline Management", "Quality Control", "Budget Oversight"],
    },
  ]

  // Add ongoing projects data with multiple images
  const ongoingProjects = [
    {
      id: 1,
      title: "Modern Residential Villa Complex",
      location: "Colombo 07, Sri Lanka",
      progress: 85,
      images: [
        "/src/assets/p11.jpg",
        "/src/assets/p12.jpg",
        "/src/assets/p13.jpg",
        "/src/assets/p14.jpg",
        "/src/assets/p15.jpg",
        "/src/assets/p16.jpg",
        "/src/assets/p17.jpg",
        "/src/assets/p18.jpg",
      ],
      description: "Luxury three-story residential villa featuring contemporary architecture, premium finishes, and smart home integration. The project includes landscaped gardens and sustainable energy solutions.",
      startDate: "September 2023",
      expectedCompletion: "March 2024",
      services: ["Masonry & Tiling", "Electrical Work", "Plumbing", "Carpentry"],
    },
    {
      id: 2,
      title: "Commercial Office Tower Renovation",
      location: "Galle Road, Colombo",
      progress: 70,
      images: [
        "/src/assets/p21.jpg",
        "/src/assets/p22.jpg",
        "/src/assets/p23.jpg",
        "/src/assets/p24.jpg",
        "/src/assets/p25.jpg",
        "/src/assets/p26.jpg",
        "/src/assets/p27.jpg",
        "/src/assets/p28.jpg",
      ],
      description: "Complete modernization of a 12-story commercial building including structural reinforcement, facade renovation, and installation of modern MEP systems for improved energy efficiency.",
      startDate: "January 2024",
      expectedCompletion: "September 2024",
      services: ["Structural Work", "Electrical Systems", "Air Conditioning", "Painting"],
    },
    {
      id: 3,
      title: "Heritage Colonial Mansion Restoration",
      location: "Kandy, Central Province",
      progress: 55,
      images: [
        "/src/assets/p30.jpg",
        "/src/assets/p31.jpg",
        "/src/assets/p32.jpg",
        "/src/assets/p33.jpg",
        "/src/assets/p34.jpg",
        "/src/assets/p35.jpg",
      ],
      description: "Meticulous restoration of a 19th-century colonial mansion preserving original architectural elements while incorporating modern amenities. Project includes roof restoration, foundation strengthening, and period-appropriate interior work.",
      startDate: "November 2023",
      expectedCompletion: "December 2024",
      services: ["Heritage Masonry", "Roof Restoration", "Waterproofing", "Traditional Carpentry"],
    },
  ]

  const handleCardClick = (cardId) => {
    setFlippedCard(flippedCard === cardId ? null : cardId)
  }

  const handleImageNavigation = (projectId, direction) => {
    setCurrentImageIndex(prev => {
      const project = ongoingProjects.find(p => p.id === projectId)
      const currentIndex = prev[projectId] || 0
      const maxIndex = project.images.length - 1
      
      let newIndex
      if (direction === 'next') {
        newIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1
      } else {
        newIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1
      }
      
      return { ...prev, [projectId]: newIndex }
    })
  }

  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
    }),
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  }

  // Animation variants for flip effect
  const flipVariants = {
    front: { rotateY: 0, transition: { duration: 0.7, ease: "easeInOut" } },
    back: { rotateY: 180, transition: { duration: 0.7, ease: "easeInOut" } },
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
            src="/src/assets/service.jpg"
            alt="Satis-Fact Engineering Services - Professional Construction Team"
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
            Our Services
          </h1>
          <p className="text-xl md:text-2xl font-body max-w-3xl mx-auto">
            Comprehensive construction and maintenance services delivered with expertise, quality, and customer
            satisfaction as our top priorities.
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

      {/* Services Grid */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="section-padding"
      >
        <div className="container-max">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-construction-red mb-4">What We Offer</h2>
            <p className="text-lg text-construction-gray max-w-2xl mx-auto">
              Click on any service card to learn more about what we offer and how we can help with your project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatePresence>
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="relative h-80 cursor-pointer perspective-1000"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  custom={index}
                  viewport={{ once: true }}
                  onClick={() => handleCardClick(service.id)}
                >
                  <motion.div
                    className="relative w-full h-full"
                    variants={flipVariants}
                    // animate={flippedCard === service.id ? "back" : "front"}
                  >
                    {/* Front of Card */}
                    <motion.div
                      className="absolute inset-0 w-full h-full backface-hidden"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full hover:shadow-xl transition-shadow duration-300">
                        <div className="relative h-48 overflow-hidden">
                          <motion.img
                            src={service.image || "/placeholder.svg"}
                            alt={service.title}
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                          />
                          <motion.div
                            className="absolute inset-0 bg-construction-red bg-opacity-20"
                            whileHover={{ backgroundOpacity: 0.3 }}
                            transition={{ duration: 0.3 }}
                          ></motion.div>
                          <motion.div
                            className="absolute top-4 left-4 bg-construction-yellow text-construction-red p-3 rounded-full"
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            transition={{ duration: 0.3 }}
                          >
                            <i className={`${service.icon} text-xl`}></i>
                          </motion.div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-heading font-semibold mb-2 text-construction-red">
                            {service.title}
                          </h3>
                          <p className="text-construction-gray mb-4">{service.shortDesc}</p>
                          <motion.div
                            className="text-construction-red font-semibold"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            Click to learn more <i className="fas fa-arrow-right ml-1"></i>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Back of Card */}
                    {/* <motion.div
                      className="absolute inset-0 w-full h-full backface-hidden rotate-y-180"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <div className="bg-construction-red text-white rounded-lg shadow-lg h-full p-6 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-heading font-semibold">{service.title}</h3>
                            <motion.i
                              className={`${service.icon} text-construction-yellow text-2xl`}
                              whileHover={{ scale: 1.2, rotate: 10 }}
                              transition={{ duration: 0.3 }}
                            ></motion.i>
                          </div>
                          <p className="text-gray-200 mb-4 text-sm">{service.fullDesc}</p>
                          <div className="space-y-2">
                            {service.features.map((feature, index) => (
                              <motion.div
                                key={index}
                                className="flex items-center text-sm"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.4 }}
                              >
                                <i className="fas fa-check text-construction-yellow mr-2"></i>
                                <span>{feature}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                        <motion.div
                          className="text-construction-yellow font-semibold text-sm mt-4"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          Click to flip back <i className="fas fa-undo ml-1"></i>
                        </motion.div>
                      </div>
                    </motion.div> */}
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </motion.section>

      {/* Ongoing Projects Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="section-padding bg-construction-lightGray"
      >
        <div className="container-max">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-construction-red mb-4">
              Our Ongoing Projects
            </h2>
            <p className="text-lg text-construction-gray max-w-2xl mx-auto">
              Take a look at our current projects in progress, showcasing our expertise across different construction sectors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {ongoingProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  custom={index}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative h-48 overflow-hidden group">
                    <motion.img
                      src={project.images[currentImageIndex[project.id] || 0] || "/src/assets/story.jpeg"}
                      alt={`${project.title} - Image ${(currentImageIndex[project.id] || 0) + 1}`}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      onError={(e) => {
                        e.target.src = "/src/assets/story.jpeg"
                      }}
                    />
                    
                    {/* Progress Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-construction-yellow text-construction-red px-3 py-1 rounded-full text-sm font-semibold">
                        {project.progress}% Complete
                      </span>
                    </div>
                    
                    {/* Image Navigation */}
                    {project.images.length > 1 && (
                      <>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            handleImageNavigation(project.id, 'prev')
                          }}
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-opacity-75"
                        >
                          <i className="fas fa-chevron-left text-sm"></i>
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            handleImageNavigation(project.id, 'next')
                          }}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-opacity-75"
                        >
                          <i className="fas fa-chevron-right text-sm"></i>
                        </button>
                        
                        {/* Image Indicators */}
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                          {project.images.map((_, imgIndex) => (
                            <button
                              key={imgIndex}
                              onClick={(e) => {
                                e.stopPropagation()
                                setCurrentImageIndex(prev => ({ ...prev, [project.id]: imgIndex }))
                              }}
                              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                (currentImageIndex[project.id] || 0) === imgIndex 
                                  ? 'bg-construction-yellow' 
                                  : 'bg-white bg-opacity-50'
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-heading font-semibold mb-2 text-construction-red">
                      {project.title}
                    </h3>
                    <p className="text-sm text-construction-gray mb-2 flex items-center">
                      <i className="fas fa-map-marker-alt mr-2 text-construction-red"></i>
                      {project.location}
                    </p>
                    <p className="text-construction-gray mb-4 text-sm">{project.description}</p>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-construction-gray mb-1">
                        <span>Progress</span>
                        <span>{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          className="bg-construction-red h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${project.progress}%` }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                          viewport={{ once: true }}
                        ></motion.div>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-construction-gray">Started:</span>
                        <span className="text-construction-red font-semibold">{project.startDate}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-construction-gray">Expected:</span>
                        <span className="text-construction-red font-semibold">{project.expectedCompletion}</span>
                      </div>
                    </div>

                    {/* Services */}
                    {/* <div className="flex flex-wrap gap-2">
                      {project.services.map((service, serviceIndex) => (
                        <span
                          key={serviceIndex}
                          className="bg-construction-lightGray text-construction-red px-2 py-1 rounded text-xs font-medium"
                        >
                          {service}
                        </span>
                      ))}
                    </div> */}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="section-padding bg-construction-lightGray"
      >
        <div className="container-max">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-construction-red mb-4">Our Process</h2>
            <p className="text-lg text-construction-gray max-w-2xl mx-auto">
              We follow a systematic approach to ensure every project is completed to the highest standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <AnimatePresence>
              {[
                {
                  step: "01",
                  title: "Consultation",
                  description: "We discuss your needs, assess the project scope, and provide expert recommendations.",
                  icon: "fas fa-comments",
                },
                {
                  step: "02",
                  title: "Planning",
                  description: "Detailed project planning including timeline, materials, and cost estimation.",
                  icon: "fas fa-drafting-compass",
                },
                {
                  step: "03",
                  title: "Execution",
                  description: "Professional execution with quality control and regular progress updates.",
                  icon: "fas fa-hard-hat",
                },
                {
                  step: "04",
                  title: "Completion",
                  description: "Final inspection, cleanup, and handover with warranty and support.",
                  icon: "fas fa-check-circle",
                },
              ].map((process, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  custom={index}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="bg-construction-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 relative"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <i className={`${process.icon} text-2xl`}></i>
                    <motion.div
                      className="absolute -top-2 -right-2 bg-construction-yellow text-construction-red text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    >
                      {process.step}
                    </motion.div>
                  </motion.div>
                  <h3 className="text-lg font-heading font-semibold mb-2 text-construction-red">{process.title}</h3>
                  <p className="text-construction-gray mb-4">{process.description}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default Services