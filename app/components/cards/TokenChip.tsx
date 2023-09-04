import React from 'react';
import BaseCard from './Base';

interface TokenChipProps {
  tokenId: string;
  ticker: string;
  img: string;
}

const TokenChip: React.FC<TokenChipProps> = ({ tokenId, ticker, img }) => {
  return (
    <BaseCard
      type={3}
      className="px-3 py-1 flex gap-2 items-center h-[36px]"
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
