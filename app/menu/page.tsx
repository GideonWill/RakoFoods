'use client';
import Link from "next/link";
import Image from "next/image";
import { useInView } from 'react-intersection-observer';
import MenuItem from "../components/MenuItem";
import SectionHeader from "../components/SectionHeader";

export default function Menu() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate-fadeIn">
            Our Menu
          </h1>
          <p className="text-xl max-w-3xl mx-auto animate-slideUp">
            Discover our range of fresh, local Ghanaian drinks, creamy yoghurt,
            and delicious homemade foods.
          </p>
        </div>
      </section>

      {/* Menu Navigation */}
      <section className="bg-gray-100 py-8 sticky top-16 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#yoghurt"
              className="px-6 py-2 bg-white rounded-full shadow-md text-primary font-medium hover:bg-primary hover:text-white transition-colors duration-300"
            >
              Yoghurt
            </a>
            <a
              href="#drinks"
              className="px-6 py-2 bg-white rounded-full shadow-md text-primary font-medium hover:bg-primary hover:text-white transition-colors duration-300"
            >
              Local Drinks
            </a>
            <a
              href="#foods"
              className="px-6 py-2 bg-white rounded-full shadow-md text-primary font-medium hover:bg-primary hover:text-white transition-colors duration-300"
            >
              Homemade Foods
            </a>
            <a
              href="#packages"
              className="px-6 py-2 bg-white rounded-full shadow-md text-primary font-medium hover:bg-primary hover:text-white transition-colors duration-300"
            >
              Packages
            </a>
          </div>
        </div>
      </section>

      {/* Yoghurt Section */}
      <section id="yoghurt" className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Yoghurt"
            subtitle="Fresh, creamy, and naturally delicious yoghurt made with care."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <MenuItem
              image="/images/yoghurt.jpg"
              title="Yoghurt - 350ml"
              price={15}
              description="Our creamy yoghurt in a convenient 350ml size, perfect for on-the-go refreshment."
              delay={0}
            />
            <MenuItem
              image="/images/holdyoghurt.jpg"
              title="Yoghurt - 2L"
              price={80}
              description="Family-sized 2L yoghurt, perfect for sharing or keeping in your fridge for daily enjoyment."
              delay={150}
            />
            <MenuItem
              image="/images/yoghurt.jpg"
              title="Yoghurt - 4.5L"
              price={150}
              description="Our largest yoghurt size, ideal for events, gatherings, or families who love our creamy yoghurt."
              delay={300}
            />
          </div>
        </div>
      </section>

      {/* Local Drinks Section */}
      <section id="drinks" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Local Drinks"
            subtitle="Traditional and refreshing beverages made with authentic recipes."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <MenuItem
              image="/images/sob2.jpg"
              title="Sobolo - 350ml"
              price={10}
              description="Refreshing hibiscus drink packed with antioxidants and natural goodness."
              delay={0}
            />
            <MenuItem
              image="/images/sobolo.jpg"
              title="Sobolo - 1L"
              price={25}
              description="Our 1L bottle of traditional sobolo drink, perfect for family enjoyment."
              delay={150}
            />
            <MenuItem
              image="/images/sob3.jpg"
              title="Sobolo - Gallon"
              price={150}
              description="Large gallon size, ideal for events and gatherings."
              delay={300}
            />
            <MenuItem
              image="/images/lamugin.jpg"
              title="Lamugin - 350ml"
              price={12}
              description="Traditional lemon-based drink with a refreshing citrus flavor."
              delay={450}
            />
            <MenuItem
              image="/images/pineapple.jpg"
              title="Pineapple Mint - 350ml"
              price={15}
              description="Sweet pineapple juice with refreshing mint, a perfect tropical combination."
              delay={600}
            />
          </div>
        </div>
      </section>

      {/* Homemade Foods Section */}
      <section id="foods" className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Homemade Foods"
            subtitle="Authentic Ghanaian dishes prepared with love and tradition."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <MenuItem
              image="/images/soup.jpg"
              title="Traditional Soups"
              price="Contact for Pricing"
              description="Authentic Ghanaian soups made with fresh, local ingredients."
              delay={0}
            />
            <MenuItem
              image="/images/okrostew.jpg"
              title="Traditional Stews"
              price="Contact for Pricing"
              description="Hearty stews prepared with traditional recipes and quality ingredients."
              delay={150}
            />
            <MenuItem
              image="/images/yamchips.jpg"
              title="Salads & Yam Chips"
              price="Contact for Pricing"
              description="Fresh salads and crispy yam chips, perfect as sides or light meals."
              delay={300}
            />
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Special Packages"
            subtitle="Custom packages for events and wholesale buyers."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
              <div className="bg-primary text-white py-6 px-6 text-center">
                <h3 className="text-2xl font-bold">Event Package</h3>
                <p className="text-lg mt-2">Perfect for celebrations & gatherings</p>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Custom drink selection</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Mix and match options</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Bulk discounts available</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Delivery to your venue</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link href="/contact" className="block text-center bg-primary text-white py-3 px-6 rounded-md hover:bg-primary-dark transition-colors duration-300">
                    Request Quote
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
              <div className="bg-primary text-white py-6 px-6 text-center">
                <h3 className="text-2xl font-bold">Wholesale Package</h3>
                <p className="text-lg mt-2">For retailers & bulk buyers</p>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Competitive wholesale pricing</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Regular delivery schedule</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Minimum order quantities</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Dedicated account manager</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link href="/contact" className="block text-center bg-primary text-white py-3 px-6 rounded-md hover:bg-primary-dark transition-colors duration-300">
                    Contact Sales
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Order Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Link
          href="/contact#order-form"
          className="bg-accent text-white px-6 py-3 rounded-full shadow-lg hover:bg-accent-dark transition-colors duration-300 flex items-center space-x-2 group"
        >
          <span>Order Now</span>
          <svg
            className="w-5 h-5 transform transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>

      {/* Call to Action */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to Order?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to place your order or inquire about custom
            packages for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-primary font-medium py-3 px-8 rounded-md hover:bg-gray-100 transition-colors duration-300"
            >
              Contact Us
            </Link>
            <a
              href="https://wa.me/233549978969"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#25D366] text-white font-medium py-3 px-8 rounded-md hover:bg-opacity-90 transition-colors duration-300 flex items-center justify-center"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
