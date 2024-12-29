import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RestaurantList from './components/RestaurantList';
import RestaurantDetail from './components/RestaurantDetail';
import LocationSearch from './components/LocationSearch';
import HomePage from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Services from './components/Services.jsx';
import Contact from './components/Contact.jsx';
import About from './components/about.jsx';

const App = () => {
  return (
    
    <Router>
      <div className="App">
      <Navbar/>
        <Routes>
        <Route exact path="/image-search" element={<imageSearch />} />
          <Route exact path="/restaurantlist" element={<RestaurantList />} />
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route path="/restaurant/:id" element={<RestaurantDetail/>} />
          <Route path="/location-search" element={<LocationSearch />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
