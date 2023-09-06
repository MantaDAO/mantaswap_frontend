import React from 'react';
import BaseCard from './Base';

interface TokenChipProps {
  tokenId: string;
  ticker: string;
  img: string;
  onClick?: () => void; // Define the onClick prop
}

const TokenChip: React.FC<TokenChipProps> = ({ tokenId, ticker, img, onClick }) => {
  return (
    <BaseCard
      type={2}
      onClick={onClick}
      className="px-3 py-1 flex gap-2 items-center h-[36px] cursor-pointer hover:bg-surface-c3 transition"
    >
      <img
        src={img}
        width={14}
        alt={tokenId}
      />
      <span className="text-md">{ticker}</span>
    </BaseCard>
  );
};

export default TokenChip;
