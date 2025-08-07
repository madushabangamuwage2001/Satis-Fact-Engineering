import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"

const Home = () => {
  const projects = [
    {
      id: 1,
      title: "Luxury Residential Complex",
      image: "/src/assets/Luxury Residential Complex.jpg",
      description: "Modern residential development with premium finishes and sustainable design.",
      category: "Residential",
    },
    {
      id: 2,
      title: "Commercial Office Building",
      image: "/src/assets/Commercial Office Building.jpg",
      description: "State-of-the-art office complex with modern amenities and energy-efficient systems.",
      category: "Commercial",
    },
    {
      id: 3,
      title: "Industrial Warehouse Facility",
      image: "/src/assets/Industrial Warehouse Facility.jpg",
      description: "Large-scale industrial facility with advanced logistics and storage solutions.",
      category: "Industrial",
    },
    {
      id: 4,
      title: "Heritage Building Restoration",
      image: "/src/assets/Heritage Building Restoration.webp",
      description: "Careful restoration of historic building preserving architectural heritage.",
      category: "Restoration",
    },
  ]

  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  // Animation variants for project cards
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
    }),
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  }

  // Animation variants for buttons
  const buttonVariants = {
    hover: { scale: 1.1, transition: { duration: 0.3 } },
    tap: { scale: 0.95 },
  }

  return (
    <div className="pt-21">
      {/* Hero Section with Video */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/placeholder.svg?height=1080&width=1920"
        >
          <source src="/src/assets/cover-video.mp4" type="video/mp4" />
          <img
            src="/placeholder.svg?height=180&width=1920"
            alt="Construction site background"
            className="w-full h-full object-cover"
          />
        </video>

        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <motion.div
          className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
            Building Dreams
            <br />
            <span className="text-construction-yellow">Raising Standards</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-body max-w-2xl mx-auto">
            Professional construction, maintenance, and engineering services with uncompromising quality and customer
            satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <Link 
                to="/contact" 
                className="btn-primary text-lg px-8 py-4"
                onClick={() => window.scrollTo(0, 0)}
              >
                Get Free Estimate
              </Link>
            </motion.div>
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <Link to="/services" className="btn-secondary text-lg px-8 py-4">
                Our Services
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <i className="fas fa-chevron-down text-2xl"></i>
        </motion.div>
      </motion.section>

      {/* Featured Projects Section */}
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
              Our Featured Projects
            </h2>
            <p className="text-lg text-construction-gray max-w-2xl mx-auto">
              Discover some of our most successful construction and engineering projects that showcase our expertise and
              commitment to excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatePresence>
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  custom={index}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-construction-red text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-heading font-semibold mb-2 text-construction-red">{project.title}</h3>
                    <p className="text-construction-gray mb-4">{project.description}</p>
                    {/* <Link
                      to="/services"
                      className="text-construction-red font-semibold hover:text-red-800 transition-colors duration-300"
                    >
                      Learn More <i className="fas fa-arrow-right ml-1"></i>
                    </Link> */}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </motion.section>

      {/* Services Overview */}
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
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-construction-red mb-6">
                Comprehensive Construction Services
              </h2>
              <p className="text-lg text-construction-gray mb-6">
                From masonry and plumbing to electrical work and handyman services, we provide complete construction and
                maintenance solutions for residential, commercial, and industrial projects.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Masonry & Tiling",
                  "Plumbing & Waterproofing",
                  "Carpentry & Roofing",
                  "Electrical Work",
                  "Painting Services",
                  "Air Conditioning",
                  "Handyman Services",
                  "Project Management",
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <i className="fas fa-check-circle text-construction-red mr-3"></i>
                    <span className="text-construction-gray">{service}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                <Link
                  to="/services"
                  className="btn-primary"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  View All Services
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="/src/assets/company-details.jpg"
                alt="Satis-Fact Engineering Services"
                className="w-full rounded-lg shadow-lg"
              />
              <motion.div
                className="absolute -bottom-6 -left-6 bg-construction-yellow text-construction-red p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <div className="text-2xl font-heading font-bold">15+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="section-padding bg-[#DCDCDC] text-black"
      >
        <div className="container-max">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Why Choose Satis-Fact Engineering?</h2>
            <p className="text-xl max-w-2xl mx-auto">
              We combine expertise, quality materials, and customer-focused service to deliver exceptional results on
              every project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "fas fa-award",
                title: "Quality Assurance",
                description:
                  "ICTAD certified with rigorous quality control processes ensuring superior workmanship on every project.",
              },
              {
                icon: "fas fa-clock",
                title: "Timely Delivery",
                description:
                  "We respect your time and deadlines, delivering projects on schedule without compromising quality.",
              },
              {
                icon: "fas fa-handshake",
                title: "Customer Satisfaction",
                description: "Your satisfaction is our priority. We work closely with clients to exceed expectations.",
              },
            ].map((feature, index) => (
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
                  className="bg-construction-yellow text-construction-red w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <i className={`${feature.icon} text-2xl`}></i>
                </motion.div>
                <h3 className="text-xl font-heading font-semibold mb-3">{feature.title}</h3>
                <p className="text-black-200">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="section-padding bg-[FFA07A]"
      >
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-construction-red mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-construction-red mb-8 max-w-2xl mx-auto">
              Get a free estimate for your construction or maintenance project. Contact us today and let's bring your
              vision to life.
            </p>
          </motion.div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <Link 
                to="/contact" 
                className="btn-primary bg-construction-red hover:bg-red-800"
                onClick={() => window.scrollTo(0, 0)}
              >
                Get Free Estimate
              </Link>
            </motion.div>
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <a
                href="tel:+94763115305"
                className="bg-white text-construction-red px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-construction-red focus:ring-opacity-50"
              >
                <i className="fas fa-phone mr-2"></i>
                Call Now: +94 763 115 305
              </a>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default Home