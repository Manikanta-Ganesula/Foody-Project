import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getRestaurantDetail } from '../services/api';

const RestaurantDetail = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await getRestaurantDetail(id);
      setRestaurant(data);
      setLoading(false);
    }
    fetchData();
  }, [id]);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (!restaurant) return <p className="text-center text-gray-500">No details available.</p>;

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg max-w-2xl mx-auto mt-8">
      <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">{restaurant.name}</h2>
      <img
        src={restaurant.thumb}
        alt={restaurant.name}
        className="w-full h-72 object-cover mt-4 rounded-lg shadow-md"
      />
      <div className="mt-6 space-y-4">
        <p className="text-lg">
          <strong>Address:</strong> {restaurant.location.address}
        </p>
        <p className="text-lg">
          <strong>Cuisines:</strong> {restaurant.cuisines}
        </p>
        <p className="text-lg">
          <strong>Cost for Two:</strong> ₹{restaurant.average_cost_for_two}
        </p>
        <p className="text-lg">
          <strong>Rating:</strong> {restaurant.user_rating.aggregate_rating} / 5
        </p>
      </div>
    </div>
  );
};

export default RestaurantDetail;
