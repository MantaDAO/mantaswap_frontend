'use client';

import BaseCard from '@/app/components/cards/Base';
import Button from '@/app/components/ui/Button';
import Image from 'next/image';
import useTokenStore from '@/store/tokenStore';
import DialogModal from '@/app/components/ui/Dialog';
import { useState } from 'react';
import DepositTab from './DepositTab';
import WithdrawTab from './WithdrawTab';
import StakeTab from './StakeTab';
import UnstakeTab from './UnstakeTab';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { findTokenByDenom } from '@/util/helpers';

interface VaultCardProps {
  vault: any;
}

// Create a new component for the content inside BaseCard
const VaultCardContent: React.FC<{ vault: any }> = ({ vault }) => {
  const { allTokens } = useTokenStore();

  const token1 = findTokenByDenom(vault.tokens?.token1.denom, allTokens);
  const token2 = findTokenByDenom(vault.tokens?.token2.denom, allTokens);

  return (
    <div className="flex flex-col justify-between h-full p-4 gap-2">
      <div className="flex gap-3">
        <div className="flex items-center">
          <Image
            src={token1?.img}
            width={26}
            height={26}
            alt={token1?.name}
          />
          <Image
            src={token2?.img}
            width={26}
            height={26}
            alt={token2?.name}
          />
        </div>
        <div>
          <div className="text-lg font-semibold">{vault.name}</div>
          <div className="text-sm text-body">{vault.pool_type}</div>
        </div>
        <div className="">
          <Button size="xxs">BOW</Button>
        </div>
      </div>
      <div className="flex justify-around mt-2 border-t pt-3">
        <div className="text-center">
          <div className="text-md text-header font-semibold">10.7%</div>
          <div className="text-sm text-body">APR%</div>
        </div>
        <div className="text-center">
          <div className="text-md text-header font-semibold">$10.1k</div>
          <div className="text-sm text-body">Liquidity</div>
        </div>
        <div className="text-center">
          <div className="text-md text-header font-semibold">$1,700</div>
          <div className="text-sm text-body">Staked</div>
        </div>
      </div>
    </div>
  );
};

const VaultCard: React.FC<VaultCardProps> = ({ vault }) => {
  const { allTokens } = useTokenStore();
  const [open, setOpen] = useState(false);

  const [activeTab, setActiveTab] = useState('deposit'); // Initialize with "deposit" as the active tab

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const tabComponents: any = {
    deposit: (
      <DepositTab
        tokens={allTokens}
        vault={vault}
      />
    ),
    withdraw: (
      <WithdrawTab
        tokens={allTokens}
        vault={vault}
      />
    ),
    stake: (
      <StakeTab
        tokens={allTokens}
        vault={vault}
      />
    ),
    unstake: (
      <UnstakeTab
        tokens={allTokens}
        vault={vault}
      />
    ),
  };

  return (
    <>
      <BaseCard
        type={5}
        className="w-full hover:bg-surface-c3 transition cursor-pointer"
        onClick={() => setOpen(true)}
      >
        {/* Use the new VaultCardContent component here */}
        <VaultCardContent vault={vault} />
      </BaseCard>

      <DialogModal
        isOpen={open}
        transparent
        onClose={() => setOpen(false)}
      >
        <BaseCard
          type={5}
          className="w-full"
        >
          <Button
            onClick={() => setOpen(false)}
            size="icon"
            className="absolute top-3 right-3"
          >
            <XMarkIcon className="w-4" />
          </Button>
          <VaultCardContent vault={vault} />
        </BaseCard>
        <div className="w-full flex items-center justify-center mt-5 tabs-button">
          <Button
            size="sm"
            className={`rounded-b-none ${activeTab === 'deposit' ? 'bg-primary text-white' : ''}`}
            variant={activeTab === 'deposit' ? 'primary' : 'neutral'}
            onClick={() => handleTabClick('deposit')}
          >
            Deposit
          </Button>
          <Button
            size="sm"
            className={`rounded-b-none ${activeTab === 'withdraw' ? 'bg-primary text-white' : ''}`}
            variant={activeTab === 'withdraw' ? 'primary' : 'neutral'}
            onClick={() => handleTabClick('withdraw')}
          >
            Withdraw
          </Button>
          <Button
            size="sm"
            className={`rounded-b-none ${activeTab === 'stake' ? 'bg-primary text-white' : ''}`}
            variant={activeTab === 'stake' ? 'primary' : 'neutral'}
            onClick={() => handleTabClick('stake')}
          >
            Stake
          </Button>
          <Button
            size="sm"
            className={`rounded-b-none ${activeTab === 'unstake' ? 'bg-primary text-white' : ''}`}
            variant={activeTab === 'unstake' ? 'primary' : 'neutral'}
            onClick={() => handleTabClick('unstake')}
          >
            Unstake
          </Button>
        </div>
        <BaseCard
          type={5}
          className="w-full tabs-content p-5"
        >
          {tabComponents[activeTab]}
        </BaseCard>
      </DialogModal>
    </>
  );
};

export default VaultCard;
