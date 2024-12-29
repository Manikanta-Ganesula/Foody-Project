import React from 'react';

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Services Section */}
      <section className="py-16 px-6">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white shadow-lg rounded-lg p-8 hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Custom Food Delivery</h3>
            <p className="text-gray-500">
              Get your favorite meals delivered right to your doorstep, customized to your taste.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white shadow-lg rounded-lg p-8 hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Online Reservation</h3>
            <p className="text-gray-500">
              Book tables at your favorite restaurants with a few clicks.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white shadow-lg rounded-lg p-8 hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Catering Services</h3>
            <p className="text-gray-500">
              We offer catering services for special events, parties, and corporate gatherings.
            </p>
          </div>

          {/* Add more services if needed */}
        </div>
      </section>
    </div>
  );
};

export default Services;
