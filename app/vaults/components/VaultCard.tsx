'use client';

import BaseCard from '@/app/components/cards/Base';
import Button from '@/app/components/ui/Button';
import Image from 'next/image';
import useTokenStore from '@/store/tokenStore';
import DialogModal from '@/app/components/ui/Dialog';
import { useState } from 'react';

interface VaultCardProps {
  vault: any;
}

const VaultCard: React.FC<VaultCardProps> = ({ vault }) => {
  const [open, setOpen] = useState(false);
  const { allTokens } = useTokenStore();

  function findTokenByDenom(denom: string) {
    for (const token of allTokens) {
      if (token.denom === denom) {
        return token;
      }
    }
    return null;
  }

  const token1 = findTokenByDenom(vault.tokens?.token1.denom);
  const token2 = findTokenByDenom(vault.tokens?.token2.denom);

  return (
    <>
      <BaseCard
        type={5}
        className="w-full hover:bg-surface-c3 transition cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <div className="flex flex-col justify-between h-full p-4 gap-2">
          <div className="flex gap-3">
            <div className="flex items-center">
              <Image
                src={token1?.img}
                width={26}
                height={26}
                alt={token1?.name}
              />
              <Image
                src={token2?.img}
                width={26}
                height={26}
                alt={token2?.name}
              />
            </div>
            <div>
              <div className="text-lg font-semibold">{vault.name}</div>
              <div className="text-sm text-body">{vault.pool_type}</div>
            </div>
            <div className="">
              <Button size="xxs">BOW</Button>
            </div>
          </div>
          <div className="flex justify-around mt-2 border-t pt-3">
            <div className="text-center">
              <div className="text-md text-header font-semibold">10.7%</div>
              <div className="text-sm text-body">APR%</div>
            </div>
            <div className="text-center">
              <div className="text-md text-header font-semibold">$10.1k</div>
              <div className="text-sm text-body">Liquidity</div>
            </div>
            <div className="text-center">
              <div className="text-md text-header font-semibold">$1,700</div>
              <div className="text-sm text-body">Staked</div>
            </div>
          </div>
        </div>
      </BaseCard>

      <DialogModal
        isOpen={open}
        onClose={() => setOpen(false)}
      >
        Content
      </DialogModal>
    </>
  );
};

export default VaultCard;
