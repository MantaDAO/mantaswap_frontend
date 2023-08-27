import React, { FC } from 'react';

interface IconProps {
  fill?: string;
  className?: string;
}

const Chevron: FC<IconProps> = ({ fill = 'currentColor', className }) => {
  return (
    <svg
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 8"
    >
      <path
        d="M1.773.852a.563.563 0 0 0-.796.796l5.625 5.625c.22.22.576.22.796 0l5.625-5.625a.563.563 0 1 0-.796-.796L7 6.08 1.773.852Z"
        fill={fill}
      />
    </svg>
  );
};

export default Chevron;
