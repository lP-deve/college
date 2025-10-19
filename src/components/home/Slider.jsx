import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Slider.css'

export const Slider = () => {
  const images = [
    "flags.jpeg",
    "old.jpeg",
    "mount.jpeg",

  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="slider"
      style={{
        backgroundImage: `url(${images[currentIndex]})`
      }}
    >
      
        <section className="menu-preview">
    
        <h1>Welcome in Georgian Foods place</h1>
        <p className="description">
          At <strong>Georgian Foods</strong>, we bring the flavors of Georgia to your table.
          Every dish tells a story — from the mountain herbs of Svaneti to the vineyards of Kakheti.
          Our chefs follow generations-old recipes to create meals that warm the heart and delight the senses.
        </p>
     

        <h2>Our Specialties</h2>
        <div className="menu-items">
            <Link to='/menu'>  <div className="item">
            <img src="Adjarian Khachapuri with wine.jpeg" alt="Khachapuri" />
            <h3>Adjarian Khachapuri</h3>
            <p>Freshly baked bread filled with cheese and egg — a true taste of Georgia.</p>
          </div></Link>
            <Link to='/menu'>  <div className="item">
            <img src="qinkali.jpeg" alt="Khinkali" />
            <h3>Khinkali</h3>
            <p>Juicy handmade dumplings with seasoned meat, herbs, and warm spices.</p>
          </div></Link>
           <Link to='/menu'>   <div className="item">
            <img src="Honest Guide to Georgian Cuisine.jpeg" alt="Mtsvadi" />
            <h3>Mtsvadi</h3>
            <p>Marinated pork or beef grilled to perfection over open flames. grilled fried</p>
          </div></Link>
        </div>
      </section> 

    
    </div>
  );
};
