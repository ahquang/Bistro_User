import React from "react";
import "../../styles/components/_formitem.scss";
const FormItem = ({
  label,
  type = "text",
  handleOnChange,
  require = true,
  value,
  placeholder,
  minNumber,
  maxNumber,
  className
}) => {
  return (
    <div className={`form__item ${className}`} >
      <label>{label}</label>
      <input
        type={type}
        onChange={handleOnChange}
        value={value}
        required={require}
        placeholder={placeholder}
        min={minNumber}
        max={maxNumber}
        
      />
    </div>
  );
};

export default FormItem;
