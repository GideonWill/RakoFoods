import Link from "next/link";
import Image from "next/image";
import AutoplayVideo from "./components/AutoplayVideo";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="hero-section flex items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/team.jpg')",
          marginTop: "64px",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Authentic Homemade Food & Drinks
          </h1>
          <p className="text-xl sm:text-2xl text-white mb-8">
            Weekly meal prep and local drink services for your convenience and
            events
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/services" className="btn-primary">
              Order Now
            </Link>
            <Link
              href="/contact"
              className="bg-white text-primary py-2 px-8 rounded-sm font-medium hover:bg-opacity-90 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="section-padding bg-lightgreen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Our Featured Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md transform transition-transform hover:scale-105">
              <div className="h-64 relative">
                <Image
                  src="/images/okrostew.jpg"
                  alt="Weekly Meal Prep - Okro Stew"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Weekly Meal Prep</h3>
                <p className="text-gray-600 mb-4">
                  Delicious homemade stews and soups prepared weekly. Save time
                  and enjoy nutritious meals.
                </p>
                <Link
                  href="/services#meal-prep"
                  className="text-primary font-medium hover:underline"
                >
                  View Options
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md transform transition-transform hover:scale-105">
              <div className="h-64 relative">
                <Image
                  src="/images/sobolo.jpg"
                  alt="Local Drinks - Sobolo"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Local Drinks Bar</h3>
                <p className="text-gray-600 mb-4">
                  Indigenous and locally made drinks including Sobolo, Yoghurt,
                  Lamugin, and more.
                </p>
                <Link
                  href="/services#drinks"
                  className="text-primary font-medium hover:underline"
                >
                  Explore Drinks
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md transform transition-transform hover:scale-105">
              <div className="h-64 relative">
                <Image
                  src="/images/event.jpg"
                  alt="Event Catering"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Local Bar Services
                </h3>
                <p className="text-gray-600 mb-4">
                  Full-service catering for weddings, birthdays, funerals,
                  seminars, and more.
                </p>
                <Link
                  href="/services#events"
                  className="text-primary font-medium hover:underline"
                >
                  See Event Packages
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose Your Meals</h3>
              <p className="text-gray-600">
                Browse our selection of homemade dishes and local drinks. Select
                what you need for the week or for your event.
              </p>
            </div>

            <div className="p-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Place Your Order</h3>
              <p className="text-gray-600">
                Fill out our simple order form with your selections and delivery
                details. We'll contact you to confirm.
              </p>
            </div>

            <div className="p-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Enjoy Your Food</h3>
              <p className="text-gray-600">
                Receive fresh, homemade meals and drinks delivered to your
                doorstep or at your event venue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Gallery Preview */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-3xl mb-8">
            See Our Services in Action
          </h2>
          <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg mb-12">
            <div className="relative h-[500px] w-full">
              <AutoplayVideo
                src="/images/thumbnail3.mp4"
                className="w-full h-full object-cover rounded-lg shadow-lg"
                poster="/images/video-thumbnail.jpg"
                controls={true}
                muted={true}
                loop={true}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="h-48 bg-gray-200 rounded-lg overflow-hidden shadow-md">
              <AutoplayVideo
                src="/images/thumbnail1.mp4"
                className="w-full h-full object-cover"
                muted={true}
                loop={true}
                controls={false}
              />
            </div>
            <div className="h-48 bg-gray-200 rounded-lg overflow-hidden shadow-md">
              <AutoplayVideo
                src="/images/thumbnail2.mp4"
                className="w-full h-full object-cover"
                muted={true}
                loop={true}
                controls={false}
              />
            </div>
            <div className="h-48 bg-gray-200 rounded-lg overflow-hidden shadow-md">
              <AutoplayVideo
                src="/images/thekitchen.mp4"
                className="w-full h-full object-cover"
                muted={true}
                loop={true}
                controls={false}
              />
            </div>
            <div className="h-48 bg-gray-200 rounded-lg overflow-hidden shadow-md">
              <AutoplayVideo
                src="/images/thumbnail4.mp4"
                className="w-full h-full object-cover"
                muted={true}
                loop={true}
                controls={false}
              />
            </div>
          </div>
          <div className="text-center mt-10">
            <Link href="/gallery" className="btn-primary text-lg px-10 py-3">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-300 mr-4 overflow-hidden relative">
                  <Image
                    src="/images/client2.jpg"
                    alt="Ama Mensah"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div>
                  <h3 className="font-semibold">Ama Mensah</h3>
                  <p className="text-gray-500">Weekly Meal Prep Customer</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The weekly stews have saved me so much time! Everything is
                delicious and perfectly spiced. My family loves every meal."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-300 mr-4 overflow-hidden relative">
                  <Image
                    src="/images/client1.jpg"
                    alt="Kwame Osei"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div>
                  <h3 className="font-semibold">Kwame Osei</h3>
                  <p className="text-gray-500">Wedding Client</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Rako Foods provided an amazing spread for our wedding. The
                Sobolo and other local drinks were a huge hit with guests!"
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-300 mr-4 overflow-hidden relative">
                  <Image
                    src="/images/client3.jpg"
                    alt="Akosua Darko"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div>
                  <h3 className="font-semibold">Akosua Darko</h3>
                  <p className="text-gray-500">Corporate Seminar</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Our company seminar was a success thanks to the professional
                catering service. The food was excellent and the presentation
                beautiful."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to Order?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Whether you need weekly meals, local drinks, or catering for your
            next event, we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/services"
              className="bg-white text-primary py-3 px-8 rounded-sm font-medium hover:bg-opacity-90 transition-all"
            >
              Place an Order
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white py-3 px-8 rounded-sm font-medium hover:bg-white hover:bg-opacity-10 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
