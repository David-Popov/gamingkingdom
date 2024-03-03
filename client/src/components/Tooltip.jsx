import React, { useState } from 'react';

export const Tooltip = ({ children, content }) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  return (
    <div className="relative flex justify-center items-center">
      <div 
        onMouseEnter={() => setIsTooltipVisible(true)} 
        onMouseLeave={() => setIsTooltipVisible(false)}
        className="cursor-pointer"
      >
        {children}
      </div>
      {isTooltipVisible && (
        <div className="absolute bottom-full mb-2 p-3 bg-gray-900 text-dimWhite text-sm shadow-lg z-10 min-w-[300px]">
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip