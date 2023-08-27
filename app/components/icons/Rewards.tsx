import React, { FC } from 'react';

interface IconProps {
  fill?: string;
  className?: string;
}

const IconRewards: FC<IconProps> = ({ fill = 'currentColor', className }) => {
  return (
    <svg className={className} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15"><path fillRule="evenodd" clipRule="evenodd" d="M.688 5.188s0-.466.329-.796c0 0 .33-.33.796-.33h12.374s.466 0 .796.33c0 0 .33.33.33.796v2.25s0 .466-.33.795c0 0-.33.33-.796.33H1.813s-.466 0-.796-.33c0 0-.33-.33-.33-.795v-2.25Zm1.125 0v2.25h12.374v-2.25H1.813Z" fill={fill} /><path d="M2.938 13.063V8a.563.563 0 0 0-1.126 0v5.063c0 .466.33.795.33.795.33.33.796.33.796.33h10.124c.466 0 .796-.33.796-.33.33-.33.33-.795.33-.795V8a.562.562 0 1 0-1.126 0v5.063H2.938Z" fill={fill} /><path d="M7.438 4.625v9a.562.562 0 1 0 1.125 0v-9a.563.563 0 0 0-1.126 0Z" fill={fill} /><path fillRule="evenodd" clipRule="evenodd" d="M9.371 5.083s1.577-.225 2.21-.853l.002-.002s.66-.66.66-1.593c0 0 0-.933-.66-1.593 0 0-.66-.66-1.593-.66 0 0-.933 0-1.593.66 0 0-.63.635-.855 2.212 0 0-.104.735-.104 1.371A.562.562 0 0 0 8 5.188s.636 0 1.371-.105Zm1.747-2.448s0 .467-.33.797c0 0-.369.365-1.575.537 0 0-.326.046-.627.07 0 0 .024-.301.07-.626 0 0 .173-1.208.536-1.575 0 0 .33-.33.798-.33 0 0 .467 0 .797.33 0 0 .33.33.33.797Z" fill={fill} /></svg>
  );
};

export default IconRewards;
