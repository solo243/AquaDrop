import React from "react";
import "./Fetures.css";
function Fetures() {
  return (
    <div>
      <div className="main-title">
        <div className="what-make-us">What Makes Us</div>
        <div className="diffrent">‎ Different</div>
      </div>
      <section class="feature section-p1">
        <div class="feature__box">
          <img src="./assets/features/f1.png" alt="Shipping Image" />
          <h6>Free Shipping</h6>
        </div>
        <div class="feature__box">
          <img src="./assets/features/f2.png" alt="Shipping Image" />
          <h6>Timely Delivery</h6>
        </div>
        <div class="feature__box">
          <img src="./assets/features/f3.png" alt="Shipping Image" />
          <h6>Save Money</h6>
        </div>
        <div class="feature__box">
          <img src="./assets/features/f4.png" alt="Shipping Image" />
          <h6>Promotions</h6>
        </div>
        <div class="feature__box">
          <img src="./assets/features/f5.png" alt="Shipping Image" />
          <h6>Rewards</h6>
        </div>
        <div class="feature__box">
          <img src="./assets/features/f6.png" alt="Shipping Image" />
          <h6>24/7 Support</h6>
        </div>
      </section>
    </div>
  );
}

export default Fetures;
