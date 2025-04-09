import Link from "next/link";
import Image from "next/image";

export default function Menu() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Menu</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover our range of fresh, local Ghanaian drinks, creamy yoghurt,
            and delicious homemade foods.
          </p>
        </div>
      </section>

      {/* Menu Navigation */}
      <section className="bg-gray-100 py-8">
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
          <div className="flex items-center mb-12">
            <div className="h-[1px] flex-grow bg-primary opacity-30"></div>
            <h2 className="section-title px-4 mb-0">Our Yoghurt</h2>
            <div className="h-[1px] flex-grow bg-primary opacity-30"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300">
              <div className="h-64 relative">
                <Image
                  src="/images/yoghurt.jpg"
                  alt="Yoghurt 350ml"
                  fill
                  style={{ objectFit: "cover" }}
                  className="brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="text-xl font-bold">Yoghurt - 350ml</p>
                  <p className="text-3xl font-bold mt-1">GHS 15</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600">
                  Our creamy yoghurt in a convenient 350ml size, perfect for
                  on-the-go refreshment.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300">
              <div className="h-64 relative">
                <Image
                  src="/images/holdyoghurt.jpg"
                  alt="Yoghurt 2L"
                  fill
                  style={{ objectFit: "cover" }}
                  className="brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="text-xl font-bold">Yoghurt - 2L</p>
                  <p className="text-3xl font-bold mt-1">GHS 80</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600">
                  Family-sized 2L yoghurt, perfect for sharing or keeping in
                  your fridge for daily enjoyment.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300">
              <div className="h-64 relative">
                <Image
                  src="/images/yoghurt.jpg"
                  alt="Yoghurt 4.5L"
                  fill
                  style={{ objectFit: "cover" }}
                  className="brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="text-xl font-bold">Yoghurt - 4.5L</p>
                  <p className="text-3xl font-bold mt-1">GHS 150</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600">
                  Our largest yoghurt size, ideal for events, gatherings, or
                  families who love our creamy yoghurt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Drinks Section */}
      <section id="drinks" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-12">
            <div className="h-[1px] flex-grow bg-primary opacity-30"></div>
            <h2 className="section-title px-4 mb-0">Local Drinks</h2>
            <div className="h-[1px] flex-grow bg-primary opacity-30"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300">
              <div className="h-64 relative">
                <Image
                  src="/images/sob2.jpg"
                  alt="Sobolo 350ml"
                  fill
                  style={{ objectFit: "cover" }}
                  className="brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="text-xl font-bold">Sobolo - 350ml</p>
                  <p className="text-3xl font-bold mt-1">GHS 10</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600">
                  Refreshing hibiscus drink packed with antioxidants and natural
                  goodness.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300">
              <div className="h-64 relative">
                <Image
                  src="/images/sobolo.jpg"
                  alt="Sobolo 1L"
                  fill
                  style={{ objectFit: "cover" }}
                  className="brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="text-xl font-bold">Sobolo - 1L</p>
                  <p className="text-3xl font-bold mt-1">GHS 25</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600">
                  Our 1L bottle of traditional sobolo drink, perfect for family
                  enjoyment.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300">
              <div className="h-64 relative">
                <Image
                  src="/images/sob3.jpg"
                  alt="Sobolo Gallon"
                  fill
                  style={{ objectFit: "cover" }}
                  className="brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="text-xl font-bold">Sobolo - Gallon</p>
                  <p className="text-3xl font-bold mt-1">GHS 150</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600">
                  Large gallon size, ideal for events and gatherings.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300">
              <div className="h-64 relative">
                <Image
                  src="/images/lamugin.jpg"
                  alt="Lamugin 350ml"
                  fill
                  style={{ objectFit: "cover" }}
                  className="brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="text-xl font-bold">Lamugin - 350ml</p>
                  <p className="text-3xl font-bold mt-1">GHS 12</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600">
                  Traditional lemon-based drink with a refreshing citrus flavor.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300">
              <div className="h-64 relative">
                <Image
                  src="/images/pineapple.jpg"
                  alt="Pineapple Mint 350ml"
                  fill
                  style={{ objectFit: "cover" }}
                  className="brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="text-xl font-bold">Pineapple Mint - 350ml</p>
                  <p className="text-3xl font-bold mt-1">GHS 15</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600">
                  Sweet pineapple juice with refreshing mint, a perfect tropical
                  combination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Homemade Foods Section */}
      <section id="foods" className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-12">
            <div className="h-[1px] flex-grow bg-primary opacity-30"></div>
            <h2 className="section-title px-4 mb-0">Homemade Foods</h2>
            <div className="h-[1px] flex-grow bg-primary opacity-30"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300">
              <div className="h-64 relative">
                <Image
                  src="/images/soup.jpg"
                  alt="Traditional Soups"
                  fill
                  style={{ objectFit: "cover" }}
                  className="brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="text-xl font-bold">Traditional Soups</p>
                  <p className="text-lg font-medium mt-1">
                    Contact for Pricing
                  </p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600">
                  Authentic Ghanaian soups made with fresh, local ingredients.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300">
              <div className="h-64 relative">
                <Image
                  src="/images/okrostew.jpg"
                  alt="Traditional Stews"
                  fill
                  style={{ objectFit: "cover" }}
                  className="brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="text-xl font-bold">Traditional Stews</p>
                  <p className="text-lg font-medium mt-1">
                    Contact for Pricing
                  </p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600">
                  Hearty stews prepared with traditional recipes and quality
                  ingredients.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300">
              <div className="h-64 relative">
                <Image
                  src="/images/yamchips.jpg"
                  alt="Salads and Yam Chips"
                  fill
                  style={{ objectFit: "cover" }}
                  className="brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="text-xl font-bold">Salads & Yam Chips</p>
                  <p className="text-lg font-medium mt-1">
                    Contact for Pricing
                  </p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600">
                  Fresh salads and crispy yam chips, perfect as sides or light
                  meals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-12">
            <div className="h-[1px] flex-grow bg-primary opacity-30"></div>
            <h2 className="section-title px-4 mb-0">Special Packages</h2>
            <div className="h-[1px] flex-grow bg-primary opacity-30"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-primary text-white py-6 px-6 text-center">
                <h3 className="text-2xl font-bold">Event Package</h3>
                <p className="text-lg mt-2">
                  Perfect for celebrations & gatherings
                </p>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-primary mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Custom drink selection</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-primary mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Mix and match options</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-primary mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Bulk discounts available</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-primary mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Delivery to your venue</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="block text-center bg-primary text-white py-3 px-6 rounded-md hover:bg-primary-dark transition-colors duration-300"
                  >
                    Request Quote
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-primary text-white py-6 px-6 text-center">
                <h3 className="text-2xl font-bold">Wholesale Package</h3>
                <p className="text-lg mt-2">For retailers & bulk buyers</p>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-primary mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Special wholesale pricing</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-primary mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Regular delivery schedules</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-primary mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Customized product mix</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-primary mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Dedicated account manager</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <p className="text-center text-gray-600">
                    Contact us for wholesale pricing and partnership
                    opportunities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
