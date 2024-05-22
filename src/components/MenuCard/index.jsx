import React , {useContext} from "react";
import MyButton from "../MyButton";
import "../../styles/components/_menucard.scss";
import { CartContext } from "../../context/CartContext";


const MenuCard = ({ id, src, price, name, ingredients }) => {
  const ctx = useContext(CartContext);
  const addToCartHandler = (amount) => {
    amount = 1;
    ctx.onAddItem({ name, id, amount, price });
  };
  return (
    <div className="menu-card" key={id}>
      <img src={src} alt="" />
      <div className="menu-card__detail">
        <div className="menu-card__detail__price">$ {price}</div>
        <div className="menu-card__detail__name">{name}</div>
        <div className="menu-card__detail__ingredients">
          Made with {ingredients} and other ingredients
        </div>
        <MyButton handleOnClick={addToCartHandler}>Add To Cart</MyButton>
      </div>
    </div>
  );
};

export default MenuCard;
