import React, { useEffect, useState } from "react";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import ContactForm from "../components/ContactForm";
import { postContactAPI } from "../services/contact";
import "../styles/pages/_contact.scss"

const Contact = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: "Send contact & message successful",
      description: "We greatly appriciate for your contributions to our system",
      duration: 1,
      onClose() {
        navigate("/home");
      },
    });
  };
  const handleAddContact = async (newContact) => {
    setLoading(true)
    await postContactAPI(newContact);
    openNotificationWithIcon("success");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  },[])

  return (
    <Layout>
      {contextHolder}
      <div className="contact">
        <PageTitle title={"Contact Us"} />
        <ContactForm onSubmit={handleAddContact} disabled={loading}/>
      </div>
      <div className="info">
        <div className="info__item">
          <span className="info__item__title">Call us:</span>
          <span className="info__item__phone">+1-234-567-8900</span>
        </div>
        <div className="info__item">
          <span className="info__item__title">Hours:</span>
          <span className="info__item__content">Mon-Fri: 11am - 8pm</span>
          <span className="info__item__content">Sat, Sun: 9am - 10pm</span>
        </div>
        <div className="info__item">
          <span className="info__item__title">Location:</span>
          <span className="info__item__content">123 Bridge Street</span>
          <span className="info__item__content">Nowhere Land, LA 12345 </span>
          <span className="info__item__content">United States</span>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
