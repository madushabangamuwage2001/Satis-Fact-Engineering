"use client";

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logoImage from "../assets/logo.png"; // Import logo directly for better asset handling
import smartimage from "../assets/smart2.png"; // Import smart image directly for better asset handling

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
        
          "backdrop-blur-xl shadow-2xl border-b border-red-200/30 bg-white/95"
      }`}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-24">
        <div className="flex justify-between items-center py-2">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-5 group">
            <div className="relative">
              {/* Enhanced glow background for logo */}
              {/* <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-400/40 via-red-500/50 to-red-700/60 blur-xl opacity-60 group-hover:opacity-100 transition-all duration-700 scale-110"></div> */}

              {/* Logo container with enhanced styling */}
              <div className="relative  rounded-2xl bg-gradient-to-br from-white/90 to-gray-100/90 shadow-2xl border border-white/50">
                <img
                  src={logoImage}
                  alt="Satis-Fact Engineering Logo"
                  className="relative h-20 sm:h-20 w-auto z-10 rounded-xl transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-1 filter drop-shadow-lg"
                />
              </div>

              {/* Additional glow effect */}
              <div className="absolute inset-0 z-0 rounded-2xl bg-gradient-to-r from-red-500/30 to-yellow-400/30 opacity-0 group-hover:opacity-80 transition-all duration-500 blur-md"></div>
            </div>

            <div className="hidden sm:block">
              <h1
                className={`text-3xl font-extrabold tracking-tight transition-all duration-500 transform group-hover:scale-105 ${
                  
                  
                    "text-gray-800 drop-shadow-md"
                }`}
              >
                <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-red text-[35px] font-regular">
                  Satis-Fact Construction
                </span>
                <br />
                {/* <span className={`text-2xl ${isScrolled ? "text-gray-700" : "text-gray-200"}`}>
                  Services (pvt) Ltd.
                </span> */}
              </h1>
              <div className="relative mt-5">
                <img
                  src={smartimage}
                  alt="Smart Construction Badge"
                  className="absolute top-[-16px] left-[5px] h-9 w-auto z-10 rounded-xl transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-1 drop-shadow-xl"
                />
                {/* <p
                  className={`text-sm italic font-medium tracking-widest transition-all duration-500 ease-in-out ${
                    isScrolled
                      ? "text-red-600 drop-shadow-sm"
                      : "text-yellow-300 drop-shadow-lg"
                  }`}
                >
                  Building Excellence Since 2009
                </p> */}
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-bold text-lg tracking-wide transition-all duration-500 group transform hover:scale-105 ${
                  location.pathname === link.path
                    ? isScrolled
                      ? "text-red-700"
                      : "text-red-700"
                    : isScrolled
                    ? "text-gray-700 hover:text-red-700"
                    : "text-gray-700 hover:text-red-700"
                }`}
              >
                <span className="relative z-10">{link.label}</span>

                {/* Background hover effect */}
                <span
                  className={`absolute inset-0 -z-10 rounded-xl transition-all duration-500 transform scale-0 group-hover:scale-100 ${
                    isScrolled
                      ? "bg-gradient-to-r from-red-50 to-red-100 shadow-lg"
                      : "bg-gradient-to-r from-red-50 to-red-100 shadow-lg"
                  } px-6 py-3 -mx-6 -my-3`}
                ></span>

                {/* Active/hover underline */}
                <span
                  className={`absolute -bottom-3 left-0 h-1.5 transition-all duration-500 rounded-full ${
                    location.pathname === link.path
                      ? isScrolled
                        ? "bg-gradient-to-r from-red-600 to-red-800 w-full shadow-lg"
                        : "bg-gradient-to-r from-red-600 to-red-800 w-full shadow-lg"
                      : isScrolled
                      ? "bg-gradient-to-r from-red-600 to-red-800 w-0 group-hover:w-full"
                      : "bg-gradient-to-r from-red-600 to-red-800 w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-4 rounded-2xl transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-red-500/30 transform hover:scale-110 ${
              
                "hover:bg-red-50 shadow-lg border border-red-200"
                
            }`}
            aria-label="Toggle menu"
          >
            <div className="w-8 h-8 flex flex-col justify-center items-center space-y-2">
              <span
                className={`block h-1.5 w-8 rounded-full transition-all duration-500 ease-out ${
                   "bg-red-700" 
                } ${isOpen ? "rotate-45 translate-y-3.5" : "-translate-y-0.5"}`}
              ></span>
              <span
                className={`block h-1.5 w-8 rounded-full transition-all duration-500 ease-out ${
                  "bg-red-700" 
                } ${isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"}`}
              ></span>
              <span
                className={`block h-1.5 w-8 rounded-full transition-all duration-500 ease-out ${
                   "bg-red-700"  
                } ${
                  isOpen ? "-rotate-45 -translate-y-3.5" : "translate-y-0.5"
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-gradient-to-br from-white/98 to-gray-50/98 backdrop-blur-3xl border-t border-red-200/50 shadow-2xl animate-slide-down rounded-b-3xl">
            <div className="py-8 px-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-8 py-5 font-bold text-xl tracking-wide transition-all rounded-2xl mx-2 transform hover:scale-105 hover:shadow-xl ${
                    location.pathname === link.path
                      ? "text-white bg-gradient-to-r from-red-600 via-red-700 to-red-800 shadow-xl border border-red-500"
                      : "text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-red-500 hover:via-red-600 hover:to-red-700 border border-gray-200 hover:border-red-300"
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <span
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        location.pathname === link.path
                          ? "bg-yellow-400 scale-100 shadow-lg"
                          : "bg-transparent scale-0"
                      }`}
                    ></span>
                    <span>{link.label}</span>
                    {location.pathname === link.path && (
                      <span className="ml-auto text-yellow-400">
                        <i className="fas fa-chevron-right"></i>
                      </span>
                    )}
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
