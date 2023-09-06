'use client';

import BaseCard from '@/app/components/cards/Base';
import { WalletIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import ChainTokenSelector from '@/app/swap/components/ChainTokenSelector';
import Button from '@/app/components/ui/Button';
import VaultSelector from '@/app/vaults/components/VaultSelector';
import useChainStore from '@/store/chainStore';
import Image from 'next/image';

interface BridgeProps {
  className?: string;
}

const BridgeScr: React.FC<BridgeProps> = () => {
  const { chains, chainFrom } = useChainStore();
  return (
    <div className="w-full max-w-[420px] flex flex-col gap-3">
      <BaseCard className="flex-grow w-full p-[26px] flex flex-col gap-[20px]">
        <div className="w-full flex gap-3">
          <VaultSelector
            chains={chains}
            identifier="from"
            className="w-full"
          />
          <ArrowRightIcon className="w-8" />
          <VaultSelector
            chains={chains}
            identifier="to"
            className="w-full"
          />
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
          <ChainTokenSelector />
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
          type={4}
          className="gap-3 grid grid-cols-3 justify-between items-center p-0"
        >
          <BaseCard
            type={3}
            className="text-center py-5 px-2"
          >
            <Image
              src="/img/icons/osmosis.png"
              width={20}
              height={20}
              alt="Osmosis"
              className="mx-auto mb-2"
            />
            <h5 className="mb-2">Osmosis</h5>
            <span className="text-sm block">est. ~30 sec</span>
            <span className="text-xs block text-body">kuji...0x123</span>
          </BaseCard>
          <BaseCard
            type={3}
            className="text-center py-5 px-2"
          >
            <Image
              src="/img/icons/osmosis.png"
              width={20}
              height={20}
              alt="Osmosis"
              className="mx-auto mb-2"
            />
            <h5 className="mb-2">Osmosis</h5>
            <span className="text-sm block">est. ~30 sec</span>
            <span className="text-xs block text-body">kuji...0x123</span>
          </BaseCard>
          <BaseCard
            type={3}
            className="text-center py-5 px-2"
          >
            <Image
              src="/img/icons/osmosis.png"
              width={20}
              height={20}
              alt="Osmosis"
              className="mx-auto mb-2"
            />
            <h5 className="mb-2">Osmosis</h5>
            <span className="text-sm block">est. ~30 sec</span>
            <span className="text-xs block text-body">kuji...0x123</span>
          </BaseCard>
        </BaseCard>
        <Button variant="primary">Transfer</Button>
      </BaseCard>
    </div>
  );
};

export default BridgeScr;
