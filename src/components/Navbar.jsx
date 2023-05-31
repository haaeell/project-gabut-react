import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaInstagram, FaGithub , FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return ( 
    <nav className="fixed top-0 left-0 right-0  p-6 bg-gradient-to-r from-blue-500 to-blue-900 shadow-lg shadow-blue-500/50 z-20" >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-extrabold">Huru Hara</div>
        <div className="flex items-center space-x-4">
          <ul className={`font-semibold hidden sm:flex space-x-7 ${isMenuOpen ? 'block' : 'hidden'}`}>
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
          <div className="flex space-x-2 text-xl items-center">
          <span className='hidden md:text-white md:block  md:mx-7'>|</span>
          <a href="https://github.com/haaeell" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
              <FaGithub/>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
              <FaLinkedin/>
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
