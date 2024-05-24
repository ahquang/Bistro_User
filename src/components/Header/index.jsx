import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import React, { useState, useContext } from "react";
import "../../styles/components/_header.scss";
import MyButton from "../MyButton";
import SocialGroup from "../SocialGroup";
import MyLogo from "../MyLogo";
import HeaderCart from "../HeaderCart";

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(() => {
    const initIndex = window.location.pathname.includes("home")
      ? 0
      : window.location.pathname.includes("menu")
      ? 1
      : window.location.pathname.includes("contact")
      ? 2
      : window.location.pathname.includes("about")
      ? 3
      : window.location.pathname.includes("order")
      ? 4
      : 0;
    return initIndex;
  });
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  return (
    <div className="header">
      <div className="header__topbar">
        <ul className="header__topbar__contact">
          <li className="header__topbar__contact__info">
            <i class="bi bi-telephone"></i>
            <span>(414) 857 - 0107</span>
          </li>
          <li className="header__topbar__contact__info">
            <i class="bi bi-envelope"></i>
            <span>yummy@bistrobliss</span>
          </li>
        </ul>
        <SocialGroup />
      </div>
      <div className="header__navbar">
        <MyLogo />
        <div className="header__navbar__toggle">
        <i class="bi bi-list" onClick={toggleMenu}></i>
        </div>
        <div className="header__navbar__menu">
          <ul className={menuVisible ? "visible" : ""}>
            <Link to={"/home"}>
              <li className={activeIndex === 0 ? "active" : ""}>Home</li>
            </Link>
            <Link to={"/about"}>
              <li className={activeIndex === 3 ? "active" : ""}>About</li>
            </Link>
            <Link to={"/menu?type=All"}>
              <li className={activeIndex === 1 ? "active" : ""}>Menu</li>
            </Link>
            <Link to={"/order"}>
              <li className={activeIndex === 4 ? "active" : ""}>Orders</li>
            </Link>
            <Link to={"/contact"}>
              <li className={activeIndex === 2 ? "active" : ""}>Contact</li>
            </Link>
          </ul>
          
        </div>
        <div className="header__navbar__groupbtn">
         <HeaderCart/>
          <Link to={"/home/booking"}>
            <MyButton>Book A Table</MyButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
