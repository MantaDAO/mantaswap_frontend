import React from 'react';
import classNames from 'classnames';

type ButtonProps = {
  variant?: 'primary' | 'shade' | 'neutral' | 'tertiary' | 'blue' | 'disabled' | 'red';
  size?: 'default' | 'sm' | 'xs' | 'xxs' | 'icon';
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
    'rounded shadow-button text-base text-header font-medium transition-all duration-400 flex items-center gap-2 justify-center backdrop-blur shrink-0',
    {
      'button-neutral': variant === 'neutral',
      'button-primary': variant === 'primary',
      'button-shade': variant === 'shade', // to do
      'button-tertiary': variant === 'tertiary', // to do
      'button-blue': variant === 'blue', // to do
      'button-red': variant === 'red', // to do
      'button-disabled cursor-not-allowed': variant === 'disabled', // to do
    },
    {
      'px-[16px] h-[40px]': size === 'default',
      'px-[14px] h-[36px] text-md': size === 'sm',
      'px-[9px] h-[32px] text-sm': size === 'xs',
      'px-[8px] h-[23px] text-sm': size === 'xxs',
      'w-[32px] h-[32px]': size === 'icon',
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
