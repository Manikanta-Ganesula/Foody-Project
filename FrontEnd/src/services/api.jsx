import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Change this to your backend's base URL

export const getRestaurants = async (page, limit) => {
  try {
    const response = await axios.get(`${API_URL}/restaurants/list?page=${page}&limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching restaurants', error);
    return { restaurants: [], results_found: 0 };
  }
};

export const getRestaurantDetail = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/restaurants/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching restaurant details', error);
    }
};

export const getRestaurantById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/restaurants/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching restaurant details', error);
  }
};

export const searchByLocation = async (latitude, longitude, radius) => {
  console.log(latitude,longitude,radius)
  try {
    const response = await axios.get(`${API_URL}/restaurantLoc?lat=${latitude}&lon=${longitude}&radius=${radius}`);
    return response.data;
  } catch (error) {
    console.error('Error searching restaurants by location', error);
  }
};
