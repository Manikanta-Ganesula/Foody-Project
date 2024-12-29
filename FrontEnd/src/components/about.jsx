import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gray-50 text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We are passionate about connecting food lovers with the best restaurants in town. Our mission is to make dining experiences delightful and accessible to everyone.
        </p>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">Our Mission</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-gray-600 mb-6">
            At [Company Name], our mission is to create a seamless connection between food enthusiasts and restaurants, making it easy for people to discover, explore, and enjoy culinary experiences tailored to their preferences. We strive to offer top-quality service with innovation and efficiency.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">Our Vision</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-gray-600 mb-6">
            Our vision is to be the leading platform for discovering and experiencing food, enhancing the way people dine and explore new flavors. We aim to transform the dining landscape by leveraging technology to provide unmatched services and experiences.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Team Member 1 */}
          <div className="bg-white shadow-lg rounded-lg p-8 hover:shadow-2xl transition">
            <div className="flex items-center space-x-4">
              {/* Replace with actual image */}
              {/* <img src="/images/team1.jpg" alt="Team Member 1" className="w-16 h-16 rounded-full object-cover" /> */}
              <h3 className="text-2xl font-semibold text-gray-700">Jane Doe</h3>
            </div>
            <p className="text-gray-500 mt-4">CEO & Founder</p>
            <p className="text-gray-500 mt-2">With over 10 years of experience in the food and tech industry, Jane is dedicated to making food discovery simple and delightful.</p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white shadow-lg rounded-lg p-8 hover:shadow-2xl transition">
            <div className="flex items-center space-x-4">
              {/* Replace with actual image */}
              {/* <img src="/images/team2.jpg" alt="Team Member 2" className="w-16 h-16 rounded-full object-cover" /> */}
              <h3 className="text-2xl font-semibold text-gray-700">John Smith</h3>
            </div>
            <p className="text-gray-500 mt-4">CTO</p>
            <p className="text-gray-500 mt-2">John leads the technology team, ensuring the platform is always up-to-date with the latest innovations in food delivery and restaurant discovery.</p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white shadow-lg rounded-lg p-8 hover:shadow-2xl transition">
            <div className="flex items-center space-x-4">
              {/* Replace with actual image */}
              {/* <img src="/images/team3.jpg" alt="Team Member 3" className="w-16 h-16 rounded-full object-cover" /> */}
              <h3 className="text-2xl font-semibold text-gray-700">Emily Watson</h3>
            </div>
            <p className="text-gray-500 mt-4">Head of Marketing</p>
            <p className="text-gray-500 mt-2">Emily drives our marketing strategy, ensuring we connect with food lovers across the globe with innovative campaigns and outreach.</p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">Our Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {/* Core Value 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Innovation</h3>
            <p className="text-gray-500">We are constantly seeking new ways to improve and enhance the food discovery experience through cutting-edge technology.</p>
          </div>

          {/* Core Value 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Customer Focus</h3>
            <p className="text-gray-500">Our customers are at the heart of everything we do, and we strive to provide exceptional service at every turn.</p>
          </div>

          {/* Core Value 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Excellence</h3>
            <p className="text-gray-500">We maintain high standards in all aspects of our business, from the quality of our services to the professionalism of our team.</p>
          </div>

          {/* Core Value 4 */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Sustainability</h3>
            <p className="text-gray-500">We are committed to promoting sustainability in the food industry, supporting eco-friendly practices and local businesses.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
