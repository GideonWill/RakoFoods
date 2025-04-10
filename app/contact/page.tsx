"use client";

import { FaPhone, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get in touch with us for our refreshing local drinks, yoghurt, and
            beverages. Your taste of authentic Ghanaian flavors awaits!
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="text-center p-6 rounded-lg shadow-lg bg-white">
              <div className="inline-block p-4 rounded-full bg-primary text-white mb-4">
                <FaPhone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">
                <a href="tel:+233506195302" className="hover:text-primary">
                  +233 506195302
                </a>
              </p>
            </div>

            {/* WhatsApp */}
            <div className="text-center p-6 rounded-lg shadow-lg bg-white">
              <div className="inline-block p-4 rounded-full bg-primary text-white mb-4">
                <FaWhatsapp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
              <p className="text-gray-600">
                <a
                  href="https://wa.me/233549978969"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  +233 549978969
                </a>
              </p>
            </div>

            {/* Location */}
            <div className="text-center p-6 rounded-lg shadow-lg bg-white">
              <div className="inline-block p-4 rounded-full bg-primary text-white mb-4">
                <FaMapMarkerAlt className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p className="text-gray-600">
                Abalong Ventures, Ablekuma Agape Top, Accra Ghana
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
