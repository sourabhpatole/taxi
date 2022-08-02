import React from "react";
import First from "../../pages/first/First";
import Second from "../../pages/second/Second";
import Third from "../../pages/third/Third";
import Navbar from "../Navbar/Navbar";
import "./main.css";
const Main = () => {
  return (
    <div className="main">
      <Navbar />
      <div className="pages">
        <First />
        <Second />
        <Third />
      </div>
    </div>
  );
};

export default Main;
