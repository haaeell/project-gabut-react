import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ text, to }) => {
  return (
    <Link to={to}>
      <button
        className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
      >
        {text}
      </button>
    </Link>
  );
};

export default Button;

