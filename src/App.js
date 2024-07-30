// src/App.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Listings from './pages/Listings';
import DetailPage from './pages/DetailPage';
import PostAdForm from './pages/PostAdForm';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PropertyContext from './contexts/PropertyContext'; // Corrected import path
import sampleProperties from './data/sampleProperties';

function App() {
  return (
    <PropertyContext.Provider value={sampleProperties}>
      <div className="App">
        <Navbar />
        <main className="py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/property/:id" element={<DetailPage />} />
            <Route path="/post-ad" element={<PostAdForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </PropertyContext.Provider>
  );
}

export default App;
