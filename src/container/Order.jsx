import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import { handleLoadDataFromStorage } from "../utils/handleCartData";
import OrderItem from "../components/OrderItem";
import MyButton from "../components/MyButton";
import "../styles/pages/_order.scss";
import { getOrderListAPI } from "../services/orders";
import { CartContext } from "../context/CartContext";

const Order = () => {
  const ctx = useContext(CartContext);
  const navigate = useNavigate();
  const [selectedOrder, setSelectedOrder] = useState();
  const dataLocalStorage = handleLoadDataFromStorage("dataOrders");
  console.log(dataLocalStorage);
  const fetchData = async () => {
    const orderData = await getOrderListAPI();
    setSelectedOrder(orderData)
  };
  
  useEffect(() => {
    fetchData();
    ctx.onSubmit();
    window.scrollTo(0, 0);
  }, []);
  console.log(selectedOrder);
  const handleOnClick = () => {
    navigate("/home");
  };
  return (
    <Layout>
      <div className="order">
        <PageTitle title={"My Order"} />
        <div className="order__container">
        {dataLocalStorage &&
          dataLocalStorage.map((data, index) => (
            <div className="order__detail" key={index}>
              <div className="order__detail__info">
                <span>Table Number: {data.tableNumber}</span>
                {selectedOrder && <span>Status: {selectedOrder.map((item) => (item._id === data._id ? item.status : ""))} </span>}
              </div>
              <div className="order__detail__time"> 
                <span>Date: {data.date}</span>
                <span>Time: {data.time}</span>
              </div>
              <ul className="order__detail__list">
                {data.items.map((item) => (
                  <OrderItem
                    key={item.id}
                    {...item}
                    itemTotal={item.amount * item.price}
                    onAdd={() => data.onAddItem({ ...item, amount: 1 })}
                    onRemove={() => data.onRemoveItem(item.id)}
                  />
                ))}
              </ul>
              <div className="order__detail__total">
                <label>Final Total: </label>
                <label>{data.totalAmount.toFixed(2)} $</label>
              </div>
              <MyButton
                className={"order__detail__action"}
                handleOnClick={handleOnClick}
              >
                Go to Homepage
              </MyButton>
            </div>
          ))}
        </div>     
      </div>
    </Layout>
  );
};
export default Order;
