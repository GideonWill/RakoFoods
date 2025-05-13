'use client';
import Link from "next/link";
import Image from "next/image";
import { useInView } from 'react-intersection-observer';
import { FaLeaf, FaHeart, FaHistory, FaCheck, FaRecycle, FaStar } from 'react-icons/fa';
import SectionHeader from "../components/SectionHeader";
import FeatureCard from "../components/FeatureCard";
import TeamMemberCard from "../components/TeamMemberCard";

export default function About() {
  const { ref: storyRef, inView: storyInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate-fadeIn">
            About Rako Foods
          </h1>
          <p className="text-xl max-w-3xl mx-auto animate-slideUp">
            Dedicated to delivering exceptional Local Bar Services for your
            special moments.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={storyRef}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transform transition-all duration-700 ${
              storyInView ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            }`}
          >
            <div className="h-96 relative overflow-hidden rounded-lg shadow-xl">
              <Image
                src="/images/team.jpg"
                alt="Rako Foods Team"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg transform transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            <div>
              <SectionHeader
                title="Our Story"
                subtitle="From humble beginnings to a vision of healthy living"
              />
              <p className="text-gray-600 mb-6 leading-relaxed">
                Rako Foods was founded by a health-conscious young individual
                who believed in promoting the healthy consumption of herbs,
                fruits, grains, and dairy-based products, while reducing the
                intake of overly processed imported beverages.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                What started as a small venture during her first degree—selling
                a single drink, sobolo, at her hostel—has grown significantly.
                Today, we offer a variety of products, including fruit juices,
                yogurt, and other local drinks.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Additionally, we prepare bulk homemade meals for busy
                individuals who want to enjoy traditional dishes without the
                hassle of cooking. We firmly believe that food plays a vital
                role in human well-being and should be prepared and consumed
                healthily. That's why we are committed to advocating for
                wholesome foods and drinks!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-gray-100 section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <SectionHeader
            title="Our Mission"
            subtitle="Creating exceptional beverage experiences with traditional Ghanaian ingredients"
          />
          <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-[1.02] transition-transform duration-300 max-w-3xl mx-auto">
            <p className="text-gray-600 text-lg leading-relaxed">
              At Rako Foods, our mission is to create exceptional beverage
              experiences using traditional Ghanaian ingredients and recipes. We
              believe that our drinks have the power to refresh, nourish, and
              connect people to our rich cultural heritage. Through our dedication
              to quality, natural ingredients, and authentic flavors, we aim to
              bring the true taste of Ghana to every bottle we produce.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Why Choose Rako Foods"
            subtitle="Experience the difference of authentic, healthy, and delicious beverages"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<FaLeaf className="w-8 h-8" />}
              title="Natural Ingredients"
              description="We use only fresh, natural ingredients sourced from local farmers to create authentic flavors without artificial additives."
              delay={0}
            />
            <FeatureCard
              icon={<FaHeart className="w-8 h-8" />}
              title="Health Benefits"
              description="Our probiotic yoghurt and fruit drinks are packed with nutrients that support digestive health and boost your immune system."
              delay={150}
            />
            <FeatureCard
              icon={<FaHistory className="w-8 h-8" />}
              title="Traditional Recipes"
              description="We follow authentic Ghanaian recipes that have been perfected over generations, bringing you the true taste of our culture."
              delay={300}
            />
            <FeatureCard
              icon={<FaCheck className="w-8 h-8" />}
              title="Freshness Guaranteed"
              description="Our small-batch production ensures that every bottle you receive is fresh and retains maximum flavor and nutritional value."
              delay={450}
            />
            <FeatureCard
              icon={<FaStar className="w-8 h-8" />}
              title="Variety"
              description="From refreshing sobolo to creamy yoghurt, we offer a diverse range of beverages to suit different tastes and occasions."
              delay={600}
            />
            <FeatureCard
              icon={<FaRecycle className="w-8 h-8" />}
              title="Sustainability"
              description="By supporting local farmers and using eco-friendly packaging where possible, we strive to make a positive impact on our community."
              delay={750}
            />
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="bg-gray-100 section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionHeader
            title="Meet Our Team"
            subtitle="The passionate people behind Rako Foods"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TeamMemberCard
              image="/images/Rhoda.jpg"
              name="Rhoda Awo Korkoi Ogunu (RAKO)"
              role="Founder"
              bio="A visionary leader and a health-conscious entrepreneur, specialized in producing nutritious drinks made from herbs, fruits, grains, and dairy. Committed to sustainability and natural ingredients, the brand aims to promote healthier lifestyles through innovative beverage solutions."
              delay={0}
            />
            <TeamMemberCard
              image="/images/Baaba.jpg"
              name="Baaba"
              role="Operations Manager"
              bio="A dedicated operations expert who ensures smooth day-to-day functioning of Rako Foods. With her meticulous attention to detail and strong organizational skills, she maintains the highest standards of quality and efficiency in our production processes."
              delay={150}
            />
            <TeamMemberCard
              image="/images/Golden.jpg"
              name="Golden"
              role="Production Lead"
              bio="An experienced production specialist who oversees the creation of our delicious beverages. His expertise in traditional drink preparation and commitment to quality ensures that every batch meets our high standards while maintaining authentic flavors."
              delay={300}
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold mb-6">Join Our Journey</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Experience the authentic taste of Ghana with our traditional beverages
            and be part of our mission to promote healthy living.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/menu"
              className="inline-block bg-white text-primary font-medium py-3 px-8 rounded-md hover:bg-gray-100 transition-colors duration-300"
            >
              View Our Menu
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-accent text-white font-medium py-3 px-8 rounded-md hover:bg-accent-dark transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
