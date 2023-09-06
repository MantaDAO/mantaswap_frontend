import React from 'react';
import BaseCard from './Base';

interface TokenValueSelectorProps {
  tokenId: string;
  balance: string;
  img: string;
  ticker: string;
  description: string;
  onClick?: () => void; // Define the onClick prop
}

const TokenValueSelector: React.FC<TokenValueSelectorProps> = ({
  tokenId,
  balance,
  img,
  ticker,
  description,
  onClick, // Use the onClick prop
}) => {
  return (
    <BaseCard
      type={2}
      className="flex p-3 gap-2 h-[56px] items-end cursor-pointer hover:bg-surface-c3 transition"
      onClick={onClick} // Attach the onClick event handler to the card
    >
      <div className="h-full flex gap-3 items-center">
        <img
          src={img}
          alt={tokenId}
          className="border rounded-full w-5 h-5 shrink-0"
        />
        <div className="flex flex-col text-left">
          <span className="token_name block text-header font-medium text-md">{ticker}</span>
          <span className="text-md block text-body">{description}</span>
        </div>
      </div>
      <span className="text-md text-header font-medium ml-auto">{balance}</span>
    </BaseCard>
  );
};

export default TokenValueSelector;
