import React from "react";
import Login from "../../components/login/Login";
import Second from "../second/Second";
import Fcard from "./card/Fcard";
import "./first.css";
const First = ({ closeModal }) => {
  return (
    <div>
      <div className="first-page">
        <div className="left-page">
          <h4 className="left-head">Welcome!</h4>
          <div className="left-span">
            <h1>WE TAKE YOU CITY TO CITY</h1>
          </div>
        </div>
        <div className="right-page">
          <div className="right-card">
            <Fcard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
