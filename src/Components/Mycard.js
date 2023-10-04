import React from "react";
import "./Mycard.css";

const Mycard = ({ cardno, imageSrc }) => {
  return (
    <div className="my-card">
      <img src={imageSrc} alt={`Image ${cardno}`} />
      <p>Card {cardno}</p>
    </div>
  );
};

export default Mycard;
