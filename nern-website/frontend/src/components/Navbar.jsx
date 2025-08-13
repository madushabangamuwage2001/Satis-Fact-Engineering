"use client"

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logoImage from "../assets/logo.png"; // Import logo directly for better asset handling
import smartimage from "../assets/smart.png"; // Import smart image directly for better asset handling
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-700 ease-in-out ${
        isScrolled
          ? "backdrop-blur-xl shadow-2xl border-b border-gray-100/20 bg-white/90"
          : "bg-black/20 backdrop-blur-sm" // Add subtle dark background with blur for better readability
      }`}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="relative">
              {/* Glow background */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-yellow-400/20 via-red-400/30 to-red-700/40 blur-lg opacity-0 group-hover:opacity-80 transition-all duration-700"></div>

              <img
                src={logoImage}
                alt="Satis-Fact Engineering Logo"
                className="relative h-20 sm:h-24 w-auto z-10 rounded-xl transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-1 group-hover:shadow-2xl shadow-red-500/40"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 z-0 rounded-xl bg-gradient-to-r from-red-500/20 to-yellow-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="hidden sm:block">
              <h1
                className={`text-3xl font-extrabold tracking-tight transition-all duration-500 transform group-hover:scale-105 ${
                  isScrolled
                    ? "text-black-800"
                    : "text-[#F0F0F0] drop-shadow-md font-bold [text-stroke:2px_black]" // Better contrast on transparent background
                }`}
              > 
                Satis-fact Construction & Maintenance <br/>
                             Services (pvt) Ltd.
              </h1>
              <p
                className={`text-base italic font-semibold tracking-widest transition-all duration-500 ease-in-out ${
                  isScrolled
                    ? "text-red-700 drop-shadow-md"
                    : "text-white/80 drop-shadow-xl"
                }`}
              >
                 <img
                src={smartimage}
                alt="Satis-Fact Engineering Logo"
                className="absolute top-[-30px] left-[280px] h-10 w-20 z-10 rounded-xl transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-1 group-hover:shadow-2xl shadow-red-500/40"
              />
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-14">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-semibold text-lg tracking-wide transition-all duration-500 group transform hover:scale-105 ${
                  location.pathname === link.path
                    ? isScrolled
                      ? "text-red-700"
                      : "text-red-400 drop-shadow-md"
                    : isScrolled
                      ? "text-gray-700 hover:text-red-700"
                      : "text-white hover:text-red-400 drop-shadow-md" // Better contrast on transparent background
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                <span
                  className={`absolute inset-0 -z-10 rounded-lg transition-all duration-500 transform scale-0 group-hover:scale-100 ${
                    isScrolled ? "bg-red-50" : "bg-white/10"
                  } px-4 py-2 -mx-4 -my-2`}
                ></span>
                <span
                  className={`absolute -bottom-2 left-0 h-1 transition-all duration-500 rounded-full group-hover:w-full ${
                    location.pathname === link.path
                      ? isScrolled
                        ? "bg-gradient-to-r from-red-600 to-red-800 w-full"
                        : "bg-gradient-to-r from-red-400 to-red-600 w-full"
                      : isScrolled
                        ? "bg-gradient-to-r from-red-600 to-red-800 w-0"
                        : "bg-gradient-to-r from-red-400 to-red-600 w-0"
                  }`}
                ></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-3 rounded-xl transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-red-700/30 transform hover:scale-110 ${
              isScrolled
                ? "hover:bg-red-50 shadow-lg"
                : "bg-white/10 hover:bg-white/20 backdrop-blur-sm" // Add subtle background for better visibility
            }`}
            aria-label="Toggle menu"
          >
            <div className="w-8 h-8 flex flex-col justify-center items-center space-y-2">
              <span
                className={`block h-1 w-8 rounded-full transition-all duration-500 ease-out ${
                  isScrolled ? "bg-red-700" : "bg-white shadow-md"
                } ${isOpen ? "rotate-45 translate-y-3" : "-translate-y-0.5"}`}
              ></span>
              <span
                className={`block h-1 w-8 rounded-full transition-all duration-500 ease-out ${
                  isScrolled ? "bg-red-700" : "bg-white shadow-md"
                } ${isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"}`}
              ></span>
              <span
                className={`block h-1 w-8 rounded-full transition-all duration-500 ease-out ${
                  isScrolled ? "bg-red-700" : "bg-white shadow-md"
                } ${isOpen ? "-rotate-45 -translate-y-3" : "translate-y-0.5"}`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white/98 backdrop-blur-2xl border-t border-gray-200/50 shadow-2xl animate-slide-down">
            <div className="py-6 px-3 space-y-3"> {/* Adjust spacing for mobile */}
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-8 py-4 font-semibold text-xl tracking-wide transition-all rounded-2xl mx-2 transform hover:scale-105 hover:shadow-lg ${
                    location.pathname === link.path
                      ? "text-white bg-gradient-to-r from-red-600 to-red-700 shadow-xl"
                      : "text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-red-500 hover:to-red-600"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span
                      className={`w-2 h-2 rounded-full transition-all ${
                        location.pathname === link.path
                          ? "bg-yellow-400 scale-100"
                          : "bg-transparent scale-0"
                      }`}
                    ></span>
                    <span>{link.label}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
