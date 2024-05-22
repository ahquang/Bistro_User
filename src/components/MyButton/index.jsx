import React from "react";
import "../../styles/components/_mybutton.scss";
const MyButton = ({
  children,
  className,
  handleOnClick,
  type = "submit",
  value,
  disabled,
}) => {
  return (
    <button
      className={className}
      onClick={handleOnClick}
      type={type}
      value={value}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default MyButton;
