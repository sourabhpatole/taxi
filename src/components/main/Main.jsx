import React from "react";
import First from "../../pages/first/First";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import "./main.css";
const Main = () => {
  return (
    <div className="main">
      <Sidebar />
      <First />
    </div>
  );
};

export default Main;
