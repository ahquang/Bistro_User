import React, { useContext, useEffect, useRef } from "react";
import { CartContext } from "../../context/CartContext";
import "../../styles/components/_headercart.scss"

const HeaderCart = () => {
  const ctx = useContext(CartContext);
  const buttonRef = useRef();
  const { itemCount } = ctx;
  useEffect(() => {
    let interval;
    buttonRef.current.classList.remove("bump");
    if (itemCount !== 0) {
      interval = setTimeout(() => {
        buttonRef.current.classList.add("bump");
      }, 10);
    }

    return () => {
      if (interval) clearTimeout(interval);
    };
  }, [itemCount]);
  console.log('itemCount', itemCount)
  return (
    <button ref={buttonRef} className="header__cart bump" onClick={ctx.onOpen}>
      <i class="bi bi-cart"></i>
      <span className="header__cart__badge">{itemCount}</span>
    </button>
  );
};

export default HeaderCart;
