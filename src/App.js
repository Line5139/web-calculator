import React, { useState } from "react";
import "./App.css";
import CalculatorButton from "./components/CalculatorButton";
import CalculatorDisplay from "./components/CalculatorDisplay";

const App = () => {
  const [input, setInput] = useState("");

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const clearInput = () => {
    setInput("");
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="App">
      <div className="calculator">
        <CalculatorDisplay value={input} />
        <div className="buttons">
          {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0, ".", "%"].map((num) => (
            <CalculatorButton key={num} label={num} onClick={handleButtonClick} />
          ))}
          <CalculatorButton label="+" onClick={handleButtonClick} type="operation" />
          <CalculatorButton label="-" onClick={handleButtonClick} type="operation" />
          <CalculatorButton label="*" onClick={handleButtonClick} type="operation" />
          <CalculatorButton label="/" onClick={handleButtonClick} type="operation" />
          <CalculatorButton label="=" onClick={calculateResult} type="operation" />
          <CalculatorButton label="C" onClick={clearInput} type="operation" />
        </div>
      </div>
    </div>
  );
};

export default App;
