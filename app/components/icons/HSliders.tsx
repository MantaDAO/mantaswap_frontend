import React, { FC } from 'react';

interface IconProps {
  fill?: string;
  className?: string;
}

const HSliders: FC<IconProps> = ({ fill = 'currentColor', className }) => {
  return (
    <svg
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 12"
    >
      <path
        d="M7.813 8.531h-6.75a.563.563 0 0 0 0 1.125h6.75a.563.563 0 0 0 0-1.125ZM13.438 8.531h-3.376a.563.563 0 0 0 0 1.125h3.376a.562.562 0 1 0 0-1.125ZM3.313 2.344h-2.25a.563.563 0 0 0 0 1.125h2.25a.563.563 0 0 0 0-1.125ZM13.438 2.344H5.561a.563.563 0 0 0 0 1.125h7.875a.562.562 0 1 0 0-1.125Z"
        fill={fill}
      />
      <path
        d="M5 1.219v3.375a.563.563 0 0 0 1.125 0V1.219a.563.563 0 0 0-1.125 0ZM10.625 10.781V7.406a.562.562 0 1 0-1.125 0v3.375a.563.563 0 1 0 1.125 0Z"
        fill={fill}
      />
    </svg>
  );
};

export default HSliders;
