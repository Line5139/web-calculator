import React from "react";
import "./CalculatorButton.css";

const CalculatorButton = ({ onClick, label, type }) => {
  return (
    <button className={`button ${type}`} onClick={() => onClick(label)}>
      {label}
    </button>
  );
};

export default CalculatorButton;
