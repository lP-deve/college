import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Slider.css'

export const Slider = () => {
  const images = [
    "/3.jpeg",
    "/1.jpeg",
    "/tbilisi.jpeg",
    "/Грузия.jpeg",
    "/qartlis.jpeg"
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

    <div className="rechange">
      <div
        className="slider"
        style={{
          backgroundImage: `url(${images[currentIndex]})`
        }}
      ></div>

      <section className="menu-preview">

        <h1>Welcome in Georgian Taste place</h1>
        <p className="description">
          At <strong>Georgian Taste</strong>, we bring the flavors of Georgia to your table.
          Every dish tells a story — from the mountain herbs of Svaneti to the vineyards of Kakheti.
          Our chefs follow generations-old recipes to create meals that warm the heart and delight the senses.
        </p>


        <h2>Our Specialties</h2>
        <div className="menu-items">
          <Link to='/menu'>  <div className="item">
            <img src="Adjarian Khachapuri with wine.jpeg" alt="Khachapuri" />
            <h3>Adjarian Khachapuri</h3>
            <p>Freshly baked bread filled roasted with cheese and egg — a true taste of Georgia.</p>
          </div></Link>
          <Link to='/menu'>  <div className="item">
            <img src="qinkali.jpeg" alt="Khinkali" />
            <h3>Khinkali</h3>
            <p>Juicy handmade dumplings with seasoned meat, herbs, and warm spices.</p>
          </div></Link>
          <Link to='/menu'>   <div className="item">
            <img src="Honest Guide to Georgian Cuisine.jpeg" alt="Mtsvadi" />
            <h3>Mtsvadi</h3>
            <p>Marinated  beef grilled to perfection over open flames. grilled fried special taste</p>
          </div></Link>
        </div>
      </section>


    </div>
  );
};
