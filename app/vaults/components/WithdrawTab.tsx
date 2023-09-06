import BaseCard from '@/app/components/cards/Base';
import Button from '@/app/components/ui/Button';
import Image from 'next/image';
import SwapDetailLine from '@/app/components/cards/SwapDetailLine';
import { findTokenByDenom } from '@/util/helpers';

interface WithdrawTabProps {
  vault: any;
  tokens: any;
}

const WithdrawTab: React.FC<WithdrawTabProps> = ({ vault, tokens }) => {
  const token1 = findTokenByDenom(vault.tokens?.token1.denom, tokens);
  const token2 = findTokenByDenom(vault.tokens?.token2.denom, tokens);
  // Implement your Withdraw tab content here, using the 'vault' prop
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
          label="Total withdraw value"
          value="$1.81"
        />
        <SwapDetailLine
          label="Expected MNTA tokens"
          value="0.00"
        />
        <SwapDetailLine
          label="Expected KUJI tokens"
          value="0.00"
        />
      </div>
      <Button variant="tertiary">Withdraw</Button>
    </div>
  );
};

export default WithdrawTab;
