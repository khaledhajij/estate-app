import React from "react";
import wallpaper from "../assets/wallpaper.jpg";

const Header = () => {
  return (
    <div className="header">
      <div className="my-container">
        <img className="wallpaper" src={wallpaper} alt="wallpaper" />
      </div>
    </div>
  );
};

export default Header;
