import React, { useEffect } from "react";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import BookingForm from "../components/BookingForm";
import PageTitle from "../components/PageTitle";
import "../styles/pages/_booking.scss";
import { postTableAPI } from "../services/tables";

const Booking = () => {
  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (type) => {
    api[type]({
      message: "Booking Table Successful",
      description: "We'll contact you soon to confirm the booking information",
      duration: null,
      onClose() {
        navigate("/home");
      },
    });
  };

  const handleAddTable = async (newTable) => {
    await postTableAPI(newTable);
    openNotificationWithIcon("success");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <Layout>
      {contextHolder}
      <div className="booking">
        <PageTitle title={"Book A Table"} />
        <BookingForm onSubmit={handleAddTable} />
      </div>
    </Layout>
  );
};

export default Booking;
