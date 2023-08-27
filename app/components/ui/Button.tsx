import React from 'react';
import classNames from 'classnames';

type ButtonProps = {
  variant?: 'primary' | 'shade' | 'neutral' | 'green' | 'blue' | 'disabled' | 'red';
  size?: 'default' | 'small';
  onClick?: () => void;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  variant = 'neutral',
  size = 'default',
  onClick,
  children,
}) => {
  const buttonClasses = classNames(
    'rounded shadow-button px-[16px] h-[40px] text-base text-header font-medium transition-all duration-400',
    {
      'button-neutral': variant === 'neutral',
      'button-primary': variant === 'primary',
      'text-white bg-gray-500': variant === 'shade',
      'text-white bg-green-500': variant === 'green',
      'text-white bg-blue-500': variant === 'blue',
      'text-white bg-red-500': variant === 'red',
      'bg-gray-400 cursor-not-allowed': variant === 'disabled',
    },
    {
      'text-md': size === 'small',
    },
  );

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
