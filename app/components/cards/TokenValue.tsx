import React from 'react';
import BaseCard from './Base';

interface TokenValueProps {
  tokenId: string;
  balance: string;
  img: string;
  ticker: string;
  description?: string;
}

const TokenValue: React.FC<TokenValueProps> = ({ tokenId, balance, img, ticker }) => {
  return (
    <BaseCard
      type={2}
      className="flex p-3 gap-2 items-center h-[39px]"
    >
      <img
        src={img}
        alt={tokenId}
        className="border rounded-full w-5 h-5"
      />
      <span className="text-md text-header font-medium">{balance}</span>
      <span className="token_name text-body ml-auto text-sm">{ticker}</span>
    </BaseCard>
  );
};

export default TokenValue;
