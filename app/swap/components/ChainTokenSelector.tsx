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
import useChainStore from '@/store/chainStore';

interface ChainTokenSelectorProps {
  identifier?: string;
}

const ChainTokenSelector: React.FC<ChainTokenSelectorProps> = ({ identifier }) => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { allTokens } = useTokenStore();
  const { activeChainToken, setActiveChainToken } = useChainStore();

  // Filter the allTokens array based on the searchQuery
  const filteredTokens = allTokens.filter(
    (token: any) =>
      token.ticker.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (token.description && token.description.toLowerCase().includes(searchQuery.toLowerCase())),
  );
  const showSearchResults = searchQuery.trim() !== '';

  const handleTokenClick = (token: any) => {
    setActiveChainToken(token);
    console.log(activeChainToken);
    setOpen(false); // Close the modal when a token is selected
  };

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className="shrink-0"
      >
        {activeChainToken && (
          <Image
            src={activeChainToken.img}
            width={20}
            height={20}
            alt="Arrow right"
          />
        )}
        <span className="text-md">{activeChainToken ? activeChainToken.ticker : 'Select'}</span>
        <ChevronDownIcon className="w-4" />
      </Button>

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
      </DialogModal>
    </>
  );
};

export default ChainTokenSelector;
