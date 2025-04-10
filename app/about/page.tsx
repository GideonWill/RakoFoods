import Link from "next/link";
import Image from "next/image";

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
            Dedicated to delivering exceptional Local Bar Services for your
            special moments.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-96 relative overflow-hidden rounded-lg">
              <Image
                src="/images/team.jpg"
                alt="Rako Foods Team"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                At Rako Foods, established in 2018 at KNUST, we are passionate
                about crafting fresh, local fruit-based drinks and creamy yogurt
                that celebrate Ghana's vibrant flavors. Founded by a student
                with a vision for healthy beverages, we source from local
                farmers to create small-batch products that burst with natural
                sweetness and probiotic goodness, ensuring every sip supports
                both your health and our community.
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
            At Rako Foods, our mission is to create exceptional beverage
            experiences using traditional Ghanaian ingredients and recipes. We
            believe that our drinks have the power to refresh, nourish, and
            connect people to our rich cultural heritage. Through our dedication
            to quality, natural ingredients, and authentic flavors, we aim to
            bring the true taste of Ghana to every bottle we produce.
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
                  <span>N</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                Natural Ingredients
              </h3>
              <p className="text-gray-600 text-center">
                We use only fresh, natural ingredients sourced from local
                farmers to create authentic flavors without artificial
                additives.
              </p>
            </div>

            <div className="card">
              <div className="mb-4 text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary text-white text-2xl">
                  <span>H</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                Health Benefits
              </h3>
              <p className="text-gray-600 text-center">
                Our probiotic yoghurt and fruit drinks are packed with nutrients
                that support digestive health and boost your immune system.
              </p>
            </div>

            <div className="card">
              <div className="mb-4 text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary text-white text-2xl">
                  <span>T</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                Traditional Recipes
              </h3>
              <p className="text-gray-600 text-center">
                We follow authentic Ghanaian recipes that have been perfected
                over generations, bringing you the true taste of our culture.
              </p>
            </div>

            <div className="card">
              <div className="mb-4 text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary text-white text-2xl">
                  <span>F</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                Freshness Guaranteed
              </h3>
              <p className="text-gray-600 text-center">
                Our small-batch production ensures that every bottle you receive
                is fresh and retains maximum flavor and nutritional value.
              </p>
            </div>

            <div className="card">
              <div className="mb-4 text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary text-white text-2xl">
                  <span>V</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                Variety
              </h3>
              <p className="text-gray-600 text-center">
                From refreshing sobolo to creamy yoghurt, we offer a diverse
                range of beverages to suit different tastes and occasions.
              </p>
            </div>

            <div className="card">
              <div className="mb-4 text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary text-white text-2xl">
                  <span>S</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                Sustainability
              </h3>
              <p className="text-gray-600 text-center">
                By supporting local farmers and using eco-friendly packaging
                where possible, we strive to make a positive impact on our
                community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="bg-gray-100 section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-80 relative bg-gray-100">
                <Image
                  src="/images/Rhoda.jpg"
                  alt="Rhoda Awo Korkoi Ogunu"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center 20%" }}
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-1">
                  Rhoda Awo Korkoi Ogunu (RAKO)
                </h3>
                <p className="text-primary font-medium mb-2">Founder</p>
                <p className="text-gray-600 text-sm">
                  Passionate founder of RAKO Foods who started the journey in
                  2018 at KNUST with a vision to create authentic Ghanaian
                  beverages. Her innovative approach to traditional drinks has
                  created a beloved local brand.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-80 relative bg-gray-100">
                <Image
                  src="/images/baaba.jpg"
                  alt="Baaba"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center 20%" }}
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-1">Baaba</h3>
                <p className="text-primary font-medium mb-2">Assistant</p>
                <p className="text-gray-600 text-sm">
                  The backbone of daily operations at RAKO Foods, Baaba ensures
                  the perfect quality of our drinks and yoghurt products. Her
                  attention to detail and dedication helps maintain our high
                  standards.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-80 relative bg-gray-100">
                <Image
                  src="/images/Golden.jpg"
                  alt="Golden Boy"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-1">Golden Boy</h3>
                <p className="text-primary font-medium mb-2">Organiser</p>
                <p className="text-gray-600 text-sm">
                  The creative force behind RAKO Foods' events and customer
                  experiences. Golden Boy coordinates our product launches,
                  tastings, and special promotions, bringing energy and flair to
                  everything we do.
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
            Try Our Refreshing Drinks Today
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us to order our delicious yoghurt and fruit drinks for your
            personal enjoyment or your next event.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary font-medium py-3 px-8 rounded-md hover:bg-gray-100 transition-colors duration-300"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
