import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Residencies.css";
import data from "../utils/slider.json";
import { FaHeart, FaRegHeart, FaShoppingCart, FaHome, FaSearch } from "react-icons/fa";

// Import images directly
import rImage from "./r.jpg";
import image2 from "./r2.webp";
import image15 from "./r2.webp";
import image17 from "./bg.jpg";
import image9 from "./bg1.jpg";
import image20 from "./r4.webp";
import image21 from "./new.jpg";
// Map the images to their paths
const imageMap = {
    "./r.jpg": rImage,
    "./r2.webp": image2,
    "./r3.webp": image15, 
    "./bg.jpg": image17,
    "./bg1.jpg": image9,
    "./r4.webp": image20,
    "./new.jpg": image21,
};

const Recidencies = () => {
  const [properties, setProperties] = useState(data);
  const [likedCount, setLikedCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleLike = (index) => {
    const updatedProperties = properties.map((property, i) => {
      if (i === index) {
        const updatedLiked = !property.liked;
        if (updatedLiked) {
          setLikedCount((prevCount) => prevCount + 1);
        } else {
          setLikedCount((prevCount) => prevCount - 1);
        }
        return { ...property, liked: updatedLiked };
      }
      return property;
    });
    setProperties(updatedProperties);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const filteredProperties = properties.filter((property) =>
    property.address.toLowerCase().includes(searchQuery)
  );

  return (
    <>
      <div className="header">
        <button className="home-button" onClick={() => navigate("/")}>
          <FaHome />
        </button>
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search by address"
            value={searchQuery}
            onChange={handleSearch}
          />
          <FaSearch className="search-icon" />
        </div>
        <div className="cart-icon">
          <FaShoppingCart />
          {likedCount > 0 && <span className="cart-count">{likedCount}</span>}
        </div>
      </div>
      <section className="r-wrapper">
        <div className="paddings innerWidth r-container">
          <div className="r-cards-container">
            {filteredProperties.map((card, i) => (
              <div key={i} className="flexColStart r-card">
                <img src={imageMap[card.image]} alt="home" />
                <div className="like-button" onClick={() => handleLike(i)}>
                  {card.liked ? <FaHeart color="red" /> : <FaRegHeart />}
                </div>
                <div className="r-info">
                  <span className="r-price">
                    <span style={{ color: "orange" }}>$</span>
                    <span>{card.price}</span>
                  </span>
                  <span className="r-address">{card.address}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Recidencies;
