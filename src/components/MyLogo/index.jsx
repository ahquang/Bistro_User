import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import "../../styles/components/_mylogo.scss"

const MyLogo = () => {
  return (
    <Link to={"/home"}>
    <div className="logo">
      <img src={logo} alt="logo" />
      <span>Bistro Bliss</span>
    </div>
    </Link>
    
  );
};

export default MyLogo;
