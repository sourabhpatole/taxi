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
  const data = [
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
    <div className="sidebar">
      {data.map((d) => (
        <li>{d.icon}</li>
      ))}
    </div>
  );
};

export default Sidebar;
