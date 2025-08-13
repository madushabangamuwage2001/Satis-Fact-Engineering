import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Masonry & Tiling",
    "Plumbing & Waterproofing",
    "Carpentry & Roofing",
    "Painting Services",
    "Electrical Work",
    "Air Conditioning",
    "Handyman Services",
  ];

  const quickLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <footer className="bg-gray-900 text-white font-serif">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Company Info */}
          <div>
            <h4 className="text-lg font-semibold text-yellow-400 mb-3 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-10 after:h-1 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-12">
              Company Info
            </h4>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/src/assets/flogo.jpg"
                alt="Satis-Fact Engineering Logo"
                className="h-10 w-auto transition-transform duration-300 hover:scale-105"
              />
              <div>
                <h5 className="text-lg font-bold text-yellow-400">Satis-Fact Engineering</h5>
                <p className="text-yellow-300 text-base italic text-sm font-medium">Smart is Art</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Top-tier construction and engineering services in Sri Lanka, prioritizing quality and client satisfaction.
            </p>
            <div className="flex space-x-3">
              {[
                { href: "https://facebook.com", icon: "fab fa-facebook-f", label: "Facebook" },
                { href: "https://instagram.com", icon: "fab fa-instagram", label: "Instagram" },
                { href: "https://linkedin.com", icon: "fab fa-linkedin-in", label: "LinkedIn" },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 text-gray-300 hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300"
                  aria-label={label}
                >
                  <i className={`${icon} text-base`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-yellow-400 mb-3 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-10 after:h-1 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-12">
              Our Services
            </h4>
            <ul className="space-y-1">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to="/services"
                    className="text-gray-300 hover:text-yellow-400 text-sm transition-all duration-300 flex items-center group"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <span className="mr-2 text-yellow-400 group-hover:transform group-hover:translate-x-1 transition-transform">›</span>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-yellow-400 mb-3 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-10 after:h-1 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-12">
              Quick Links
            </h4>
            <ul className="space-y-1">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-yellow-400 text-sm transition-all duration-300 flex items-center group"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <span className="mr-2 text-yellow-400 group-hover:transform group-hover:translate-x-1 transition-transform">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-yellow-400 mb-3 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-10 after:h-1 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-12">
              Contact Info
            </h4>
            <div className="space-y-2 text-gray-300 text-sm">
              {[
                { icon: "fas fa-phone", text: "+94 763 115 305" },
                { icon: "fas fa-phone", text: "+94 712 912 196" },
                { icon: "fas fa-envelope", text: "asankaabeynayake@gmail.com", isEmail: true },
                { icon: "fas fa-map-marker-alt", text: "Piliyandala/Matara, Sri Lanka" },
              ].map(({ icon, text, isEmail }, index) => (
                <p key={index} className="flex items-center group">
                  <i className={`${icon} mr-2 text-yellow-400 group-hover:transform group-hover:rotate-12 transition-transform`}></i>
                  {isEmail ? (
                    <a 
                      href={`mailto:${text}`}
                      className="hover:text-yellow-400 transition-colors duration-300"
                    >
                      {text}
                    </a>
                  ) : (
                    text
                  )}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          {/* <p className="text-gray-300 text-sm">
            © {currentYear} Satis-Fact Engineering. All rights reserved.
          </p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;