import React from 'react';

const Button = ({ text, onClick }) => {
  return (
    <button className="nav-btn text-uppercase" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
