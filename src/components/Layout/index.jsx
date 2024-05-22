import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Cart from "../../container/Cart";
import "../../styles/components/_layout.scss";
import { CartProvider } from "../../context/CartContext";

const Layout = ({ children }) => {
  return (
    <CartProvider>
      <div className="layout">
        <Cart/>
        <Header />
        <div className="container">{children}</div>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default Layout;
