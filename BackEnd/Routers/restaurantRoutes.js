const express = require('express');
const {
  getRestaurants,
  getRestaurantById,
  searchRestaurantsByLocation,
} = require('../Controllers/restaurantController');

const router = express.Router();

// Get all restaurants
router.get('/restaurants/list', getRestaurants);

// Get restaurant by ID
router.get('/restaurants/:id', getRestaurantById);

// Search restaurants by location
router.get('/restaurants/location', searchRestaurantsByLocation);

module.exports = router;
