import React from "react";
import Second from "../second/Second";
import Fcard from "./card/Fcard";
import "./first.css";
const First = () => {
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
          <Fcard />
        </div>
      </div>
      <Second />
    </div>
  );
};

export default First;
