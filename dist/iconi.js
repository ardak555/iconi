// Icon.js
import React from "react";
import { HomeIcon, HomeIcon2, HomeIcon3 } from "./Icons/HomeIcons";
import "./style.css";
const Iconi = ({
  name
}) => {
  const icons = {
    home: /*#__PURE__*/React.createElement(HomeIcon, null),
    home2: /*#__PURE__*/React.createElement(HomeIcon2, null),
    home3: /*#__PURE__*/React.createElement(HomeIcon3, null)
  };
  return icons[name] || "no icon exist";
};
export default Iconi;