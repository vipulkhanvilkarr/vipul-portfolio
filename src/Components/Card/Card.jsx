import React from 'react';
import './card.css';

const Card = ({ gradient, title, description, icon, customClass }) => {
  return (
    <div className={`relative w-full max-w-md p-6 rounded-xl ${gradient} ${customClass} shadow-lg bg-white/20 backdrop-blur-sm preserve-3d`}>
      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-between backface-hidden">
        {/* Floating Icon */}
        <div className="relative mb-4">
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
            {icon}
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center">
          <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200">{title}</h3>
          <p className="text-white/80 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
