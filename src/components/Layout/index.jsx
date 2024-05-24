import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Cart from "../../container/Cart";
import "../../styles/components/_layout.scss";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Cart />
      <Header />
      <div className="container">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
