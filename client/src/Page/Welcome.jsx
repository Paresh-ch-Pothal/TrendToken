import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import banner from '../assets/banner.jpg'
import '../CSS/welcome.css'
import { Link } from "react-router-dom";

const Welcome = () => {

  const host = import.meta.env.VITE_API_URL || "http://localhost:5000";

  return (
    <>
      <div className="welcomeContainer">
        <div className="overlay"></div> {/* Gradient Overlay */}
        <div className="content">
          <h1 className="welcomeText">Welcome to TrendToken</h1>
          <p className="primaryText">🌟 Stay Ahead with TrendtoKEN!
            TrendtoKEN is your one-stop destination to explore the latest trends in fashion, gadgets, home essentials, beauty, and more!</p>
          <p className="secondaryText">Be part of a global shopping experience where you can explore, compare, and shop the latest products with ease.</p>
          <Link to='/home' className="ctaButton">Get Started</Link>
        </div>
      </div>
    </>
  );
};

export default Welcome;
