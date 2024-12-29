import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import heroImage from '../assets/hero.jpg'; // Assuming you have a hero image

const HomePage = () => {
  
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="">
        {/* <img src={heroImage} alt="Food Banner" className="w-full h-96 object-cover" /> */}
        <div className=" inset-0 bg-white bg-opacity-50 flex flex-col justify-center items-center">
          <h1 className="text-5xl text-zinc-900 font-bold mb-4">Discover Your Favorite Food</h1>
          <p className="text-xl text-gray-800 mb-8">Find the best restaurants around you!</p>
          <Link
            to="/restaurantlist"
            className="bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition font-semibold"
          >
            Search Restaurants
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Explore Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          <Link to="/restaurantlist" className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition">
            <div className="flex items-center space-x-4">
              {/* <img src="/images/pizza.jpg" alt="Pizza" className="w-16 h-16 rounded-full object-cover" /> */}
              <h3 className="text-xl font-semibold text-gray-700 text-center">Search through Lists</h3>
            </div>
          </Link>

          <Link to="/location-search" className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition">
            <div className="flex items-center space-x-4">
              {/* <img src="/images/burger.jpg" alt="Burger" className="w-16 h-16 rounded-full object-cover" /> */}
              <h3 className="text-xl font-semibold text-gray-700">Search through Location</h3>
            </div>
          </Link>
          

          {/* ... More Categories */}
        </div>
      </section>

      {/* Featured Restaurants Section */}
      {/* <section className="py-16 px-6 bg-gray-100"> */}
        {/* <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Featured Restaurants</h2> */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> */}
          {/* <Link to="/restaurant/123" className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition"> */}
            {/* <img src="/images/restaurant1.jpg" alt="Restaurant 1" className="w-full h-40 object-cover rounded-lg mb-4" /> */}
            {/* <h3 className="text-2xl font-semibold text-gray-700">Restaurant 1</h3>
            <p className="text-gray-500">Best sushi in town!</p>
          </Link> */}
{/* 
          <Link to="/restaurant/456" className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition"> */}
            {/* <img src="/images/restaurant2.jpg" alt="Restaurant 2" className="w-full h-40 object-cover rounded-lg mb-4" /> */}
            {/* <h3 className="text-2xl font-semibold text-gray-700">Restaurant 2</h3>
            <p className="text-gray-500">Delicious burgers and fries!</p> */}
          {/* </Link> */}

          {/* <Link to="/restaurant/789" className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition"> */}
            {/* <img src="/images/restaurant3.jpg" alt="Restaurant 3" className="w-full h-40 object-cover rounded-lg mb-4" /> */}
            {/* <h3 className="text-2xl font-semibold text-gray-700">Restaurant 3</h3> */}
            {/* <p className="text-gray-500">Homemade Italian pasta and pizza!</p> */}
          {/* </Link> */}
        {/* </div> */}
{/* </section> */}
       </div>
  );
};

export default HomePage;
