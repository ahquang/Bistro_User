import React, { useState } from "react";
import FormItem from "../FormItem";
import MyButton from "../MyButton";
import "../../styles/components/_contactform.scss";
const ContactForm = ({ onSubmit, disabled }) => {
  const [dataContact, setDataContact] = useState({
    name: "",
    address: "",
    subject: "",
    message: "",
  });
  const handleOnChange = (contactKey) => (e) => {
    const newValue = e.target.value;
    setDataContact({ ...dataContact, [contactKey]: newValue });
  };
  const handleClickSubmit = (e) => {
    e.preventDefault();
    onSubmit(dataContact);
  };
  return (
    <form className="contact__form" onSubmit={handleClickSubmit}>
      <div className="contact__form__info">
        <FormItem
          label={"Name"}
          handleOnChange={handleOnChange("name")}
          value={dataContact.name}
          placeholder={"Enter your name"}
        />
        <FormItem
          label={"Address"}
          handleOnChange={handleOnChange("address")}
          value={dataContact.address}
          placeholder={"Enter your address"}
        />
      </div>
      <FormItem
        label={"Subject"}
        handleOnChange={handleOnChange("subject")}
        value={dataContact.subject}
        placeholder={"Write a subject"}
      />
      <div className="contact__form__message">
        <label>Message</label>
        <textarea
          value={dataContact.message}
          onChange={handleOnChange("message")}
          placeholder="Write your message"
        ></textarea>
      </div>
      <MyButton disabled={disabled}>Send</MyButton>
    </form>
  );
};

export default ContactForm;
