const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const Restaurant = require('./Models/Restaurant');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

async function insertRestaurantsFromFiles() {
  try {
    for (let i = 1; i <= 1; i++) {
      const filePath = path.join(__dirname, 'data', `file${i}.json`);
      
      // Use fs.promises.readFile to avoid callbacks and work better with async/await
      const data = await fs.promises.readFile(filePath, 'utf-8');
      
      const restaurants = [];
      const parsedData = JSON.parse(data);

      // Extract restaurant objects from the data
      for (const record of parsedData) {
        if (record.restaurants) {
          for (const restaurantObj of record.restaurants) {
            if (restaurantObj.restaurant) {
              // Ignore the offers field
              restaurantObj.restaurant.offers = [];
              restaurants.push(restaurantObj.restaurant);
            }
          }
        }
      }

      // Bulk insert into MongoDB
      if (restaurants.length > 0) {
        await Restaurant.insertMany(restaurants);
        console.log(`${restaurants.length} Restaurants inserted successfully from file${i}`);
      } else {
        console.log(`No restaurants to insert from file${i}`);
      }
    }
  } catch (error) {
    console.error('Error inserting restaurants:', error.message);
  } finally {
    // Close the MongoDB connection after all files are processed
    mongoose.connection.close();
    console.log('MongoDB connection closed');
  }
}

// Execute the function to insert restaurants from files
insertRestaurantsFromFiles();
