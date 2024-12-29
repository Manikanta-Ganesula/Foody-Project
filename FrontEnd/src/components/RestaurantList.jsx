import React, { useEffect, useState } from 'react';
import { getRestaurants, getRestaurantById } from '../services/api';
import { Link } from 'react-router-dom';

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const limit = 16;
  const maxPageDisplay = 5;

  // Fetch restaurants from the API
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const data = await getRestaurants(page, limit);
      setRestaurants(data.restaurants);
      setFilteredRestaurants(data.restaurants);
      setTotalPages(Math.ceil(data.results_found / limit));
      setLoading(false);
    }
    fetchData();
  }, [page]);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;

  // Logic to handle page range for pagination display
  const getPageNumbers = () => {
    const halfRange = Math.floor(maxPageDisplay / 2);
    let startPage = Math.max(1, page - halfRange);
    let endPage = Math.min(totalPages, startPage + maxPageDisplay - 1);
    if (endPage - startPage < maxPageDisplay - 1) {
      startPage = Math.max(1, endPage - maxPageDisplay + 1);
    }
    return [...Array(endPage - startPage + 1).keys()].map(i => startPage + i);
  };

  const handlePageClick = (pageNumber) => {
    setPage(pageNumber);
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleSearch = async () => {
    if (searchQuery === '') {
      setFilteredRestaurants(restaurants);
      return;
    }

    if (searchQuery.length > 3) {
      try {
        setLoading(true);
        const restaurant = await getRestaurantById(searchQuery);
        setFilteredRestaurants(restaurant ? [restaurant] : []);
      } catch (error) {
        console.error('Error fetching restaurant by ID:', error);
        setFilteredRestaurants([]);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setFilteredRestaurants(restaurants);
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg max-w-7xl mx-auto mt-8">
      <h2 className="text-4xl font-bold text-zinc-700 mb-6 text-center">Restaurant List</h2>

      {/* Search Bar Container */}
      <div className="flex items-center mb-6">
        <input
          type="text"
          placeholder="Search restaurants by id..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-l-lg"
        />
        {searchQuery && (
          <button
            onClick={handleClearSearch}
            className="px-3 py-2 text-gray-500 hover:text-gray-700 border-t border-r border-b border-gray-300"
          >
            X
          </button>
        )}
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600"
        >
          Search
        </button>
      </div>

      {/* Restaurant List as Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredRestaurants.map((res) => (
          <div
            key={res._id}
            className="bg-white p-4 rounded-lg shadow hover:bg-blue-200 transition"
          >
            <Link to={`/restaurant/${res.id}`}>
              <img
                src={res.thumb} // Assuming the restaurant data includes an `image_url` field
                alt={res.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-violet-600 mb-2">
                {res.name}
              </h3>
              <p>Id: {res.id}</p>
              <p className="text-gray-600 mb-2">
                {res.cuisines}... {/* Assuming a `description` field */}
              </p>
              <p className="text-green-500 mb-2">
                Rating: {res.user_rating.aggregate_rating} ⭐ {/* Assuming a `rating` field */}
              </p>
            </Link>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="mt-8 flex justify-center items-center space-x-2">
        <button
          onClick={handlePrevPage}
          disabled={page === 1}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-400"
        >
          Previous
        </button>

        {getPageNumbers().map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageClick(pageNumber)}
            className={`px-4 py-2 rounded-lg ${
              page === pageNumber
                ? 'bg-red-600 text-white'
                : 'bg-white text-blue-600 border border-blue-600'
            }`}
          >
            {pageNumber}
          </button>
        ))}

        <button
          onClick={handleNextPage}
          disabled={page === totalPages}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:bg-gray-400"
        >
          Next
        </button>
      </div>

      {/* Showing current page out of total pages */}
      <div className="mt-4 text-center text-gray-700">
        Page {page} of {totalPages}
      </div>
    </div>
  );
};

export default RestaurantList;
