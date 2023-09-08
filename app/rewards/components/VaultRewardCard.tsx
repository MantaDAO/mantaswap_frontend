import BaseCard from '@/app/components/cards/Base';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Button from '@/app/components/ui/Button';
import React, { useState } from 'react';

interface Vault {
  code: string;
  amount: number;
  value: number;
}
interface Type {
  type?: string;
}

interface VaultReward {
  code: string;
  name: string;
  img: string;
  amount: number;
  price: number;
  value: number;
  vaults: Vault[];
}

interface VaultRewardCardProps {
  reward: VaultReward;
}

const VaultRow: React.FC<{ vault?: Vault; type?: '0' | '1' }> = ({ vault, type = 1 }) => (
  <div className="w-full flex items-center claimRow">
    <div className="w-full flex items-center grow text-sm">
      <div className="w-1/3 flex gap-2 items-center">
        {type === 1 ? (
          <>
            <img
              src={`/img/icons/manta.png`}
              alt={`vault`}
              className="w-5"
            />
            {vault?.code}
          </>
        ) : (
          <span className="sm text-body">Vault</span>
        )}
      </div>
      <div className="w-1/3 text-right">
        {type === 1 ? <>{vault?.amount}</> : <span className="sm text-body">Amount</span>}
      </div>
      <div className="w-1/3 text-right">
        {type === 1 ? <>{vault?.value}$</> : <span className="sm text-body">Value</span>}
      </div>
    </div>

    <div className="w-[70px] sm:w-[100px] shrink-0 flex justify-end">
      {type === 1 && (
        <Button
          variant="tertiary"
          size="xxs"
        >
          Claim
        </Button>
      )}
    </div>
  </div>
);

const VaultRewardCard: React.FC<VaultRewardCardProps> = ({ reward }) => {
  const [isCollapsed, setIsCollapsed] = useState(true); // Local state for collapsible visibility

  const toggleCollapse = () => {
    // Function to toggle visibility
    setIsCollapsed(!isCollapsed);
  };
  return (
    <BaseCard
      type={1}
      className="hover:bg-surface-c2 transition"
    >
      <div
        className="flex items-center p-3 px-5 text-md main-card cursor-pointer"
        onClick={toggleCollapse}
      >
        <div className="w-1/4 flex items-center gap-2">
          <img
            src={reward.img}
            alt={reward.name}
            className="w-5"
          />
          {reward.code}
        </div>
        <div className="w-1/4 text-right">{reward.amount}</div>
        <div className="w-1/4 text-right">{reward.price}$</div>
        <div className="w-1/4 text-right">{(reward.price * reward.amount).toFixed(2)}$</div>

        <div className="chevron-spacer pl-2 sm:pl-0 sm:w-[40px] hidden sm:flex shrink-0 justify-end">
          <ChevronDownIcon
            className={`w-4 transition ${isCollapsed ? 'rotate-0' : 'rotate-180'}`}
          />
        </div>
      </div>
      {!isCollapsed && (
        <div className="border-t px-5 py-4 flex flex-col gap-3 w-full collapsible">
          <VaultRow type="0" />
          {reward.vaults.map((vault, index) => (
            <VaultRow
              key={index}
              vault={vault}
            />
          ))}
        </div>
      )}
    </BaseCard>
  );
};

export default VaultRewardCard;
