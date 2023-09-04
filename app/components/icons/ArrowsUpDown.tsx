import React, { FC } from 'react';

interface IconProps {
  fill?: string;
  className?: string;
}

const IconArrowsUpDown: FC<IconProps> = ({ fill = 'currentColor', className }) => {
  return (
    <svg
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 14"
    >
      <path
        d="M1.773 9.977a.563.563 0 0 0-.796.796l2.25 2.25a.563.563 0 0 0 .796 0l2.25-2.25a.562.562 0 1 0-.796-.796L3.625 11.83 1.773 9.977Z"
        fill={fill}
      />
      <path
        d="M3.063 1.375v11.25a.562.562 0 1 0 1.124 0V1.375a.563.563 0 0 0-1.125 0ZM12.227 4.023a.563.563 0 0 0 .796 0l.005-.005a.563.563 0 0 0 .16-.393v-.003c-.001-.148-.06-.29-.165-.395l-2.25-2.25a.562.562 0 0 0-.796 0l-2.25 2.25a.563.563 0 0 0 .796.796l1.852-1.853 1.852 1.853Z"
        fill={fill}
      />
      <path
        d="M10.938 12.625V1.375a.562.562 0 1 0-1.126 0v11.25a.562.562 0 1 0 1.126 0Z"
        fill={fill}
      />
    </svg>
  );
};

export default IconArrowsUpDown;
