import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ text, to }) => {
  return (
    <Link to={to}>
      <button
        className="rounded-full bg-blue-500 shadow-lg shadow-blue-500/50 hover:opacity-75 hover:via-pink-600 hover:to-red-600 text-white font-bold py-2 px-6 shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
      >
        {text}
      </button>
    </Link>
  );
};

export default Button;

