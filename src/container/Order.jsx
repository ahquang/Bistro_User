import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import { handleLoadDataFromStorage } from "../utils/handleCartData";
import OrderItem from "../components/OrderItem";
import MyButton from "../components/MyButton";
import "../styles/pages/_order.scss";
import { getOrderDetailAPI } from "../services/orders";


const Order = () => {
  const navigate = useNavigate();
  const [selectedOrder, setSelectedOrder] = useState([]);
  const dataLocalStorage = handleLoadDataFromStorage("dataOrder");

  useEffect(() => {
    const fetchData = async () => {
      const orderData = await getOrderDetailAPI(dataLocalStorage._id);
      setSelectedOrder(orderData);
    };
    fetchData();
  }, []);
  const handleOnClick = () => {
    // localStorage.removeItem("dataOrder");
    // if (!localStorage.getItem("dataOrder")) {
    //   navigate("/home");
    // } 
    navigate("/home")
  };
  return (
    <Layout>
      <div className="order">
        <PageTitle title={"My Order"} />
        <div className="order__detail">
          <div className="order__detail__info">
            <span>Table Number: {dataLocalStorage.tableNumber}</span>
            <span>Status: {selectedOrder.status}</span>
          </div>
          <ul className="order__detail__list">
            {dataLocalStorage.items.map((item) => (
              <OrderItem
                key={item.id}
                {...item}
                itemTotal={item.amount * item.price}
                onAdd={() => dataLocalStorage.onAddItem({ ...item, amount: 1 })}
                onRemove={() => dataLocalStorage.onRemoveItem(item.id)}
              />
            ))}
          </ul>
          <div className="order__detail__total">
            <label>Final Total: </label>
            <label>{dataLocalStorage.totalAmount.toFixed(2)} $</label>
          </div>
          <MyButton
            className={"order__detail__action"}
            handleOnClick={handleOnClick}
          >
            Go to Homepage
          </MyButton>
        </div>
      </div>
    </Layout>
  );
};
export default Order;
