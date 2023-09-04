import React, { ReactNode } from 'react';
import BaseCard from '../cards/Base';

interface InputWrapProps {
  children: ReactNode;
  className?: string;
}

const InputWrap: React.FC<InputWrapProps> = ({ children, className }) => {
  return (
    <BaseCard
      type={5}
      className={`flex items-center gap-2 px-4 h-[47px] ${className}`}
    >
      {children}
    </BaseCard>
  );
};

export default InputWrap;
