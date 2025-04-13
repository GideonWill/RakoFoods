"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect, TouchEvent } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement | null>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  // Handle swipe gesture for mobile menu
  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  
  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  
  const handleTouchEnd = () => {
    const swipeThreshold = 100;
    const swipeDistance = touchEndX.current - touchStartX.current;
    
    // Detect left swipe (close menu)
    if (swipeDistance < -swipeThreshold && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
    
    // Detect right swipe (open menu)
    if (swipeDistance > swipeThreshold && !isMobileMenuOpen) {
      setIsMobileMenuOpen(true);
    }
    
    // Reset values
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

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
    const handleEscKey = (event: KeyboardEvent) => {
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
    function handleClickOutsideMobile(event: MouseEvent) {
      if (
        isMobileMenuOpen &&
        navRef.current &&
        !navRef.current.contains(event.target as Node)
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
  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(path);
  };

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Mobile menu animation variants for smoother transitions
  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: -300,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-2"
          : "bg-white bg-opacity-80 backdrop-blur-sm shadow-sm py-3"
      }`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <motion.div
            className="flex items-center flex-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="/" className="flex-shrink-0 flex items-center">
              <div className="relative h-14 w-12 mr-2">
                <Image
                  src="/images/logo.jpg"
                  alt="RAKO Foods Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="hidden sm:inline-block ml-1 text-2xl font-bold text-primary">
                RAKO FOODS
              </span>
              <span className="sm:hidden ml-1 text-lg font-bold text-primary truncate max-w-[100px]">
                RAKO
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

            {/* Menu Link */}
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/menu"
                  className={`text-secondary hover:text-primary px-3 py-2 transition-colors duration-200 ${
                    isActive("/menu") ? "text-primary font-medium" : ""
                  }`}
                >
                  Menu
                </Link>
              </motion.div>
              {isActive("/menu") && (
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
          <div className="md:hidden flex items-center ml-auto">
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

      {/* Mobile Menu with enhanced animations */}
      <motion.div
        className="md:hidden bg-white shadow-md overflow-hidden absolute w-full"
        initial="closed"
        animate={isMobileMenuOpen ? "open" : "closed"}
        variants={mobileMenuVariants}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="max-h-[80vh] overflow-y-auto">
          {/* Mobile Menu Links */}
          <div className="py-1">
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
                  !isActive("/menu") &&
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

            {/* Menu Link */}
            <motion.div
              whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
              className="relative"
            >
              <Link
                href="/menu"
                className={`block px-4 py-3 font-medium border-b border-gray-200 transition-colors duration-200 ${
                  isActive("/menu")
                    ? "text-primary border-l-4 border-l-primary pl-3"
                    : "hover:text-primary"
                }`}
                onClick={handleLinkClick}
              >
                Menu
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
            
            {/* Swipe hint for mobile users */}
            <div className="px-4 py-2 text-center text-xs text-gray-400 italic bg-gray-100 border-t border-gray-200">
              <div className="flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span>Swipe left to close menu</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;