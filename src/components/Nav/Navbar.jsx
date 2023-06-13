import React from "react";
import logo from "../../images/Err-logo.png";
import SearchIcon from "../../svg/SearchIcon";
import ProfileIcon from "../../svg/ProfileIcon";
import Button from "../common/Button";

const Navbar = () => {
  return (
    <nav className="h-9 bg-black flex justify-between pr-3">
      <div className="bg-white">
        <img src={logo} alt="my logo" className="h-11 border-black" />
      </div>
      <div className="flex gap-4">
        <Button svg={<SearchIcon />} />
        <Button svg={<ProfileIcon />} />
      </div>
    </nav>
  );
};

export default Navbar;
