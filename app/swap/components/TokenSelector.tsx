'use client';

import Button from '@/app/components/ui/Button';
import Image from 'next/image';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import DialogModal from '@/app/components/ui/Dialog';
import { useState } from 'react';
import { XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import TokenChip from '@/app/components/cards/TokenChip';
import TokenValueSelector from '@/app/components/cards/TokenValueSelector';
import InputWrap from '@/app/components/forms/InputWrap';
import useTokenStore from '@/store/tokenStore';

interface Token {
  tokenId: string;
  ticker: string;
  img: string;
  description: string;
  balance: string;
}

interface TokenSelectorProps {
  identifier?: string;
}

const TokenSelector: React.FC<TokenSelectorProps> = ({ identifier }) => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const {
    setActiveFromToken,
    setActiveToToken,
    activeFromToken,
    activeToToken,
    popularTokens,
    allTokens,
    recentTokens,
  } = useTokenStore();

  // Filter the allTokens array based on the searchQuery
  const filteredTokens = allTokens.filter(
    (token: any) =>
      token.ticker.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (token.description && token.description.toLowerCase().includes(searchQuery.toLowerCase())),
  );
  const showSearchResults = searchQuery.trim() !== '';

  const handleTokenClick = (token: any) => {
    if (identifier === 'from') {
      setActiveFromToken(token);
    } else if (identifier === 'to') {
      setActiveToToken(token);
    }
    setOpen(false); // Close the modal when a token is selected
  };

  return (
    <>
      {identifier === 'from' ? (
        <Button
          onClick={() => setOpen(true)}
          className="shrink-0"
        >
          {activeFromToken && (
            <Image
              src={activeFromToken.img}
              width={20}
              height={20}
              alt="Arrow right"
            />
          )}
          <span className="text-md">{activeFromToken ? activeFromToken.ticker : 'Select'}</span>
          <ChevronDownIcon className="w-4" />
        </Button>
      ) : (
        <Button
          onClick={() => setOpen(true)}
          className="shrink-0"
        >
          {activeToToken && (
            <Image
              src={activeToToken.img}
              width={20}
              height={20}
              alt="Arrow right"
            />
          )}
          <span className="text-md">{activeToToken ? activeToToken.ticker : 'Select'}</span>
          <ChevronDownIcon className="w-4" />
        </Button>
      )}

      <DialogModal
        isOpen={open}
        onClose={() => setOpen(false)}
        className="flex flex-col gap-5"
      >
        <div className="w-full flex items-center gap-3">
          <InputWrap className="w-full">
            <MagnifyingGlassIcon className="w-4" />
            <input
              type="text"
              placeholder="Search by token"
              className="bg-transparent w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </InputWrap>
          <Button
            onClick={() => setOpen(false)}
            size="icon"
          >
            <XMarkIcon className="w-4" />
          </Button>
        </div>
        {showSearchResults ? (
          <div className="w-full text-left flex flex-col gap-5">
            <h5 className="text-md">Search results ({filteredTokens.length} results)</h5>
            <div className="flex gap-2 flex-col">
              {filteredTokens.map((token: any, index: any) => (
                <TokenValueSelector
                  key={index}
                  tokenId={token.tokenId}
                  ticker={token.ticker}
                  img={token.img}
                  balance={token.balance}
                  description={token.description}
                  onClick={() => handleTokenClick(token)}
                />
              ))}
            </div>
          </div>
        ) : (
          <>
            <hr />
            <div className="w-full text-left flex flex-col gap-5">
              <h5 className="text-md">Recent tokens</h5>
              <div className="flex gap-2 flex-wrap">
                {popularTokens.map((token: any, index: any) => (
                  <TokenChip
                    key={index}
                    tokenId={token.tokenId}
                    ticker={token.ticker}
                    img={token.img}
                    onClick={() => handleTokenClick(token)}
                  />
                ))}
              </div>
            </div>
            <hr />
            <div className="w-full text-left flex flex-col gap-5">
              <h5 className="text-md">Popular tokens</h5>
              <div className="flex gap-2 flex-col">
                {recentTokens.map((token: any, index: any) => (
                  <TokenValueSelector
                    key={index}
                    tokenId={token.tokenId}
                    ticker={token.ticker}
                    img={token.img}
                    balance={token.balance}
                    description={token.description}
                    onClick={() => handleTokenClick(token)} // Set the token as active on click
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </DialogModal>
    </>
  );
};

export default TokenSelector;
