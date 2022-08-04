import React from "react";
import First from "../../pages/first/First";
import Second from "../../pages/second/Second";
import Third from "../../pages/third/Third";
import Four from "../../pages/four/Four";
import Navbar from "../Navbar/Navbar";
import "./main.css";
import Five from "../../pages/five/Five";
import Six from "../../pages/six/Six";
const Main = () => {
  return (
    <div className="main">
      <Navbar />
      <div className="pages">
        {/* <First />
        <Second />
        <Third />
        <Four />
        <Five /> */}
        <Six />
      </div>
    </div>
  );
};

export default Main;
