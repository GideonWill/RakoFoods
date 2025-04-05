"use client";

import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">RAKO FOODS</h3>
            <p className="text-gray-300">
              Premium catering services for your special events.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-5">Contact Information</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-3 text-accent" size={18} />
                <span>123 Main Street, Accra, Ghana</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-accent" size={18} />
                <span>Phone: +233 123 456 7890</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-accent" size={18} />
                <span>Email: info@rakofoods.com</span>
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
