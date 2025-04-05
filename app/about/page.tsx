import Link from "next/link";

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            About Rako Foods
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Dedicated to delivering exceptional catering experiences for your
            special moments.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-96 bg-gray-200 relative overflow-hidden">
              {/* Replace with actual image */}
              <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                <span>Our Story Image</span>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Rako Foods was founded in 2010 with a simple mission: to create
                memorable dining experiences for life's most important moments.
                What began as a small family operation has grown into one of the
                region's most trusted catering services.
              </p>
              <p className="text-gray-600 mb-4">
                Our journey started when our founder, Chef Michael Rako,
                recognized a need for personalized catering services that went
                beyond standard menus and cookie-cutter presentations. Drawing
                on his culinary expertise and passion for exceptional service,
                he established Rako Foods to bring his vision to life.
              </p>
              <p className="text-gray-600">
                Today, we continue to uphold the values that have guided us from
                the beginning: quality ingredients, creative cuisine, impeccable
                service, and a commitment to making each event uniquely special.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-gray-100 section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold mb-8">Our Mission</h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            At Rako Foods, our mission is to create exceptional culinary
            experiences that celebrate life's meaningful moments. We believe
            that food has the power to bring people together, create lasting
            memories, and express culture and tradition. Through our dedication
            to quality, creativity, and personalized service, we aim to exceed
            expectations and make every occasion we cater truly unforgettable.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Why Choose Rako Foods</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <div className="mb-4 text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary text-white text-2xl">
                  <span>Q</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                Quality Ingredients
              </h3>
              <p className="text-gray-600 text-center">
                We source the freshest, highest-quality ingredients from local
                suppliers whenever possible to ensure exceptional taste.
              </p>
            </div>

            <div className="card">
              <div className="mb-4 text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary text-white text-2xl">
                  <span>E</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                Experienced Team
              </h3>
              <p className="text-gray-600 text-center">
                Our team of chefs, servers, and event coordinators brings years
                of expertise to every event we cater.
              </p>
            </div>

            <div className="card">
              <div className="mb-4 text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary text-white text-2xl">
                  <span>C</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                Customization
              </h3>
              <p className="text-gray-600 text-center">
                We work closely with you to create customized menus that reflect
                your preferences, dietary needs, and event theme.
              </p>
            </div>

            <div className="card">
              <div className="mb-4 text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary text-white text-2xl">
                  <span>A</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                Attention to Detail
              </h3>
              <p className="text-gray-600 text-center">
                From food presentation to service execution, we pay meticulous
                attention to every aspect of your catering experience.
              </p>
            </div>

            <div className="card">
              <div className="mb-4 text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary text-white text-2xl">
                  <span>R</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                Reliability
              </h3>
              <p className="text-gray-600 text-center">
                We understand the importance of your event and are committed to
                delivering on our promises, every time.
              </p>
            </div>

            <div className="card">
              <div className="mb-4 text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary text-white text-2xl">
                  <span>V</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Value</h3>
              <p className="text-gray-600 text-center">
                We provide exceptional quality and service at competitive
                prices, ensuring you receive outstanding value for your
                investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="bg-gray-100 section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 bg-gray-200 relative">
                {/* Replace with actual image */}
                <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                  <span>Chef Photo</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-1">Michael Rako</h3>
                <p className="text-primary font-medium mb-2">
                  Founder & Executive Chef
                </p>
                <p className="text-gray-600 text-sm">
                  With over 20 years of culinary experience, Chef Michael leads
                  our team with passion and creativity.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 bg-gray-200 relative">
                {/* Replace with actual image */}
                <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                  <span>Chef Photo</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-1">Sophia Chen</h3>
                <p className="text-primary font-medium mb-2">Head Chef</p>
                <p className="text-gray-600 text-sm">
                  Sophia brings international culinary expertise and innovative
                  techniques to our diverse menu offerings.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 bg-gray-200 relative">
                {/* Replace with actual image */}
                <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                  <span>Event Manager Photo</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-1">James Wilson</h3>
                <p className="text-primary font-medium mb-2">Event Manager</p>
                <p className="text-gray-600 text-sm">
                  James ensures flawless execution of every event, coordinating
                  our team to meet your specific needs.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 bg-gray-200 relative">
                {/* Replace with actual image */}
                <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                  <span>Customer Relations Photo</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-1">Emily Rodriguez</h3>
                <p className="text-primary font-medium mb-2">
                  Customer Relations
                </p>
                <p className="text-gray-600 text-sm">
                  Emily works closely with clients to understand their vision
                  and transform it into a memorable experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact our team today to discuss how we can make your next event
            truly special.
          </p>
          <Link
            href="/contact"
            className="bg-white text-primary py-3 px-8 rounded-sm font-medium hover:bg-opacity-90 transition-all"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
