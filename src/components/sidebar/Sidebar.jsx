import React, { useState } from "react";
import "./sidebar.css";
import ReorderIcon from "@mui/icons-material/Reorder";
import FaceIcon from "@mui/icons-material/Face";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import TripOriginIcon from "@mui/icons-material/TripOrigin";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import ShareIcon from "@mui/icons-material/Share";
const Sidebar = () => {
  const [display, setDisplay] = useState(false);
  const data = [
    {
      name: "",
      icon: <ReorderIcon />,
    },
    {
      name: "Login",
      icon: <FaceIcon />,
    },
    {
      name: "History",
      icon: <TripOriginIcon />,
    },
    {
      name: "EWallet",
      icon: <AccountBalanceWalletIcon />,
    },
    {
      name: "Notification",
      icon: <NotificationsIcon />,
    },
    {
      name: "Help",
      icon: <HelpOutlineIcon />,
    },
    {
      name: "Promotion",
      icon: <FavoriteBorderIcon />,
    },
    {
      name: "Blip Driver",
      icon: <LocalTaxiIcon />,
    },
    {
      name: "Share",
      icon: <ShareIcon />,
    },
  ];
  return (
    <div
      className="sidebar"
      onClick={() => {
        setDisplay(!display);
      }}
      style={{ width: display ? "150px" : "5vh" }}
    >
      {data.map((d) => (
        <div className="side-menu" key={d.name}>
          <li>{d.icon}</li>
          <div className="menu-name">
            <h2>{display && d.name}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
