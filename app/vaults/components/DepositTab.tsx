import BaseCard from '@/app/components/cards/Base';
import Button from '@/app/components/ui/Button';
import Image from 'next/image';
import { findTokenByDenom } from '@/util/helpers';
import { PlusIcon } from '@heroicons/react/20/solid';
import SwapDetailLine from '@/app/components/cards/SwapDetailLine';

interface DepositTabProps {
  vault: any;
  tokens: any;
}

const DepositTab: React.FC<DepositTabProps> = ({ vault, tokens }) => {
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
          <span className="text-md">{token1 ? token1.ticker : 'N/a'}</span>
        </Button>
        <div className="flex flex-col items-end">
          <input
            type="number"
            className="bg-transparent text-base font-semibold text-right w-full"
            placeholder="0.0"
          />
          <span className="text-sm opacity-50">
            {token1?.balance} {token1?.ticker}
          </span>
        </div>
      </BaseCard>
      <div className="w-full h-px bg-border relative my-1">
        <Button
          size="xs"
          className="absolute left-1/2 -translate-x-1/2 -top-1/2 -translate-y-1/2"
        >
          <PlusIcon className="w-[13px]" />
        </Button>
      </div>
      <BaseCard
        type={2}
        className="h-[73px] flex justify-between items-center p-4"
      >
        <Button className="shrink-0">
          <Image
            src={token2?.img}
            width={20}
            height={20}
            alt={token2?.name}
          />
          <span className="text-md">{token2 ? token2.ticker : 'N/a'}</span>
        </Button>
        <div className="flex flex-col items-end">
          <input
            type="number"
            className="bg-transparent text-base font-semibold text-right w-full"
            placeholder="0.0"
          />
          <span className="text-sm opacity-50">
            {token2?.balance} {token2?.ticker}
          </span>
        </div>
      </BaseCard>
      <div className="flex flex-col gap-2">
        <SwapDetailLine
          label="Total deposit value"
          value="$1.81"
        />
        <SwapDetailLine
          label="Expected LP tokens"
          value="2.15945"
        />
      </div>
      <Button variant="primary">Deposit</Button>
    </div>
  );
};

export default DepositTab;
