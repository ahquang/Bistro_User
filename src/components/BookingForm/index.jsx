import React, { useState } from "react";
import FormItem from "../FormItem";
import MyButton from "../MyButton";
import "../../styles/components/_bookingform.scss";
const BookingForm = ({ onSubmit, disabled }) => {
  const [dataTable, setDataTable] = useState({
    name: "",
    date: "",
    time: "",
    phone: "",
    totalPerson: "",
  });

  const handleOnChange = (tableKey) => (e) => {
    const newValue = e.target.value;
    setDataTable({ ...dataTable, [tableKey]: newValue });
  };

  const handleClickSubmit = (e) => {
    e.preventDefault();
    onSubmit(dataTable);
  };
  return (
    <form className="booking__form" onSubmit={handleClickSubmit}>
      <div className="booking__form__info">
        <FormItem
          label={"Date"}
          type="date"
          handleOnChange={handleOnChange("date")}
          value={dataTable.date}
        />
        <FormItem
          label={"Time"}
          type="time"
          handleOnChange={handleOnChange("time")}
          value={dataTable.time}
        />
      </div>
      <div className="booking__form__info">
        <FormItem
          label={"Name"}
          handleOnChange={handleOnChange("name")}
          value={dataTable.name}
          placeholder={'Enter your name'}
        />
        <FormItem
          label={"Phone"}
          type="number"
          handleOnChange={handleOnChange("phone")}
          value={dataTable.phone}
          placeholder={'Enter your phone number'}
        />
      </div>
      <FormItem
        label={"Total Person"}
        type="number"
        minNumber={0}
        maxNumber={10}
        handleOnChange={handleOnChange("totalPerson")}
        value={dataTable.totalPerson}
      />
      <MyButton disabled={disabled}>Book A Table</MyButton>
    </form>
  );
};

export default BookingForm;
