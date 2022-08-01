import React from "react";
import First from "../../pages/first/First";
import Second from "../../pages/second/Second";
import Navbar from "../Navbar/Navbar";
import "./main.css";
const Main = () => {
  return (
    <div className="main">
      <Navbar />
      <First />
      <Second />
    </div>
  );
};

export default Main;
