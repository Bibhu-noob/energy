import React from "react";
import Mycard from "./Mycard.js";
import "./Imagecarousel.css";
import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";
import image4 from "./images/image4.png";
import image5 from "./images/image5.png";
import image6 from "./images/image6.png";

const Imagecarousel = () => {
  const box = document.querySelector(".product-container");
  const btnpressprev = () => {
    let width = window.innerWidth; // Use window.innerWidth to get the window width
    box.scrollLeft -= width; // Subtract width from box.scrollLeft to scroll left
  };

  const btnpressnext = () => {
    let width = window.innerWidth;
    box.scrollLeft += width;
  };
  return (
    <div className="product-carousel">
      <button className="pre-btn" onClick={btnpressprev}>
        <p>&lt;</p>
      </button>
      <button className="next-btn" onClick={btnpressnext}>
        <p>&gt;</p>
      </button>

      {/* <div className="product-container">
        <Mycard cardno="1" />
        <Mycard cardno="2" />
        <Mycard cardno="3" />
        <Mycard cardno="4" />
        <Mycard cardno="5" />
        <Mycard cardno="6" />
        <Mycard cardno="7" />
        <Mycard cardno="8" />
        <Mycard cardno="9" />
        <Mycard cardno="10" />
        <Mycard cardno="11" />
        <Mycard cardno="12" />
        <Mycard cardno="13" />
      </div> */}

      <div className="product-container">
        <Mycard cardno="1" imageSrc={image1} />
        <Mycard cardno="2" imageSrc={image2} />
        <Mycard cardno="3" imageSrc={image3} />
        <Mycard cardno="4" imageSrc={image4} />
        <Mycard cardno="5" imageSrc={image5} />
        <Mycard cardno="6" imageSrc={image6} />
      </div>
    </div>
  );
};

export default Imagecarousel;
