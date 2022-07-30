import React from "react";
import "./navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Sidebar from "../sidebar/Sidebar";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="nav-left">
          <div className="side-menu">
            <ReorderIcon
              style={{ marginLeft: "36px", border: "2px solid black" }}
            />
          </div>
          <div className="logo">
            <img
              src="https://image.shutterstock.com/z/stock-vector-taxi-logo-concept-on-light-background-taxi-point-graphic-icon-682377904.jpg"
              alt="BlipLogo"
            />
          </div>
        </div>
        <div className="nav-right">
          <button
            className="login-btn"
            style={{ cursor: "pointer", backgroundColor: "inherit" }}
          >
            <PersonOutlineIcon />
            Login/SignUp
          </button>
          <div className="signup-btn">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/800px-Flag_of_the_United_States.svg.png?20151118161041"
              alt=""
            />
            <button className="languageBtn">
              ENG/SPA
              <ArrowDropDownIcon />
            </button>
          </div>
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default Navbar;
