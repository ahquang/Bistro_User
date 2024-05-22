import React from "react";
import "../../styles/components/_footer.scss";
import SocialGroup from "../SocialGroup";
import MyLogo from "../MyLogo";
import cheeseImg from "../../assets/footerImages/cheese.png"
import friesImg from "../../assets/footerImages/fries.png"
import saladImg from "../../assets/footerImages/salad.png"
import cakeImg from "../../assets/footerImages/cake.png"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__contact">
        <div className="footer__contact__info">
          <MyLogo/>
          <span className="footer__contact__info__title">
            In the new era of technology we look a in the future with certainty
            and pride to for our company and.
          </span>
          <SocialGroup/>
        </div>
        <div className="footer__contact__image">
          <span>Follow us on Instagram</span>
          <div className="footer__contact__image__container">
            <img src={cheeseImg} alt="" />  
            <img src={friesImg} alt="" />
            <img src={saladImg} alt="" />
            <img src={cakeImg} alt="" />
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        Copyright © 2023 Hashtag Developer. All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
