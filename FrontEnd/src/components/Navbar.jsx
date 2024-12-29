// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav className="bg-white p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <div className="text-black text-2xl font-bold">
//           <Link to="/">MyLogo</Link>
//         </div>

//         {/* Navigation Links */}
//         <div className="space-x-6 ">
//           <Link
//             to="/"
//             className="text-black hover:bg-gray-600 hover:text-white p-2 rounded-lg transition"
//           >
//             Home
//           </Link>
//           <Link
//             to="/about"
//             className="text-black  hover:bg-gray-600 p-2 hover:text-white rounded-lg transition"
//           >
//             About
//           </Link>
//           <Link
//             to="/services"
//             className="text-black  hover:bg-gray-600 p-2 hover:text-white rounded-lg transition"
//           >
//             Services
//           </Link>
//           <Link
//             to="/contact"
//             className="text-black  hover:bg-gray-600 hover:text-white p-2 rounded-lg transition"
//           >
//             Contact
//           </Link>
//           <Link
//             to="/login"
//             className="bg-orange-600 text-white  py-2 px-4  hover:bg-orange-700 rounded-lg transition"
//           >
//             Login
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // State to toggle the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-black text-2xl font-bold">
          <Link to="/">Zomato</Link>
        </div>

        {/* Hamburger Icon (for mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
          >
            {/* Hamburger Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links (for larger screens) */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-black hover:bg-gray-600 hover:text-white p-2 rounded-lg transition"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-black hover:bg-gray-600 hover:text-white p-2 rounded-lg transition"
          >
            About
          </Link>
          <Link
            to="/services"
            className="text-black hover:bg-gray-600 hover:text-white p-2 rounded-lg transition"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="text-black hover:bg-gray-600 hover:text-white p-2 rounded-lg transition"
          >
            Contact
          </Link>
          {/* <Link
            to="/login"
            className="bg-orange-600 text-white py-2 px-4 hover:bg-orange-700 rounded-lg transition"
          >
            Login
          </Link> */}
        </div>

        {/* Mobile Menu (Dropdown) */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-10">
            <div className="flex flex-col space-y-4 p-4">
              <Link
                to="/"
                className="text-black hover:bg-gray-600 hover:text-white p-2 rounded-lg transition"
                onClick={() => setIsOpen(false)} // Close menu on link click
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-black hover:bg-gray-600 hover:text-white p-2 rounded-lg transition"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/services"
                className="text-black hover:bg-gray-600 hover:text-white p-2 rounded-lg transition"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="text-black hover:bg-gray-600 hover:text-white p-2 rounded-lg transition"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              {/* <Link
                to="/login"
                className="bg-orange-600 text-white py-2 px-4 hover:bg-orange-700 rounded-lg transition"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link> */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
