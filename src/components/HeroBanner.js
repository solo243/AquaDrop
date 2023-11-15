import React from "react";
import "./HeroBanner.css";

function HeroBanner() {
  return (
    <div className="main-div">
      <div className="banner-container">
        <div class="hero">
          <h4>Pure Water</h4>
          <h2> Pure Livings</h2>
          <h1>Elevate Your Hydration</h1>
        </div>
        <div className="heroimg">
          <img src="./assets/family3.png" />
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
