import React from "react";
import { Link } from "react-router-dom";
import "../../styles/components/_menuitem.scss"

const MenuItem = ({src, title, type}) => {
  return (
    <div className="menu-item">
      <img src={src} alt="" />
      <span className="title">{title}</span>
      <span className="content">
        In the new era of technology we look in the future with certainty and
        pride for our life.
      </span>
      <Link to={`/menu?type=${title}`} className="explore">Explore Menu </Link>
    </div>
  );
};

export default MenuItem;
