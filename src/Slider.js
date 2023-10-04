import React, { useState } from "react";
import "./Slider.css"; // Import the CSS file

// Import the images and descriptions
import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";
import image4 from "./images/image4.png";
import image5 from "./images/image5.png";
import image6 from "./images/image6.png";

const images = [
  {
    src: image1, // Replace with the actual image file paths
    caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quas magni earum autem voluptatum itaque architecto cumque perspiciatis accusantium assumenda!",
  },
  {
    src: image2,
    caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quas magni earum autem voluptatum itaque architecto cumque perspiciatis accusantium assumenda!",
  },
  {
    src: image3,
    caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quas magni earum autem voluptatum itaque architecto cumque perspiciatis accusantium assumenda!",
  },
  {
    src: image4,
    caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quas magni earum autem voluptatum itaque architecto cumque perspiciatis accusantium assumenda!",
  },
  {
    src: image5,
    caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quas magni earum autem voluptatum itaque architecto cumque perspiciatis accusantium assumenda!",
  },
  {
    src: image6,
    caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quas magni earum autem voluptatum itaque architecto cumque perspiciatis accusantium assumenda!",
  },
];

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slider-container">
      <button onClick={prevSlide} className="arrow-button left-arrow">
        <i className="fas fa-chevron-left"></i>
      </button>
      <div className="slider">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? "center-slide" : ""}`}
          >
            <img src={image.src} alt={`Image ${index + 1}`} />
            <p className="image-description">{image.caption}</p>
          </div>
        ))}
      </div>
      <button onClick={nextSlide} className="arrow-button right-arrow">
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
}

export default Slider;
