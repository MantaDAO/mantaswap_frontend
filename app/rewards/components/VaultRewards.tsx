'use client';
import VaultRewardCard from './VaultRewardCard';
import useTokenStore from '@/store/tokenStore';
import BaseCard from '@/app/components/cards/Base';
import Button from '@/app/components/ui/Button';

const VaultRewards = () => {
  const { vaultRewards } = useTokenStore();
  return (
    <div className="flex flex-col gap-5">
      <div className="header w-full text-center">
        <h1>Rewards</h1>
      </div>
      <div className="container lg grid sm:grid-cols-3 gap-[18px] items-start">
        <BaseCard
          type={5}
          className="sm:col-span-2 p-5 flex flex-col gap-5"
        >
          <h5>Your vault rewards</h5>
          <div className="w-full flex flex-col gap-1">
            <div className="flex items-center pb-1 px-5 text-md text-body">
              <div className="w-1/4 flex items-center gap-2">Coin</div>
              <div className="w-1/4 text-right">Amount</div>
              <div className="w-1/4 text-right">Price</div>
              <div className="w-1/4 text-right">Value</div>

              <div className="chevron-spacer w-[40px] shrink-0 hidden sm:flex  justify-end"></div>
            </div>
            {vaultRewards.map((reward: any, index: number) => (
              <VaultRewardCard
                key={index}
                reward={reward}
              ></VaultRewardCard>
            ))}
          </div>
          <Button variant="primary">Claim all ($19,249.00)</Button>
        </BaseCard>
        <BaseCard
          type={5}
          className="p-5 flex flex-col gap-5"
        >
          <h5>DAO staking rewards</h5>
          <div className="w-full flex flex-col gap-1">
            <div className="flex items-center pb-1 px-5 text-md text-body">
              <div className="w-1/3 flex items-center gap-2">Coin</div>
              <div className="w-1/3 text-right">Amount</div>
              <div className="w-1/3 text-right">Value</div>
            </div>

            {Array.from({ length: 4 }).map((_, index) => (
              <BaseCard key={index}>
                <div
                  key={index}
                  className="flex items-center pb-1 px-5 text-md h-11"
                >
                  <div className="w-1/3 flex items-center gap-2">
                    <img
                      src={`/img/icons/manta.png`}
                      alt={`vault`}
                      className="w-5"
                    />
                    MNTA
                  </div>
                  <div className="w-1/3 text-right">485</div>
                  <div className="w-1/3 text-right">$95.44</div>
                </div>
              </BaseCard>
            ))}
          </div>
          <Button variant="primary">Claim all</Button>
          <Button variant="blue">Visit DAO</Button>
        </BaseCard>
      </div>
    </div>
  );
};

export default VaultRewards;
