'use client';

import BaseCard from '@/app/components/cards/Base';
import { WalletIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import TokenSelector from '@/app/swap/components/TokenSelector';
import Button from '@/app/components/ui/Button';
import VaultSelector from '@/app/vaults/components/VaultSelector';

interface BridgeProps {
  className?: string;
}

const BridgeScr: React.FC<BridgeProps> = () => {
  return (
    <div className="w-full max-w-[420px] flex flex-col gap-3">
      <BaseCard className="flex-grow w-full p-[26px] flex flex-col gap-[20px]">
        <div className="w-full flex gap-3">
          <VaultSelector className="w-full" />
          <ArrowRightIcon className="w-8" />
          <VaultSelector className="w-full" />
        </div>
        <hr />
        <div className="flex justify-between items-center">
          <h5>Bridge</h5>
          <div className="flex gap-2 items-center">
            <div className="flex items-center gap-1">
              <WalletIcon className="w-3 text-tertiary" />
              <div className="text-sm text-body font-semibold">0 MNTA</div>
            </div>
            <Button size="xxs">Half</Button>
            <Button size="xxs">Max</Button>
          </div>
        </div>
        <BaseCard
          type={2}
          className="h-[73px] flex justify-between items-center p-4"
        >
          <TokenSelector />
          <div className="flex flex-col items-end">
            <input
              type="number"
              className="bg-transparent text-base font-semibold text-right w-full"
              placeholder="0.0"
            />
            <span className="text-sm opacity-50">$0</span>
          </div>
        </BaseCard>
        <hr />
        <div className="flex justify-between items-center">
          <h5>Transactions</h5>
        </div>
        <BaseCard
          type={2}
          className="gap-3 grid grid-cols-3 justify-between items-center p-4"
        >
          <BaseCard
            type={3}
            className="h-20"
          ></BaseCard>
          <BaseCard
            type={3}
            className="h-20"
          ></BaseCard>
          <BaseCard
            type={3}
            className="h-20"
          ></BaseCard>
        </BaseCard>
        <Button variant="primary">Transfer</Button>
      </BaseCard>
    </div>
  );
};

export default BridgeScr;
