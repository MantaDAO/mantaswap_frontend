import Image from 'next/image';
import BaseCard from './components/cards/Base';

export default function Home() {
  return (
    <div className="w-full flex flex-grow justify-center">
      <BaseCard className="w-full flex-grow max-w-[420px] h-[420px] p-[26px] flex flex-col gap-20">
        <h4>Swap</h4>
      </BaseCard>
    </div>
  );
}
