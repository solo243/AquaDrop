import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./ShopForHome.css";

function ShopForHome() {
  const products = [
    {
      img: "./assets/RO/1.png",
      desc: "SMART KITCHEN WATER PURIFIER, TOP RATED",
      title: "Pro Black Copper +zinc+ alkaline 13",
      price: "₹13,500",
      dubprice: "20,000",
    },
    {
      img: "./assets/RO/2.png",
      desc: "SMART KITCHEN WATER PURIFIER, TOP RATED",
      title: "Pro Black Copper +zinc+ alkaline 13",
      price: "₹13,500 ",
      dubprice: "20,000",
    },
    {
      img: "./assets/RO/3.png",
      desc: "SMART KITCHEN WATER PURIFIER, TOP RATED",
      title: "Pro Black Copper +zinc+ alkaline 13",
      price: "₹13,500",
      dubprice: "20,000",
    },
    {
      img: "./assets/RO/4.png",
      desc: "SMART KITCHEN WATER PURIFIER, TOP RATED",
      title: "Pro Black Copper +zinc+ alkaline 13",
      price: "₹13,500",
      dubprice: "20,000",
    },
    {
      img: "./assets/RO/5.png",
      desc: "SMART KITCHEN WATER PURIFIER, TOP RATED",
      title: "Pro Black Copper +zinc+ alkaline 13",
      price: "₹13,500",
      dubprice: "20,000",
    },
    {
      img: "./assets/RO/6.png",
      desc: "SMART KITCHEN WATER PURIFIER, TOP RATED",
      title: "Pro Black Copper +zinc+ alkaline 13",
      price: "₹13,500",
      dubprice: "20,000",
    },
    {
      img: "./assets/RO/7.png",
      desc: "SMART KITCHEN WATER PURIFIER, TOP RATED",
      title: "Pro Black Copper +zinc+ alkaline 13",
      price: "₹13,500",
      dubprice: "20,000",
    },
    {
      img: "./assets/RO/8.png",
      desc: "SMART KITCHEN WATER PURIFIER, TOP RATED",
      title: "Pro Black Copper +zinc+ alkaline 13",
      price: "₹13,500",
      dubprice: "20,000",
    },
    {
      img: "./assets/RO/8.png",
      desc: "SMART KITCHEN WATER PURIFIER, TOP RATED",
      title: "Pro Black Copper +zinc+ alkaline 13",
      price: "₹13,500",
      dubprice: "20,000",
    },
    {
      img: "./assets/RO/8.png",
      desc: "SMART KITCHEN WATER PURIFIER, TOP RATED",
      title: "Pro Black Copper +zinc+ alkaline 13",
      price: "₹13,500",
      dubprice: "20,000",
    },
  ];

  return (
    <div className="main">
      <div className="back">
        <div className="back-title">
          <h3>
            Inside <strong> Technologies</strong>
          </h3>
        </div>
        <div className="back-text">
          Our water purifier extracts harmful bacteria and impurity from natural
          water which is usually heavily contaminated and not recommended to
          consume directly. We use +UV, UF and RO technologies and also follow
          high technology industry standards of quality in manufacturing water
          purifiers.
        </div>
      </div>
      <div className="title">
        <div className="New">New</div>
        <div className="arriveal">‎ Arraval</div>
      </div>
      <div className="product-container">
        {products.map((item) => (
          <div>
            <div className="box">
              <div className="inner-box">
                <img src={item.img} />
              </div>
              <div className="gg">
                <div className="newtitle">
                  {item.title.length > 10
                    ? item.title.slice(0, 20) + "..."
                    : item.title}
                </div>
                <div class="star">
                  <FontAwesomeIcon icon={faStar} color="#ff9900" />
                  <FontAwesomeIcon icon={faStar} color="#ff9900" />
                  <FontAwesomeIcon icon={faStar} color="#ff9900" />
                  <FontAwesomeIcon icon={faStar} color="#ff9900" />
                </div>
                <div className="price">
                  <span className="original-price">{item.dubprice}</span>
                  <span className="discounted-price">{item.price}</span>
                </div>
                <div className="btn">Contect Us</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="all-cont">
        <div className="all"> View All Products</div>
      </div>
      <div>
        <img src="./assets/glass.jpg" className="glass" />
      </div>
    </div>
  );
}

export default ShopForHome;
