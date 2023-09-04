import Image from 'next/image';
import BaseCard from '../components/cards/Base';

export default function Rewards() {
  return (
    <div className="flex flex-col gap-5">
      <div className="header w-full text-center">
        <h1>Rewards</h1>
      </div>
      <div className="container lg grid sm:grid-cols-3 gap-[18px]">
        <BaseCard
          type={5}
          className="sm:col-span-2 p-5 flex flex-col gap-5"
        >
          <h5>Your vault rewards</h5>
          <div className="w-full flex flex-col gap-1">
            <BaseCard
              type={5}
              className="w-full h-10"
            ></BaseCard>
            <BaseCard
              type={5}
              className="w-full h-10"
            ></BaseCard>
            <BaseCard
              type={5}
              className="w-full h-10"
            ></BaseCard>
            <BaseCard
              type={5}
              className="w-full h-10"
            ></BaseCard>
          </div>
        </BaseCard>
        <BaseCard
          type={5}
          className="p-5 flex flex-col gap-5"
        >
          <h5>Your vault rewards</h5>
          <div className="w-full flex flex-col gap-1">
            <BaseCard
              type={5}
              className="w-full h-10"
            ></BaseCard>
            <BaseCard
              type={5}
              className="w-full h-10"
            ></BaseCard>
            <BaseCard
              type={5}
              className="w-full h-10"
            ></BaseCard>
            <BaseCard
              type={5}
              className="w-full h-10"
            ></BaseCard>
          </div>
        </BaseCard>
      </div>
    </div>
  );
}
