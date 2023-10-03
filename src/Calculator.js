import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [expression, setExpression] = useState("");

  const handleClick = (value) => {
    setExpression(expression + value);
  };

  const calculate = () => {
    try {
      setExpression(eval(expression).toString());
    } catch (error) {
      setExpression("Error");
    }
  };

  const clear = () => {
    setExpression("");
  };

  return (
    <div className="calculator">
      <div className="display">{expression}</div>
      <div className="buttons">
        {/* Add your calculator buttons here */}
      </div>
    </div>
  );
};

export default Calculator;