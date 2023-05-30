import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-blue-900 to-blue-500 p-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Huru Hara</div>
        <div className="flex items-center space-x-4">
          <ul className={`hidden sm:flex space-x-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
            <li>
              <Link to="/" className="text-white hover:text-gray-200">Home</Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-gray-200">About</Link>
            </li>
            <li>
              <Link to="/services" className="text-white hover:text-gray-200">Services</Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:text-gray-200">Contact</Link>
            </li>
          </ul>
          <div className="flex space-x-2">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
              <FaFacebook />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
              <FaInstagram />
            </a>
          </div>
          <div className="sm:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
      {/* Tambahkan menu untuk ukuran layar kecil */}
      <ul className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <li>
          <Link to="/" className="text-white hover:text-gray-200 block py-2">Home</Link>
        </li>
        <li>
          <Link to="/about" className="text-white hover:text-gray-200 block py-2">About</Link>
        </li>
        <li>
          <Link to="/services" className="text-white hover:text-gray-200 block py-2">Services</Link>
        </li>
        <li>
          <Link to="/contact" className="text-white hover:text-gray-200 block py-2">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
