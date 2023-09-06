import BaseCard from '@/app/components/cards/Base';
import Button from '@/app/components/ui/Button';
import Image from 'next/image';
import { findTokenByDenom } from '@/util/helpers';
import { PlusIcon } from '@heroicons/react/20/solid';
import SwapDetailLine from '@/app/components/cards/SwapDetailLine';

interface StakeTabProps {
  vault: any;
  tokens: any;
}

const StakeTab: React.FC<StakeTabProps> = ({ vault, tokens }) => {
  const token1 = findTokenByDenom(vault.tokens?.token1.denom, tokens);
  const token2 = findTokenByDenom(vault.tokens?.token2.denom, tokens);
  return (
    <div className="flex flex-col gap-5">
      <BaseCard
        type={2}
        className="h-[73px] flex justify-between items-center p-4"
      >
        <Button className="shrink-0">
          <Image
            src={token1?.img}
            width={20}
            height={20}
            alt={token1?.name}
          />
          <Image
            src={token2?.img}
            width={20}
            height={20}
            alt={token2?.name}
            className="-ml-2"
          />
          <span className="text-md">{vault.name}</span>
        </Button>
        <div className="flex flex-col items-end">
          <input
            type="number"
            className="bg-transparent text-base font-semibold text-right w-full"
            placeholder="0.0"
          />
          <span className="text-sm opacity-50">$0</span>
        </div>
      </BaseCard>
      <div className="flex flex-col gap-2">
        <SwapDetailLine
          label="New stake value"
          value="$0.00"
        />
        <SwapDetailLine
          label="New total staked amount"
          value="0.00"
        />
      </div>
      <Button variant="blue">Stake</Button>
    </div>
  );
};

export default StakeTab;
