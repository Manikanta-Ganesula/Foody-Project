const Restaurant = require('../Models/Restaurant');

// Get all restaurants
exports.getRestaurants = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    // console.log(page,limit)
    const skip = (page - 1) * limit;

    const restaurants = await Restaurant.find().skip(skip).limit(limit);
    const results_found = await Restaurant.countDocuments();
    // console.log(results_found,restaurants)
    res.json({ results_found:results_found, restaurants:restaurants });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get restaurant by ID
exports.getRestaurantById = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }
    res.json(restaurant);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Search restaurants by location
exports.searchRestaurantsByLocation = async (req, res) => {
  const { lat, lon, radius } = req.query;

  try {
    const restaurants = await Restaurant.find({
      'location.latitude': { $gte: lat - radius, $lte: lat + radius },
      'location.longitude': { $gte: lon - radius, $lte: lon + radius },
    });

    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
