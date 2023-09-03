import Image from 'next/image';
import BaseCard from './components/cards/Base';
import Button from './components/ui/Button';
import IconRefresh from './components/icons/Refresh';
import SlippageControl from './swap/components/Slippage';

export default function Home() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[420px] flex flex-col gap-3">
        <div className="w-full flex justify-between items-center">
          <Button size="xs">
            <IconRefresh className="w-[13px]" />
          </Button>
          <SlippageControl />
        </div>
        <BaseCard className="flex-grow w-full p-[26px] flex flex-col gap-[20px]">
          <div className="flex justify-between items-center">
            <h5>Swap</h5>
            <div className="flex gap-2">
              <div>0 MNTA</div>
              <Button size="xxs">Half</Button>
              <Button size="xxs">Max</Button>
            </div>
          </div>
          <BaseCard
            type={2}
            className="h-[73px]"
          >
            x
          </BaseCard>
          <div className="w-full h-px bg-border relative my-1">
            <Button
              size="xs"
              className="absolute left-1/2 -translate-x-1/2 -top-1/2 -translate-y-1/2"
            >
              <IconRefresh className="w-[13px]" />
            </Button>
          </div>
          <div className="flex justify-between items-center">
            <h5>To</h5>
            <div className="flex gap-2">
              <div>0 MNTA</div>
            </div>
          </div>
          <BaseCard
            type={2}
            className="h-[73px]"
          >
            x
          </BaseCard>
          <Button variant="disabled">Connect wallet</Button>
        </BaseCard>
      </div>
    </div>
  );
}
