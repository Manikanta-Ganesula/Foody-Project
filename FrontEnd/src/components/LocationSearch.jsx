// // // import React, { useState } from 'react';
// // // import { searchRestaurantsByLocation } from '../services/api';

// // // const LocationSearch = () => {
// // //   const [latitude, setLatitude] = useState('');
// // //   const [longitude, setLongitude] = useState('');
// // //   const [radius, setRadius] = useState(3000);
// // //   const [restaurants, setRestaurants] = useState([]);

// // //   const handleSearch = async () => {
// // //     // const result = await searchRestaurantsByLocation(latitude, longitude, radius);
// // //     // setRestaurants(result);
// // //   };

// // //   return (
// // //     <div>
// // //       <h1>Search by Location</h1>
// // //       <input
// // //         type="text"
// // //         placeholder="Latitude"
// // //         value={latitude}
// // //         onChange={(e) => setLatitude(e.target.value)}
// // //       />
// // //       <input
// // //         type="text"
// // //         placeholder="Longitude"
// // //         value={longitude}
// // //         onChange={(e) => setLongitude(e.target.value)}
// // //       />
// // //       <input
// // //         type="number"
// // //         placeholder="Radius (in meters)"
// // //         value={radius}
// // //         onChange={(e) => setRadius(e.target.value)}
// // //       />
// // //       <button onClick={handleSearch}>Search</button>
// // //       <ul>
// // //         {restaurants.map((restaurant) => (
// // //           <li key={restaurant.id}>{restaurant.name}</li>
// // //         ))}
// // //       </ul>
// // //     </div>
// // //   );
// // // };

// // // export default LocationSearch;
// // import React, { useState } from 'react';
// // import { searchByLocation } from '../services/api';

// // const LocationSearch = () => {
// //   const [latitude, setLatitude] = useState('');
// //   const [longitude, setLongitude] = useState('');
// //   const [radius, setRadius] = useState(3000);
// //   const [restaurants, setRestaurants] = useState([]);
// //   const [loading, setLoading] = useState(false);

// //   const handleSearch = async () => {
// //     setLoading(true);
// //     const result = await searchByLocation(latitude, longitude, radius);
// //     setRestaurants(result.restaurants);
// //     setLoading(false);
// //   };

// //   return (
// //     <div className="p-4 max-w-lg mx-auto">
// //       <h1 className="text-2xl font-semibold mb-4">Search by Location</h1>
// //       <div className="mb-4 space-y-2">
// //         <input
// //           type="text"
// //           className="border w-full p-2 rounded"
// //           placeholder="Latitude"
// //           value={latitude}
// //           onChange={(e) => setLatitude(e.target.value)}
// //         />
// //         <input
// //           type="text"
// //           className="border w-full p-2 rounded"
// //           placeholder="Longitude"
// //           value={longitude}
// //           onChange={(e) => setLongitude(e.target.value)}
// //         />
// //         <input
// //           type="number"
// //           className="border w-full p-2 rounded"
// //           placeholder="Radius (in meters)"
// //           value={radius}
// //           onChange={(e) => setRadius(e.target.value)}
// //         />
// //       </div>
// //       <button
// //         className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 w-full"
// //         onClick={handleSearch}
// //       >
// //         {loading ? 'Searching...' : 'Search'}
// //       </button>
// //       <ul className="mt-4">
// //         {restaurants.map((restaurant) => (
// //           <li key={restaurant.id} className="border p-2 mt-2 rounded">{restaurant.name}</li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default LocationSearch;

// import React, { useState } from 'react';
// import { searchByLocation } from '../services/api';

// const LocationSearch = () => {
//   const [latitude, setLatitude] = useState('');
//   const [longitude, setLongitude] = useState('');
//   const [radius, setRadius] = useState(3000);
//   const [restaurants, setRestaurants] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const handleSearch = async () => {
//     setLoading(true);
//     const result = await searchByLocation(latitude, longitude, radius);
//     setRestaurants(result.restaurants);
//     setLoading(false);
//   };

//   return (
//     <div className="p-6 bg-white shadow-lg rounded-lg max-w-xl mx-auto mt-8">
//       <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Search Restaurants by Location</h1>
//       <div className="mb-4 space-y-4">
//         <input
//           type="text"
//           className="border w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           placeholder="Latitude"
//           value={latitude}
//           onChange={(e) => setLatitude(e.target.value)}
//         />
//         <input
//           type="text"
//           className="border w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           placeholder="Longitude"
//           value={longitude}
//           onChange={(e) => setLongitude(e.target.value)}
//         />
//         <input
//           type="number"
//           className="border w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           placeholder="Radius (in meters)"
//           value={radius}
//           onChange={(e) => setRadius(e.target.value)}
//         />
//       </div>
//       <button
//         className={`w-full bg-blue-600 text-white font-semibold py-3 rounded-lg transition duration-300 hover:bg-blue-700 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
//         onClick={handleSearch}
//         disabled={loading}
//       >
//         {loading ? 'Searching...' : 'Search'}
//       </button>
//       {restaurants.length > 0 && (
//         <ul className="mt-6 space-y-3">
//           {restaurants.map((restaurant) => (
//             <li
//               key={restaurant.id}
//               className="bg-gray-100 p-4 rounded-lg shadow hover:bg-gray-200 transition"
//             >
//               {restaurant.name}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default LocationSearch;


import React, { useState } from 'react';
import { searchByLocation } from '../services/api';
import { Link } from 'react-router-dom';

const LocationSearch = () => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [radius, setRadius] = useState(3);
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    // setLoading(true);
    const result = await searchByLocation(latitude, longitude, radius);
    console.log(result)
    setRestaurants(result.restaurants);
    setLoading(false);
  };

  return (
    <>
    <div className="p-6 bg-white shadow-lg rounded-lg max-w-xl mx-auto mt-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Search Restaurants by Location</h1>
      <div className="mb-4 space-y-4">
        <input
          type="text"
          className="border w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Latitude"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
        />
        <input
          type="text"
          className="border w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Longitude"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
        />
      </div>
      <button
        className={`w-full bg-blue-600 text-white font-semibold py-3 rounded-lg transition duration-300 hover:bg-blue-700 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={handleSearch}
        disabled={loading}
      >
        {loading ? 'Searching...' : 'Search'}
      </button>
      </div>
      {restaurants.length > 0 && (
       <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
       {restaurants.map((res) => (
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
      )}
      </>
  );
};

export default LocationSearch;
