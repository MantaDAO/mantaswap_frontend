'use client';

import BaseCard from '@/app/components/cards/Base';
import IconRefresh from '@/app/components/icons/Refresh';
import Button from '@/app/components/ui/Button';
import Popper from '@/app/components/ui/Popper';
import SlippageControl from './Slippage';
import { WalletIcon } from '@heroicons/react/24/outline';
import TokenSelector from './TokenSelector';
import IconArrowsUpDown from '@/app/components/icons/ArrowsUpDown';
import SwapDetails from './SwapDetails';
import TransferRoute from './TransferRoute';

import { useAtom } from 'jotai';
import { demoSignedIn } from '@/store/atoms';

interface SwapProps {
  route: any; // You can adjust the type of 'route' as per your actual data type
  details: any; // You can adjust the type of 'details' as per your actual data type
}

const Swap: React.FC<SwapProps> = ({ route, details }) => {
  const [signedIn, setSignedIn] = useAtom(demoSignedIn);
  return (
    <div className="w-full max-w-[420px] flex flex-col gap-3">
      <BaseCard
        type={4}
        className="w-full flex justify-between items-center"
      >
        <Popper content="Refresh">
          <Button size="xs">
            <IconRefresh className="w-[13px]" />
          </Button>
        </Popper>
        <Popper content="Slippage">
          <SlippageControl />
        </Popper>
      </BaseCard>
      <BaseCard className="flex-grow w-full p-[26px] flex flex-col gap-[20px]">
        <div className="flex justify-between items-center">
          <h5>Swap</h5>
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
        <div className="w-full h-px bg-border relative my-1">
          <Button
            size="xs"
            className="absolute left-1/2 -translate-x-1/2 -top-1/2 -translate-y-1/2"
          >
            <IconArrowsUpDown className="w-[13px]" />
          </Button>
        </div>
        <div className="flex justify-between items-center">
          <h5>To</h5>
          <div className="flex gap-2 items-center">
            <div className="flex items-center gap-1">
              <WalletIcon className="w-3 text-body" />
              <div className="text-sm text-body font-semibold">0 USK</div>
            </div>
          </div>
        </div>
        <BaseCard
          type={2}
          className="h-[73px] flex justify-between items-center p-4"
        >
          <TokenSelector />
          <div className="flex flex-col items-end">
            <span
              className="bg-transparent text-base font-semibold text-right"
              placeholder="0.0"
            >
              123
            </span>
            <span className="text-sm opacity-50">$0</span>
          </div>
        </BaseCard>
        <div className="flex flex-col gap-2">
          {!signedIn ? (
            <Button variant="disabled">Connect wallet</Button>
          ) : (
            <>
              <Button variant="primary">Swap</Button>
              <SwapDetails details={details} />
            </>
          )}
        </div>
      </BaseCard>
      <TransferRoute transferRoute={route} />
    </div>
  );
};

export default Swap;
