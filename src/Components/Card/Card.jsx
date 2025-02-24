import React from 'react';
import './card.css';

const Card = ({ gradient, title, description, icon }) => {
  return (
    <div className={`relative w-full max-w-md p-6 rounded-xl ${gradient} shadow-lg`}>
      {/* Animated Shine Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-full transition-transform duration-1000 animate-shine" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-between">
        {/* Floating Icon */}
        <div className="relative mb-4">
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm transform transition-all duration-500 group-hover:scale-110 hover:rotate-180">
            {icon}
          </div>
          {/* Pulse Effect */}
          <div className="absolute inset-0 rounded-full animate-ping bg-white/20 opacity-75" />
        </div>

        {/* Text Content with Floating Animation */}
        <div className="text-center transform transition-transform duration-300 hover:translate-y-[-4px]">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-white/80 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;