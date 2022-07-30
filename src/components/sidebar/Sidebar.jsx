import React from "react";
import "./sidebar.css";
import FaceIcon from "@mui/icons-material/Face";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import TripOriginIcon from "@mui/icons-material/TripOrigin";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import ShareIcon from "@mui/icons-material/Share";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <li>
        <FaceIcon className="icon" />
        <h2>Login</h2>
      </li>
      <li>
        <TripOriginIcon className="icon" />
        <h2>History</h2>
      </li>
      <li>
        <AccountBalanceWalletIcon className="icon" />
        <h2>EWallet</h2>
      </li>
      <li>
        <NotificationsIcon className="icon" />
        <h2>Notification</h2>
      </li>
      <li>
        <HelpOutlineIcon className="icon" />
        <h2>Help</h2>
      </li>
      <li>
        <FavoriteBorderIcon className="icon" />
        <h2>Promotion</h2>
      </li>
      <li>
        <LocalTaxiIcon className="icon" />
        <h2>Blip Driver</h2>
      </li>
      <li>
        <ShareIcon className="icon" />
        <h2>Share Blip</h2>
      </li>
    </div>
  );
};

export default Sidebar;
