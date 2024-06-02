import React from 'react';
import './css/ScrollingText.css';
import Gallery from './css/img/gallery/gallery-compressed.webp';

const ScrollingText = () => {
  const bigText = "discover our brand new gallery";
  const bigText2 = "open at clermont-ferrand";

  return (
    <div className={"scrollContainer"}>
      <div className={"bigText"}>
        <h2>
          {bigText.split("").map((char, index) => (
            <span key={index} className="animatedLetter" style={{ animationDelay: `${index * 0.03}s` }}>
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h2>
      </div>
      <div className={"bigText"}>
        <h2>
          {bigText2.split("").map((char, index) => (
            <span key={index} className="animatedLetter" style={{ animationDelay: `${index * 0.08}s` }}>
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h2>
      </div>
      <img src={Gallery} alt="Gallery" className={"image"} id="about"/>

      <div className={"textContainer"}>
        <p className={"text"}>Located in the city of Clermont-Ferrand, Bunt Gallery is a premier destination for contemporary art enthusiasts. Founded in 2024, the gallery is dedicated to showcasing innovative works from both emerging and established artists, providing a dynamic space for creativity and cultural exchange.</p>      </div>
    </div>
  );
};

export default ScrollingText;
