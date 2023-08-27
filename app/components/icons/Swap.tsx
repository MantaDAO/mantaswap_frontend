import React, { FC } from 'react';

interface IconProps {
  fill?: string;
  className?: string;
}

const IconSwap: FC<IconProps> = ({ fill = 'currentColor', className }) => {
  return (
    <svg
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 14"
    >
      <path
        d="M9.977 12.227a.563.563 0 0 0 .796.796l2.25-2.25a.562.562 0 0 0 0-.796l-2.25-2.25a.562.562 0 1 0-.796.796l1.852 1.852-1.852 1.852Z"
        fill={fill}
      />
      <path
        d="M1.375 10.938h11.25a.562.562 0 1 0 0-1.126H1.375a.562.562 0 1 0 0 1.126Z"
        fill={fill}
      />
      <path
        d="M4.023 1.773a.563.563 0 0 0 0-.796L4.018.972a.564.564 0 0 0-.393-.16h-.003c-.148.001-.29.06-.395.165l-2.25 2.25a.563.563 0 0 0 0 .796l2.25 2.25a.563.563 0 0 0 .796-.796L2.17 3.625l1.852-1.852Z"
        fill={fill}
      />
      <path
        d="M12.625 3.063H1.375a.563.563 0 0 0 0 1.124h11.25a.562.562 0 1 0 0-1.125Z"
        fill={fill}
      />
    </svg>
  );
};

export default IconSwap;
