import Image from 'next/image';
import BaseCard from './components/cards/Base';

export default function Home() {
  return (
    <div className="w-full flex flex-grow justify-center">
      <BaseCard className="w-[420px] h-[420px] p-[26px] flex flex-col gap-20"></BaseCard>
    </div>
  );
}
