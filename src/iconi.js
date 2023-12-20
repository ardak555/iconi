// Icon.js
import React from "react";
import { HomeIcon, HomeIcon2, HomeIcon3 } from "./Icons/HomeIcons";
import "./style.css";

const Iconi = ({ name}) => {
  
  const icons = {
    home: <HomeIcon />,
    home2: <HomeIcon2/>,
    home3: <HomeIcon3/>,
  };

  return icons[name] || "no icon exist";
};

export default Iconi;
