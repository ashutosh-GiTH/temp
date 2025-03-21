"use client";

import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { UserContext } from "@/context/UserContext";

export default function Navbar() {
  const pathname = usePathname();
  const { userData } = useContext(UserContext);

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (pathname === "/") return <></>;

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 w-full z-50 
          text-white py-4 px-6 flex justify-between items-center
          shadow-lg transition-colors duration-300
          ${
            isScrolled
              ? "bg-gradient-to-b from-transparent to-black/40 backdrop-blur-md"
              : "bg-transparent"
          }
        `}
      >
        {/* Logo */}
        <h1 className="text-2xl font-bold">SCSE</h1>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/home" className="hover:text-blue-400">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-400">
            About
          </Link>
          <Link href="/events" className="hover:text-blue-400">
            Events
          </Link>
          <Link href="/team" className="hover:text-blue-400">
            Our Team
          </Link>
          <Link href="/contact" className="hover:text-blue-400">
            Contact
          </Link>
        </div>

        {/* Conditionally render based on userData */}
        {!userData ? (
          <div className="hidden md:flex space-x-6">
            <Link href="/login" className="hover:text-blue-400">
              Login
            </Link>
            <Link href="/register" className="hover:text-blue-400">
              Register
            </Link>
          </div>
        ) : (
          <div className="hidden md:flex space-x-6">
            <Link href="/dashboard" className="hover:text-blue-400">
              Dashboard
            </Link>
          </div>
        )}

        {/* Mobile Menu Icon (Hamburger) */}
        <div className="md:hidden">
          <Image
            src="/navbar.svg"
            alt="Menu"
            width={24}
            height={24}
            className="cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        </div>
      </nav>

      {/* Full-Screen Overlay for Mobile Menu */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/90 z-[9999] flex flex-col items-center justify-center md:hidden">
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white text-3xl"
            onClick={() => setIsOpen(false)}
          >
            &times;
          </button>

          {/* Mobile Nav Links */}
          <Link
            href="/home"
            className="text-white text-2xl mb-6 hover:text-blue-400"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-white text-2xl mb-6 hover:text-blue-400"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-white text-2xl mb-6 hover:text-blue-400"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </>
  );
}
