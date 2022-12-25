import React from "react";
import "./Button.css";
const Button = ({ back, forward, text, type }) => {
  const prev = () => {
    back();
  };
  const next = () => {
    forward();
  };
  return (
    <div className='button'>
      <button onClick={prev} type="button" className='prev'>
        Go back
      </button>
      <button onClick={next} type={type} className='next'>
        {text || "Next step"}
      </button>
    </div>
  );
};

export default Button;
