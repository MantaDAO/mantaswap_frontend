'use client';

import BaseCard from '@/app/components/cards/Base';

interface VaultCardProps {
  vault: any;
}

const VaultCard: React.FC<VaultCardProps> = ({ vault }) => {
  return (
    <BaseCard
      type={5}
      className="w-full h-[130px]"
    >
      <div className="flex flex-col justify-between h-full p-4">
        <div className="text-lg font-semibold">{vault.name}</div>
        <div className="text-sm text-gray-500">{vault.description}</div>
        <div className="flex justify-between mt-2">
          <div>
            <span className="font-semibold">Pool Type:</span> {vault.pool_type}
          </div>
          <div>
            <span className="font-semibold">Algo:</span> {vault.algo}
          </div>
        </div>
      </div>
    </BaseCard>
  );
};

export default VaultCard;
