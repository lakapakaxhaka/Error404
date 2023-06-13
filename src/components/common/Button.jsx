import React from "react";

const Button = ({ svg, onClick, className }) => {
  return (
    <button
      className={`rounded-full h-9 w-9 flex items-center justify-center hover:bg-gray-800 ${className}`}
      onClick={onClick}
    >
      {svg}
    </button>
  );
};

export default Button;
