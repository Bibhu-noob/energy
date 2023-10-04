import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Footer from "./Footer";
import Slider from "./Slider";

import ImageCarousel from "./Components/Imagecarousel";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />

    <Footer />
    <ImageCarousel />
  </React.StrictMode>
);
