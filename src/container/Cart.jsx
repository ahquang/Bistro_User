import React, { useContext, useEffect, useState } from "react";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";
import Modal from "../components/Modal";
import MyButton from "../components/MyButton";
import FormItem from "../components/FormItem";
import { CartContext } from "../context/CartContext";
import { postOrderAPI } from "../services/orders";
import "../styles/pages/_cart.scss";

const Cart = () => {
  const ctx = useContext(CartContext);
  const navigate = useNavigate();
  // const [disableOrder, setDisableOrder] = useState(true)
  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (type) => {
    api[type]({
      message: "Order Successful",
      description:
        "Thanks for your order. Please wait a moment for our preparations",
      duration: 1,
      onClose() {
        navigate("/menu/order");
      },
    });
  };

  // useEffect(() => {
  //   ctx.items.length === 0 ? setDisableOrder(true) : setDisableOrder(false)
  // },[ctx.items.length])

  const [tableNumber, setTableNumber] = useState("");
  const handleOnChangeTableNumber = (e) => {
    setTableNumber(e.target.value);
  };

  const currentDate = new Date();
  const dataOrder = {
    ...ctx,
    tableNumber: tableNumber,
    date: currentDate.toLocaleDateString(),
    time: currentDate.toLocaleTimeString(),
    status: "Preparing"
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    await postOrderAPI(dataOrder);
    localStorage.removeItem("listsData");
    if (!localStorage.getItem("listsData")) {
      openNotificationWithIcon("success");
    }
  };
  return (
    <Modal show={ctx.isOpen} onClose={ctx.onCloseCart}>
      {contextHolder}
      <form onSubmit={handleOnSubmit}>
        <h2 className="cart__title">Order Cart</h2>
        <div className="cart__table">
          <FormItem
            label={"Table Number"}
            placeholder={"Enter your table number"}
            type="number"
            minNumber={1}
            maxNumber={20}
            handleOnChange={handleOnChangeTableNumber}
            value={ctx.tableNumber}
            require
          />
        </div>
        <ul className="cart__list">
          {ctx.items.map((item) => (
            <CartItem
              key={item.id}
              {...item}
              itemTotal={item.amount * item.price}
              onAdd={() => ctx.onAddItem({ ...item, amount: 1 })}
              onRemove={() => ctx.onRemoveItem(item.id)}
            />
          ))}
        </ul>
        <div className="cart">
          <div className="cart__total">
            <label>Final Total: </label>
            <label>{ctx.totalAmount.toFixed(2)} $</label>
          </div>
          <div className="cart__actions">
            <MyButton
              className="cart__actions__close"
              handleOnClick={ctx.onClose}
            >
              Close
            </MyButton>
            <MyButton
              className="cart__actions__order"
              disabled={ctx.items.length === 0 ? true : false}
              type="submit"
            >
              Order
            </MyButton>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default Cart;
