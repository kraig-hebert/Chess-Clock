import React from 'react';
import './button.css';

const Button = ({ props }) => {
  return <div className="button">{props.icon}</div>;
};

export default Button;
