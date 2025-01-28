import React, { useState } from "react";
import { Link } from 'react-scroll';
import '../style/Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full fixed top-0 z-50 nav-bg">
      {/* Navbar Container */}
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex-shrink-0 text-3xl font-bold text-gray-800">
          Celsystech
        </div>

        {/* Centered Navigation Menu for Larger Screens */}
        <div className="hidden md:flex space-x-8">
          
          <Link to="section1" smooth={true} duration={500} className="text-gray-800 hover:text-blue-600 nav-link">
            Home
          </Link>
          <Link to="section2" smooth={true} duration={500} className="text-gray-800 hover:text-blue-600 nav-link">
            About Us
          </Link>
          <Link to="section3" smooth={true} duration={500} className="text-gray-800 hover:text-blue-600 nav-link">
            Services
          </Link>
          <Link to="section4" smooth={true} duration={500} className="text-gray-800 hover:text-blue-600 nav-link">
            Blog
          </Link>
          <Link to="section5" smooth={true} duration={500} className="text-gray-800 hover:text-blue-600 nav-link">
            Contact
          </Link>

     
        </div>

        {/* Hamburger Menu Icon for Mobile Screens */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Get Quote Button */}
        <div className="hidden md:block">
          <a href="#quote" className="bg-emerald-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-emerald-700 button">
            Get a Quote
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col items-center space-y-4 py-4">
            <a href="#home" className="text-gray-800 hover:text-blue-600">Home</a>
            <a href="#about" className="text-gray-800 hover:text-blue-600">About Us</a>
            <a href="#services" className="text-gray-800 hover:text-blue-600">Services</a>
            <a href="#blog" className="text-gray-800 hover:text-blue-600">Blog</a>
            <a href="#contact" className="text-gray-800 hover:text-blue-600">Contact</a>
            <a href="#quote" className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700">
              Get Quote
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
