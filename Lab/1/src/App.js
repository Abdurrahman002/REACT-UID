import React, { useState } from 'react';
import Display from './Display';
import Keypad from './Keypad';
import './App.css';

const App = () => {
  const [input, setInput] = useState('0');
  const [operator, setOperator] = useState(null);
  const [previousValue, setPreviousValue] = useState(null);
  const [isOperatorClicked, setIsOperatorClicked] = useState(false);

  const handleClick = (value) => {
    if (value === 'C') {
      clearInput();
    } else if (['+', '-', '*', '/'].includes(value)) {
      handleOperator(value);
    } else if (value === '=') {
      handleEquals();
    } else if (value === '.') {
      handleDecimal();
    } else {
      handleNumber(value);
    }
  };

  const handleNumber = (value) => {
    if (isOperatorClicked) {
      setInput(value);
      setIsOperatorClicked(false);
    } else {
      setInput(input === '0' ? value : input + value);
    }
  };

  const handleOperator = (value) => {
    if (operator) {
      handleEquals();
    }
    setOperator(value);
    setPreviousValue(input);
    setIsOperatorClicked(true);
  };

  const handleEquals = () => {
    if (operator && previousValue) {
      const current = parseFloat(input);
      const previous = parseFloat(previousValue);

      let result;
      switch (operator) {
        case '+':
          result = previous + current;
          break;
        case '-':
          result = previous - current;
          break;
        case '*':
          result = previous * current;
          break;
        case '/':
          result = previous / current;
          break;
        default:
          return;
      }
      setInput(String(result));
      setOperator(null);
      setPreviousValue(null);
      setIsOperatorClicked(false);
    }
  };

  const handleDecimal = () => {
    if (!input.includes('.')) {
      setInput(input + '.');
    }
  };

  const clearInput = () => {
    setInput('0');
    setOperator(null);
    setPreviousValue(null);
    setIsOperatorClicked(false);
  };

  return (
    <div className="calculator">
      <Display input={input} />
      <Keypad onClick={handleClick} />
    </div>
  );
};

export default App;
