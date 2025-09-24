import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
  const projects = [
    {
      id: 1,
      title: "Luxury Residential Complex",
      image: "/src/assets/Luxury Residential Complex.jpg",
      description:
        "Premium residential development featuring eco-friendly design and high-end finishes.",
      category: "Residential",
    },
    {
      id: 2,
      title: "Commercial Office Building",
      image: "/src/assets/Commercial Office Building.jpg",
      description:
        "Cutting-edge office complex with smart technology and sustainable systems.",
      category: "Commercial",
    },
    {
      id: 3,
      title: "Industrial Warehouse Facility",
      image: "/src/assets/Industrial Warehouse Facility.jpg",
      description:
        "Advanced logistics hub with optimized storage and operational efficiency.",
      category: "Industrial",
    },
    {
      id: 4,
      title: "Heritage Building Restoration",
      image: "/src/assets/Heritage Building Restoration.webp",
      description:
        "Meticulous restoration preserving historical architecture with modern upgrades.",
      category: "Restoration",
    },
  ];

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
    hover: { scale: 1.03, transition: { duration: 0.3 } },
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    tap: { scale: 0.98 },
  };

  return (
    <div className="pt-17 bg-gray-50">
      {/* Hero Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          aria-label="Construction showcase video"
          className="absolute inset-0 w-full h-full object-cover opacity-90"
          poster="/placeholder.svg?height=1080&width=1920"
        >
          <source src="/src/assets/cover-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>

        <motion.div
          className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-[-150px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-3xl sm:text-4xl lg:text-7xl font-bold text-white tracking-tight"
          >
            <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent mt-5">
              SATIS-FACT CONSTRUCTION
            </span>
            <br />
            <span className="text-gray-200 text-xl sm:text-2xl lg:text-5xl font-medium">
              & MAINTENANCE SERVICES (PVT) LTD.
            </span>
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-6 text-2xl sm:text-2xl lg:text-2xl xl:text-5xl font-extrabold leading-tight"
          >
            <span className="block text-white drop-shadow-lg">
              Building Dreams
            </span>
            <span className="block bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Raising Standards
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-9 text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto"
          >
            Delivering unparalleled construction and maintenance services with a
            commitment to quality and excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link
                to="/contact"
                className="inline-block bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-red-700 transition-all duration-300"
                onClick={() => window.scrollTo(0, 0)}
              >
                Get Free Estimate
              </Link>
            </motion.div>
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link
                to="/services"
                className="inline-block border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300"
              >
                Our Services
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white"
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div> */}
      </motion.section>

      {/* Featured Projects Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 sm:py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-red-600">
              Our Featured Projects
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of exceptional construction projects
              showcasing our expertise and dedication.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-56 object-cover"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = "/placeholder.svg";
                      }}
                    />
                    <span className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-red-600 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {project.description}
                    </p>
                    <Link
                      to="/services"
                      className="mt-4 inline-block text-red-600 font-medium hover:text-red-800 transition-colors duration-300"
                    >
                      Learn More <span className="ml-1">→</span>
                    </Link>
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
        className="py-16 sm:py-24 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-red-600 mb-6">
                Comprehensive Construction Services
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We offer end-to-end solutions for residential, commercial, and
                industrial projects, ensuring quality and precision in every
                detail.
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
                    <svg
                      className="w-5 h-5 text-red-600 mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-600">{service}</span>
                  </motion.div>
                ))}
              </div>
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Link
                  to="/services"
                  className="inline-block bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-all duration-300"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  View All Services
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img
                  src="/src/assets/company-details.jpg"
                  alt="Construction services showcase"
                  className="w-full rounded-xl shadow-lg"
                />
                <motion.div
                  className="absolute -bottom-4 -right-4 bg-yellow-400 text-red-600 p-4 rounded-lg shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold">15+</div>
                    <div className="text-sm font-medium">
                      Years of Excellence
                    </div>
                  </div>
                </motion.div>
              </div>
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
        className="py-16 sm:py-24 bg-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-red-600">
              Why Choose Satis-Fact?
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Our commitment to quality, reliability, and client satisfaction
              sets us apart in the construction industry.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "fas fa-award",
                title: "Uncompromising Quality",
                description:
                  "ICTAD certified, ensuring top-tier workmanship and materials in every project.",
              },
              {
                icon: "fas fa-clock",
                title: "On-Time Delivery",
                description:
                  "We prioritize your schedule, delivering projects promptly without sacrificing quality.",
              },
              {
                icon: "fas fa-handshake",
                title: "Client-Centric Approach",
                description:
                  "Your vision drives us. We collaborate closely to exceed your expectations.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                custom={index}
                viewport={{ once: true }}
                className="text-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <motion.div
                  className="bg-yellow-400 text-red-600 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <i className={`${feature.icon} text-xl`}></i>
                </motion.div>
                <h3 className="text-lg font-semibold text-red-600 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
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
        className="py-16 sm:py-24 bg-red-700 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Build Your Vision?
            </h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Start your construction or maintenance project with a free
              estimate. Contact us today to bring your ideas to life.
            </p>
          </motion.div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link
                to="/contact"
                className="inline-block bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300"
                onClick={() => window.scrollTo(0, 0)}
              >
                Get Free Estimate
              </Link>
            </motion.div>
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <a
                href="tel:+94763115305"
                className="inline-block border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition-all duration-300"
              >
                <i className="fas fa-phone mr-2"></i>
                Call Now: +94 763 115 305
              </a>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
