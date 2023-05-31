import React from 'react';
import Button from '../atoms/Button';

const Card = ({ image, title, description }) => {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white lg:py-10 mx-4">
        <img className="w-full" src={image} alt={title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-center">{title}</div>
          <p className="text-gray-700 text-base mb-5">{description}</p>
          <div className="text-center">
          <Button text="Selengkapnyaa"/>
              </div>
        </div>
      </div>
    );
  };

export default Card;
