"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const navRef = useRef(null);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle escape key press
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    function handleClickOutsideMobile(event) {
      if (
        isMobileMenuOpen &&
        navRef.current &&
        !navRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutsideMobile);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideMobile);
    };
  }, [isMobileMenuOpen]);

  // Modified isActive function to check current path
  const isActive = (path) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(path);
  };

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-2"
          : "bg-white bg-opacity-95 shadow-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="/" className="flex-shrink-0 flex items-center">
              <div
                className={`relative overflow-hidden transition-all duration-300 ${
                  scrolled ? "h-8 w-8 mr-2" : "h-10 w-10 mr-2"
                }`}
              >
                <Image
                  src="/images/rako foods.jpeg"
                  alt="Rako Foods Logo"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <span
                className={`font-bold text-primary transition-all duration-300 ${
                  scrolled ? "text-lg" : "text-xl"
                }`}
              >
                RAKO FOODS
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-5">
            {/* Home Link */}
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/"
                  className={`text-secondary hover:text-primary px-3 py-2 transition-colors duration-200 ${
                    isActive("/") &&
                    !isActive("/services") &&
                    !isActive("/about") &&
                    !isActive("/gallery") &&
                    !isActive("/contact")
                      ? "text-primary font-medium"
                      : ""
                  }`}
                >
                  Home
                </Link>
              </motion.div>
              {isActive("/") &&
                !isActive("/services") &&
                !isActive("/about") &&
                !isActive("/gallery") &&
                !isActive("/contact") && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                    layoutId="activeNavIndicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
            </div>

            {/* Services Link */}
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/services"
                  className={`text-secondary hover:text-primary px-3 py-2 transition-colors duration-200 ${
                    isActive("/services") ? "text-primary font-medium" : ""
                  }`}
                >
                  Services
                </Link>
              </motion.div>
              {isActive("/services") && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                  layoutId="activeNavIndicator"
                  transition={{ duration: 0.3 }}
                />
              )}
            </div>

            {/* About Link */}
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/about"
                  className={`text-secondary hover:text-primary px-3 py-2 transition-colors duration-200 ${
                    isActive("/about") ? "text-primary font-medium" : ""
                  }`}
                >
                  About
                </Link>
              </motion.div>
              {isActive("/about") && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                  layoutId="activeNavIndicator"
                  transition={{ duration: 0.3 }}
                />
              )}
            </div>

            {/* Gallery Link */}
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/gallery"
                  className={`text-secondary hover:text-primary px-3 py-2 transition-colors duration-200 ${
                    isActive("/gallery") ? "text-primary font-medium" : ""
                  }`}
                >
                  Gallery
                </Link>
              </motion.div>
              {isActive("/gallery") && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                  layoutId="activeNavIndicator"
                  transition={{ duration: 0.3 }}
                />
              )}
            </div>

            {/* Contact Link */}
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className={`text-secondary hover:text-primary px-3 py-2 transition-colors duration-200 ${
                    isActive("/contact") ? "text-primary font-medium" : ""
                  }`}
                >
                  Contact
                </Link>
              </motion.div>
              {isActive("/contact") && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                  layoutId="activeNavIndicator"
                  transition={{ duration: 0.3 }}
                />
              )}
            </div>

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4"
            >
              <Link
                href="/contact#order-form"
                className="px-4 py-2 bg-primary text-white rounded-md hover:bg-opacity-90 transition-all shadow-sm hover:shadow-md"
              >
                Order Now
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <motion.button
              type="button"
              className="text-primary p-2 rounded-md"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="md:hidden bg-white shadow-md"
        >
          <div className="max-h-[80vh] overflow-y-auto">
            {/* Home Link */}
            <motion.div
              whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
              className="relative"
            >
              <Link
                href="/"
                className={`block px-4 py-3 font-medium border-b border-gray-200 transition-colors duration-200 ${
                  isActive("/") &&
                  !isActive("/services") &&
                  !isActive("/about") &&
                  !isActive("/gallery") &&
                  !isActive("/contact")
                    ? "text-primary border-l-4 border-l-primary pl-3"
                    : "hover:text-primary"
                }`}
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </motion.div>

            {/* Services Link */}
            <motion.div
              whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
              className="relative"
            >
              <Link
                href="/services"
                className={`block px-4 py-3 font-medium border-b border-gray-200 transition-colors duration-200 ${
                  isActive("/services")
                    ? "text-primary border-l-4 border-l-primary pl-3"
                    : "hover:text-primary"
                }`}
                onClick={handleLinkClick}
              >
                Services
              </Link>
            </motion.div>

            {/* About Link */}
            <motion.div
              whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
              className="relative"
            >
              <Link
                href="/about"
                className={`block px-4 py-3 font-medium border-b border-gray-200 transition-colors duration-200 ${
                  isActive("/about")
                    ? "text-primary border-l-4 border-l-primary pl-3"
                    : "hover:text-primary"
                }`}
                onClick={handleLinkClick}
              >
                About
              </Link>
            </motion.div>

            {/* Gallery Link */}
            <motion.div
              whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
              className="relative"
            >
              <Link
                href="/gallery"
                className={`block px-4 py-3 font-medium border-b border-gray-200 transition-colors duration-200 ${
                  isActive("/gallery")
                    ? "text-primary border-l-4 border-l-primary pl-3"
                    : "hover:text-primary"
                }`}
                onClick={handleLinkClick}
              >
                Gallery
              </Link>
            </motion.div>

            {/* Contact Link */}
            <motion.div
              whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
              className="relative"
            >
              <Link
                href="/contact"
                className={`block px-4 py-3 font-medium border-b border-gray-200 transition-colors duration-200 ${
                  isActive("/contact")
                    ? "text-primary border-l-4 border-l-primary pl-3"
                    : "hover:text-primary"
                }`}
                onClick={handleLinkClick}
              >
                Contact
              </Link>
            </motion.div>

            {/* Order Now CTA */}
            <div className="px-4 py-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/contact#order-form"
                  className="block w-full text-center px-4 py-3 bg-primary text-white rounded-md hover:bg-opacity-90 transition-all shadow-sm font-medium"
                  onClick={handleLinkClick}
                >
                  Order Now
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
