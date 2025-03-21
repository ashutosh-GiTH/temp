import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer className="relative bg-gray-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Section - Logo & About */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-3xl font-bold text-blue-400">Advaya 2025</h2>
          <p className="mt-2 text-gray-400">
            Innovate. Create. Dominate. Join the biggest tech event of the year!
          </p>
        </div>

        {/* Center Section - Quick Links */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <a href="#about" className="text-gray-300 hover:text-blue-400">
            About
          </a>
          <a href="#events" className="text-gray-300 hover:text-blue-400">
            Events
          </a>
          <a href="#sponsors" className="text-gray-300 hover:text-blue-400">
            Sponsors
          </a>
          <a href="#contact" className="text-gray-300 hover:text-blue-400">
            Contact
          </a>
        </div>

        {/* Right Section - Social Icons */}
        <div className="flex gap-4 mt-6 md:mt-0">
          <a href="#" className="hover:text-blue-400 transition duration-300">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-blue-400 transition duration-300">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-blue-400 transition duration-300">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-blue-400 transition duration-300">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-4">
        © 2025 TechFest. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
