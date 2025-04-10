import Link from "next/link";
import Image from "next/image";

export default function Services() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            From weekly homemade meals to local drinks and event catering, Rako
            Foods offers authentic cuisine for your convenience and
            celebrations.
          </p>
        </div>
      </section>

      {/* Weekly Meal Prep */}
      <section className="section-padding" id="meal-prep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Weekly Meal Prep</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Our weekly meal prep service delivers freshly made homemade stews
            and soups to your doorstep, saving you time while ensuring you enjoy
            delicious, nutritious meals throughout the week.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 relative">
                <Image
                  src="/images/okrostew.jpg"
                  alt="Traditional Stew"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Traditional Stews
                </h3>
                <p className="text-gray-600 mb-4">
                  Hearty traditional stews made with fresh ingredients and
                  authentic recipes. Portion sizes available for individuals and
                  families.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 relative">
                <Image
                  src="/images/soup.jpg"
                  alt="Homemade Soup"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Homemade Soups</h3>
                <p className="text-gray-600 mb-4">
                  Nutritious soups prepared with local ingredients. Perfect for
                  a light, healthy meal option.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 relative">
                <Image
                  src="/images/weekly package.jpg"
                  alt="Weekly Meal Package"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Weekly Package</h3>
                <p className="text-gray-600 mb-4">
                  Combination of stews and soups for an entire week.
                  Customizable based on your preferences.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-lightgreen p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">
              How to Order Weekly Meals
            </h3>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Select your preferred stews and soups from our menu</li>
              <li>Choose your portion size and quantity</li>
              <li>Fill out the order form with your delivery details</li>
              <li>Receive confirmation of your order via email or phone</li>
              <li>Enjoy fresh, homemade food delivered to your doorstep</li>
            </ol>
            <div className="mt-6">
              <Link href="/contact#order-form" className="btn-primary">
                Place Your Order
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Local Drinks Bar */}
      <section className="section-padding bg-lightgreen" id="drinks">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Local Drinks Bar</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Our selection of indigenous and locally made drinks brings authentic
            flavors to your home or event. From refreshing Sobolo to nourishing
            Yoghurt, we offer the best of local beverages.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 relative">
                <Image
                  src="/images/sobolo.jpg"
                  alt="Sobolo Drink"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Sobolo</h3>
                <p className="text-gray-600 mb-4">
                  Traditional hibiscus drink known for its refreshing taste and
                  health benefits. Available in various sizes.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 relative">
                <Image
                  src="/images/yoghurt.jpg"
                  alt="Homemade Yoghurt"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Homemade Yoghurt</h3>
                <p className="text-gray-600 mb-4">
                  Creamy, freshly made yoghurt with natural ingredients. Plain
                  and flavored options available.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 relative">
                <Image
                  src="/images/lamugin.jpg"
                  alt="Lamugin Drink"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Lamugin</h3>
                <p className="text-gray-600 mb-4">
                  Traditional lemon-based drink with a refreshing citrus flavor.
                  Perfect for hot days.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 relative">
                <Image
                  src="/images/pineapple.jpg"
                  alt="Pineapple Juice"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Pineapple Juice</h3>
                <p className="text-gray-600 mb-4">
                  Freshly squeezed pineapple juice without preservatives or
                  added sugar. Sweet and refreshing.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 relative">
                <Image
                  src="/images/tamarind.jpg"
                  alt="Tamarind Juice"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Tamarind Juice</h3>
                <p className="text-gray-600 mb-4">
                  Traditional tamarind juice with a perfect balance of sweet and
                  sour flavors. Rich in vitamins.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 relative">
                <Image
                  src="/images/asaana.jpg"
                  alt="Asaana Drink"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Asaana</h3>
                <p className="text-gray-600 mb-4">
                  Traditional fermented millet drink, rich in probiotics and
                  natural nutrients. A healthy option.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">
              Drink Packages for Events
            </h3>
            <p className="text-gray-600 mb-6">
              Our local drinks bar service is perfect for events of all sizes.
              We provide customized drink packages with serving options tailored
              to your needs. Popular for weddings, parties, and corporate
              events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact#drinks-order" className="btn-primary">
                Order Drinks
              </Link>
              <Link
                href="/contact"
                className="text-primary font-medium hover:underline flex items-center"
              >
                Request Custom Package
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Link Section */}
      <section className="section-padding bg-gray-50" id="menu-link">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title mb-6">Explore Our Menu</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            Browse our complete selection of fresh yoghurt, local drinks, and
            homemade foods. Our menu features authentic Ghanaian flavors,
            carefully prepared with quality ingredients.
          </p>

          <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
            <div className="flex justify-center mb-6">
              <Image
                src="/images/sobolo.jpg"
                alt="Rako Foods Menu"
                width={300}
                height={200}
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-4">View Our Full Menu</h3>
            <p className="text-gray-600 mb-6">
              See detailed pricing, product descriptions, and available sizes
              for all our offerings.
            </p>
            <Link
              href="/menu"
              className="btn-primary inline-block px-8 py-3 text-lg"
            >
              Go to Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Local Bar Services */}
      <section className="section-padding" id="events">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Local Bar Services</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Make your event memorable with our professional catering services.
            We cater to a wide range of events including weddings, funerals,
            birthdays, seminars, and more.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="h-96 bg-gray-200 relative overflow-hidden rounded-lg">
              <Image
                src="/images/wed.jpg"
                alt="Wedding Catering"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Wedding Celebrations
              </h3>
              <p className="text-gray-600 mb-4">
                Your special day deserves exceptional catering. Our wedding
                packages include customized menu planning, professional service,
                and beautiful presentation to match your wedding theme.
              </p>
              <ul className="list-disc pl-5 mb-6 text-gray-600">
                <li>Customized menu options</li>
                <li>Traditional and contemporary dishes</li>
                <li>Local drinks bar service</li>
                <li>Professional servers</li>
                <li>Complete setup and cleanup</li>
              </ul>
              <Link href="/contact#wedding" className="btn-primary">
                Request Wedding Quote
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-semibold mb-4">Funeral Services</h3>
              <p className="text-gray-600 mb-4">
                During times of loss, we provide respectful catering services
                for funeral gatherings. Our team handles all aspects with care
                and sensitivity, allowing you to focus on honoring your loved
                one.
              </p>
              <ul className="list-disc pl-5 mb-6 text-gray-600">
                <li>Traditional funeral food options</li>
                <li>Discreet and professional service</li>
                <li>Setup and cleanup included</li>
                <li>Local drinks provided</li>
                <li>Various service styles available</li>
              </ul>
              <Link href="/contact#funeral" className="btn-primary">
                Contact for Funeral Catering
              </Link>
            </div>
            <div className="h-96 bg-gray-200 relative overflow-hidden rounded-lg order-1 lg:order-2">
              <Image
                src="/images/funeral.jpg"
                alt="Funeral Service Catering"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="h-96 bg-gray-200 relative overflow-hidden rounded-lg">
              <Image
                src="/images/wedding1.jpg"
                alt="Birthday Party Catering"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Birthday Celebrations
              </h3>
              <p className="text-gray-600 mb-4">
                Make your birthday celebration special with our catering
                services. From intimate gatherings to large parties, we provide
                food and drinks that will delight your guests.
              </p>
              <ul className="list-disc pl-5 mb-6 text-gray-600">
                <li>Customized birthday menus</li>
                <li>Special birthday cakes</li>
                <li>Local drinks selection</li>
                <li>Themed food presentation</li>
                <li>Options for all ages</li>
              </ul>
              <Link href="/contact#birthday" className="btn-primary">
                Plan Your Birthday Catering
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-semibold mb-4">
                Seminars & Corporate Events
              </h3>
              <p className="text-gray-600 mb-4">
                Professional catering for your business events, seminars, and
                meetings. We provide punctual service, quality food, and
                refreshing drinks to keep your attendees satisfied and focused.
              </p>
              <ul className="list-disc pl-5 mb-6 text-gray-600">
                <li>Breakfast, lunch, and snack options</li>
                <li>Coffee, tea, and local drinks</li>
                <li>Buffet or boxed meal service</li>
                <li>Professional setup and presentation</li>
                <li>Corporate billing available</li>
              </ul>
              <Link href="/contact#corporate" className="btn-primary">
                Request Corporate Catering
              </Link>
            </div>
            <div className="h-96 bg-gray-200 relative overflow-hidden rounded-lg order-1 lg:order-2">
              <Image
                src="/images/sem.jpg"
                alt="Seminar Catering"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Discounts Section */}
      <section className="section-padding bg-lightgreen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-8 shadow-lg border-t-4 border-accent">
            <h2 className="text-3xl font-semibold mb-6 text-center">
              Special Discounts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-lightgreen p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Holiday Specials</h3>
                <p className="text-gray-600 mb-4">
                  Enjoy 3% off all our services during major holidays. Perfect
                  for family gatherings and celebrations.
                </p>
                <div className="font-medium">
                  Applies to: Christmas, New Year, Easter, Eid, and Independence
                  Day
                </div>
              </div>

              <div className="bg-lightgreen p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Bulk Orders</h3>
                <p className="text-gray-600 mb-4">
                  Get special pricing on bulk orders for weekly meal preps and
                  large events.
                </p>
                <div className="font-medium">
                  Contact us for custom quotes on large orders
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Ready to Place an Order?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your needs and let us create a
            customized solution for your meal prep or event.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact#order-form"
              className="bg-white text-primary py-3 px-8 rounded-sm font-medium hover:bg-opacity-90 transition-all"
            >
              Place an Order
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white py-3 px-8 rounded-sm font-medium hover:bg-white hover:bg-opacity-10 transition-all"
            >
              Ask a Question
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
