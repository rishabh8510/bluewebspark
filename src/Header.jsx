import React from 'react';
import logo from './assets/logo.svg';
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { HiOutlineDownload } from "react-icons/hi";
import { US,GB, EU, AU, CA } from 'country-flag-icons/react/3x2';

const Header = () => (
  <header className="p-4 bg-gradient-to-r from-[#02060c] via-[#0d1d34] to-[#02060c]">
    <nav className="container mx-auto flex flex-col md:flex-row justify-between items-center border-b border-gray-800/50 pb-4">
      {/* Left section: Country flags */}
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 w-full md:w-auto">
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <span className="text-white text-xs font-light flex items-center">
            <US title="United States" className="h-3 mr-2" /> USA
          </span>
          <span className="text-white text-xs font-light flex items-center">
            <CA title="Canada" className="h-3 mr-2" /> Canada
          </span>
          <span className="text-white text-xs font-light flex items-center">
            <AU title="Australia" className="h-3 mr-2" /> Australia
          </span>
          <span className="text-white text-xs font-light flex items-center">
            <EU title="European Union" className="h-3 mr-2" /> Europe
          </span>
          <span className="text-white text-xs font-light flex items-center">
            <GB title="United Kingdom" className="h-3 mr-2" /> UK
          </span>
        </div>
      </div>

      {/* Right section: Contact Info */}
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0">
        <IoIosMail className="text-white h-5 w-5" />
        <a href="mailto:hr@bluewebspark.com" className="text-white text-xs font-light flex items-center">
          hr@bluewebspark.com
        </a>
        <FaPhone className="text-white h-4 w-4" />
        <a href="tel:+911234567890" className="text-white text-xs font-light flex items-center">
          +91 1234567890
        </a>
      </div>
    </nav>

    {/* Second nav: Logo, links, and brochure button */}
    <nav className="container mx-auto mt-4">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-12" />

        {/* Nav Links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8">
          <a href="#software" className="text-white text-sm font-light hover:text-blue-400 transition-colors">
            Software Solution
          </a>
          <a href="#ai" className="text-white text-sm font-light hover:text-blue-400 transition-colors">
            AI Solution
          </a>
          <a href="#bpo" className="text-white text-sm font-light hover:text-blue-400 transition-colors">
            BPO Services
          </a>
          <a href="#industry" className="text-white text-sm font-light hover:text-blue-400 transition-colors">
            Solution For Industry
          </a>
          <a href="#delivered" className="text-white text-sm font-light hover:text-blue-400 transition-colors">
            Delivered Solutions
          </a>
          <a href="#contact" className="text-white text-sm font-light hover:text-blue-400 transition-colors">
            Contact Us
          </a>
        </div>

        {/* Brochure Button */}
        <button className="bg-[#0066FF] text-white px-6 py-2 rounded text-sm font-light flex items-center">
          Brochure <HiOutlineDownload className="ml-2" />
        </button>
      </div>
    </nav>
  </header>
);

export default Header;
