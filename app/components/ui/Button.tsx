import React from 'react';
import classNames from 'classnames';

type ButtonProps = {
  variant?: 'primary' | 'shade' | 'neutral' | 'green' | 'blue' | 'disabled' | 'red';
  size?: 'default' | 'sm' | 'xs' | 'xxs';
  onClick?: () => void;
  children: React.ReactNode;
  className?: string; // Add className prop
};

const Button: React.FC<ButtonProps> = ({
  variant = 'neutral',
  size = 'default',
  onClick,
  children,
  className, // Add className prop
}) => {
  const buttonClasses = classNames(
    'rounded shadow-button text-base text-header font-medium transition-all duration-400 flex items-center gap-2 justify-center',
    {
      'button-neutral': variant === 'neutral',
      'button-primary': variant === 'primary',
      'text-white bg-gray-500': variant === 'shade', // to do
      'text-white bg-green-500': variant === 'green', // to do
      'text-white bg-blue-500': variant === 'blue', // to do
      'text-white bg-red-500': variant === 'red', // to do
      'bg-gray-400 cursor-not-allowed': variant === 'disabled', // to do
    },
    {
      'px-[16px] h-[40px]': size === 'default',
      'px-[14px] h-[36px] text-md': size === 'sm',
      'px-[9px] h-[32px] text-sm': size === 'xs',
      'px-[8px] h-[23px] text-sm': size === 'xxs',
    },
    className, // Use the className prop here
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
