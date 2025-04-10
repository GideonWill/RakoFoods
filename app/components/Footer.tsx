"use client";

import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">RAKO FOODS</h3>
            <p className="text-gray-300">
              Local Bar Services for your special events.
            </p>
            <div className="flex flex-wrap space-x-4 mt-6">
              <a
                href="https://www.facebook.com/RhodalynOgunu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200 mb-2"
                aria-label="Facebook - Rhodalyn Ogunu"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/rako.foods_gh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200 mb-2"
                aria-label="Instagram - rako.foods_gh"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/rhoda-ogunu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200 mb-2"
                aria-label="LinkedIn - Rhoda Ogunu"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://www.tiktok.com/@rakofood"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200 mb-2"
                aria-label="TikTok - Rako Food"
              >
                <FaTiktok size={24} />
              </a>
              <a
                href="https://wa.me/233549978969"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200 mb-2"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-5">Contact Information</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-3 text-accent" size={18} />
                <span>Accra, Ghana</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-accent" size={18} />
                <span>Call: +233 506195302</span>
              </li>
              <li className="flex items-center">
                <FaWhatsapp className="mr-3 text-accent" size={18} />
                <span>WhatsApp: +233 549978969</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-accent" size={18} />
                <span>Email: rakofoods@gmail.com</span>
              </li>
              <li className="mt-6">
                <Link
                  href="/contact"
                  className="inline-block bg-white text-primary py-2 px-4 rounded-md hover:bg-opacity-90 transition-all font-medium"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} Rako Foods. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
