import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import bossImage from "../assets/boss.jpg"

const About = () => {
  const values = [
    {
      icon: "fas fa-bullseye",
      title: "Quality First",
      description: "We never compromise on quality, using only the best materials and proven construction techniques.",
    },
    {
      icon: "fas fa-users",
      title: "Customer Focus",
      description: "Your satisfaction is our success. We listen, understand, and deliver exactly what you need.",
    },
    {
      icon: "fas fa-shield-alt",
      title: "Reliability",
      description: "Count on us for consistent, dependable service and timely project completion.",
    },
    {
      icon: "fas fa-lightbulb",
      title: "Innovation",
      description: "We embrace new technologies and methods to provide efficient, modern solutions.",
    },
  ]

  const team = [
    {
      name: "W.A. Abeynayake",
      position: "Founder & Managing Director",
      image: bossImage,
      description: "Experienced Civil Engineer (NVQ Level 05) with over 16 years of expertise in construction, consultation, and project management. Skilled in overseeing diverse civil engineering projects from planning to completion, ensuring quality, safety, and efficiency while delivering client-focused solutions.",
    },
    
  ]

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
            src="/src/assets/aboutus.jpg"
            alt="Satis-Fact Engineering - Professional Construction Services"
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
            About Satis-Fact Engineering
          </h1>
          <p className="text-xl md:text-2xl font-body max-w-3xl mx-auto">
            Building dreams and raising standards since our inception. We are a trusted construction and engineering
            company committed to delivering exceptional quality and customer satisfaction.
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

      {/* Company Story */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="section-padding"
      >
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-construction-red mb-6">Our Story</h2>
              <p className="text-lg text-construction-gray mb-6">
                Satis-Fact Engineering was founded with a simple yet powerful vision: to provide comprehensive
                construction and maintenance services that exceed customer expectations. What started as a small local
                business has grown into a trusted name in the Sri Lankan construction industry.
              </p>
              <p className="text-lg text-construction-gray mb-6">
                Our journey has been marked by continuous learning, adaptation, and an unwavering commitment to quality.
                We've successfully completed hundreds of projects, from residential homes to commercial complexes, each
                one reinforcing our reputation for excellence.
              </p>
              <p className="text-lg text-construction-gray">
                Today, we stand as an ICTAD-certified company, equipped with modern tools, skilled professionals, and
                the experience to handle projects of any scale and complexity.
              </p>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="/src/assets/story.jpeg?height=500&width=600"
                alt="Construction team at work"
                className="w-full rounded-lg shadow-lg"
              />
              <motion.div
                className="absolute -bottom-6 -right-6 bg-construction-red text-white p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <div className="text-2xl font-heading font-bold">500+</div>
                  <div className="text-sm">Projects Completed</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Mission & Vision */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="section-padding bg-construction-red text-white"
      >
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-construction-yellow text-construction-red w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                <i className="fas fa-bullseye text-2xl"></i>
              </motion.div>
              <h3 className="text-2xl font-heading font-bold mb-4">Our Mission</h3>
              <p className="text-lg text-gray-200">
                To deliver exceptional construction and maintenance services that transform spaces and exceed
                expectations, while building lasting relationships with our clients through trust, quality, and
                reliability.
              </p>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-orange-300 text-orange-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                <i className="fas fa-eye text-2xl"></i>
              </motion.div>
              <h3 className="text-2xl font-heading font-bold mb-4">Our Vision</h3>
              <p className="text-lg text-gray-200">
                To be the leading construction and engineering company in Sri Lanka, recognized for innovation,
                sustainability, and unwavering commitment to customer satisfaction and community development.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Core Values */}
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
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-construction-red mb-4">Our Core Values</h2>
            <p className="text-lg text-construction-gray max-w-2xl mx-auto">
              These fundamental principles guide every decision we make and every project we undertake.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatePresence>
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  custom={index}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="bg-construction-lightGray group-hover:bg-construction-red text-construction-red group-hover:text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <i className={`${value.icon} text-3xl`}></i>
                  </motion.div>
                  <h3 className="text-xl font-heading font-semibold mb-3 text-construction-red">{value.title}</h3>
                  <p className="text-construction-gray">{value.description}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
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
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-construction-red mb-4">Meet Our </h2>
            <p className="text-lg text-construction-gray max-w-2xl mx-auto">
              Our experienced professionals bring expertise, dedication, and passion to every project we undertake.
            </p>
          </motion.div>

          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <AnimatePresence>
                {team.map((member, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    custom={index}
                    viewport={{ once: true }}
                    className="bg-white rounded-lg shadow-lg overflow-hidden relative ring-4 ring-construction-red ring-opacity-30"
                  >
                    {/* Special founder badge for W.A. Abeynayake */}
                    <motion.div
                      className="absolute top-4 right-4 z-10 bg-construction-red text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5, duration: 0.4 }}
                    >
                      Founder
                    </motion.div>
                    
                    <div className="relative h-80 overflow-hidden">
                      <motion.img 
                        src={member.image || "/placeholder.svg"} 
                        alt={member.name} 
                        className="w-full h-full object-cover object-top transition-all duration-500 hover:scale-110"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                      />
                      
                      {/* Special gradient overlay for founder */}
                      <div className="absolute inset-0 bg-gradient-to-t from-construction-red/20 via-transparent to-transparent"></div>
                    </div>
                    
                    <div className="p-6 bg-gradient-to-br from-white to-construction-lightGray text-center">
                      <motion.h3 
                        className="text-2xl font-heading font-semibold mb-2 text-construction-red"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {member.name}
                      </motion.h3>
                      <p className="text-construction-red bg-construction-yellow px-3 py-1 rounded-md inline-block font-semibold mb-3">
                        {member.position}
                      </p>
                      <p className="text-construction-gray leading-relaxed">{member.description}</p>
                      
                      {/* Special decorative element for founder */}
                      {/* <motion.div
                        className="mt-4 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.4 }}
                      >
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-construction-red rounded-full"></div>
                          <div className="w-2 h-2 bg-construction-yellow rounded-full"></div>
                          <div className="w-2 h-2 bg-construction-red rounded-full"></div>
                        </div>
                      </motion.div> */}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default About