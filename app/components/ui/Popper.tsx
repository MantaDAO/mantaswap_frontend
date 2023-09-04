'use client';

import React, { useState, useRef, useEffect } from 'react';

interface PopperProps {
  content: string;
  children: React.ReactNode;
  positionY?: 'top' | 'bottom';
  positionX?: 'left' | 'right' | 'center';
}

const Popper: React.FC<PopperProps> = ({
  content,
  children,
  positionY = 'top',
  positionX = 'center',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered(false)}
      style={{ position: 'relative', display: 'inline-block' }}
      className="w-auto"
    >
      {children}
      <div
        style={{
          display: isHovered ? 'block' : 'none',
          position: 'absolute',
          zIndex: 9999,
        }}
        className={`rounded bg-white text-surface-bg text-sm px-3 py-1 font-medium
        ${positionY === 'top' ? 'bottom-full -translate-y-[10px]' : 'top-full translate-y-[10px]'}
        ${positionX === 'left' && 'left-0'}
        ${positionX === 'right' && 'right-0'}
        ${positionX === 'center' && 'left-1/2 -translate-x-1/2'}
        `}
      >
        <div style={{ whiteSpace: 'nowrap' }}>{content}</div>
        <div
          className={`w-[8px] h-[8px] rounded-[2px] rotate-45 bg-white absolute
        ${positionX === 'left' && 'left-3'}
        ${positionX === 'right' && 'right-3'}
        ${positionX === 'center' && 'left-1/2 -translate-x-1/2'}

        ${positionY === 'top' ? 'bottom-[1px] translate-y-1/2' : 'top-[1px] -translate-y-1/2'}
        `}
        ></div>
      </div>
    </div>
  );
};

export default Popper;
