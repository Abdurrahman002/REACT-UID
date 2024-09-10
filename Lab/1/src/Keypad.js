import React from 'react';

const Keypad = ({ onClick }) => {
  const buttons = [
    'C', '/', '*', '←',
    '7', '8', '9', '-',
    '4', '5', '6', '+',
    '1', '2', '3', '=',
    '0', '.', 
  ];

  return (
    <div className="keypad">
      {buttons.map((button, index) => (
        <button key={index} onClick={() => onClick(button)}>
          {button}
        </button>
      ))}
    </div>
  );
};

export default Keypad;
