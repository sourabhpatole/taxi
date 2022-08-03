import React from "react";
import First from "../../pages/first/First";
import Second from "../../pages/second/Second";
import Third from "../../pages/third/Third";
import Four from "../../pages/four/Four";
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
        <Four />
      </div>
    </div>
  );
};

export default Main;
