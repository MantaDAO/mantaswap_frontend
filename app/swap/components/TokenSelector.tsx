'use client';

import Button from '@/app/components/ui/Button';
import Image from 'next/image';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import DialogModal from '@/app/components/ui/Dialog';
import { useState } from 'react';
import { XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import BaseCard from '@/app/components/cards/Base';
import TokenChip from '@/app/components/cards/TokenChip';
import TokenValueSelector from '@/app/components/cards/TokenValueSelector';

const popularTokens = [
  {
    tokenId: 'osmosis',
    ticker: 'OSMO',
    img: '/img/icons/osmosis.png',
  },
  {
    tokenId: 'kujira',
    ticker: 'KUJI',
    img: '/img/icons/kujira.webp',
  },
  {
    tokenId: 'usdc',
    ticker: 'USDC',
    img: '/img/icons/usdc.png',
  },
  {
    tokenId: 'usk',
    ticker: 'USK',
    img: '/img/icons/usk.png',
  },
  {
    tokenId: 'mnta',
    ticker: 'MNTA',
    img: '/img/icons/manta.png',
  },
];

const recentTokens = [
  {
    tokenId: 'mnta',
    ticker: 'MNTA',
    img: '/img/icons/manta.png',
    description: 'Manta',
    balance: '0.000000',
  },
  {
    tokenId: 'osmosis',
    ticker: 'OSMO',
    img: '/img/icons/osmosis.png',
    description: 'Osmosis',
    balance: '0.000000',
  },
  {
    tokenId: 'kujira',
    ticker: 'KUJI',
    img: '/img/icons/kujira.webp',
    description: 'Kujira',
    balance: '0.000000',
  },
  {
    tokenId: 'usdc',
    ticker: 'USDC',
    img: '/img/icons/usdc.png',
    description: 'USDC',
    balance: '0.000000',
  },
  {
    tokenId: 'usk',
    ticker: 'USK',
    img: '/img/icons/usk.png',
    description: 'USK',
    balance: '0.000000',
  },
];

const TokenSelector = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className="shrink-0"
      >
        <Image
          src="/img/icons/kujira.webp"
          width={20}
          height={20}
          alt="Arrow right"
        />
        <span className="text-md">MNTA</span>
        <ChevronDownIcon className="w-4" />
      </Button>

      <DialogModal
        isOpen={open}
        onClose={() => setOpen(false)}
        className="flex flex-col gap-5"
      >
        <div className="w-full flex items-center gap-3">
          <BaseCard
            type={2}
            className="flex gap-2 items-center px-3 py-2 flex-grow w-full"
          >
            <MagnifyingGlassIcon className="w-4" />
            <input
              type="text"
              placeholder="Search by token"
              className="bg-transparent"
            />
          </BaseCard>
          <Button
            onClick={() => setOpen(false)}
            size="icon"
          >
            <XMarkIcon className="w-4" />
          </Button>
        </div>
        <hr />
        <div className="w-full text-left flex flex-col gap-5">
          <h5 className="text-md">Recent tokens</h5>
          <div className="flex gap-2 flex-wrap">
            {popularTokens.map((token, index) => (
              <TokenChip
                key={index}
                tokenId={token.tokenId}
                ticker={token.ticker}
                img={token.img}
              />
            ))}
          </div>
        </div>
        <hr />
        <div className="w-full text-left flex flex-col gap-5">
          <h5 className="text-md">Popular tokens</h5>
          <div className="flex gap-2 flex-col">
            {recentTokens.map((token, index) => (
              <TokenValueSelector
                key={index}
                tokenId={token.tokenId}
                ticker={token.ticker}
                img={token.img}
                balance={token.balance}
                description={token.description}
              />
            ))}
          </div>
        </div>
      </DialogModal>
    </>
  );
};

export default TokenSelector;
