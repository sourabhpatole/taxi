import React from "react";
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
            <button>MORE INFORMATION</button>
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
