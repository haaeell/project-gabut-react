import React, { useState } from 'react';

const SkillCard = ({skill}) => {
  const [isActive, setIsActive] = useState(false);

  const handleMouseEnter = () => {
    setIsActive(true);
  };

  const handleMouseLeave = () => {
    setIsActive(false);
  };

  const cardClassName = `relative rounded-lg p-2 lg:py-4 ${
    isActive ? 'bg-gradient-to-t from-blue-600 to-blue-300 transition duration-500' : ''
  }`;

  const imageClassName = `w-full h-full mx-auto mb-4 object-contain  ${
    isActive ? 'scale-110 transition duration-300' : ''
  }`;


    return (
        <div 
        className={cardClassName}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
        <img
            src={skill.image}
            alt={skill.title}
            className={imageClassName}
        />
    </div>
    );
};

export default SkillCard;