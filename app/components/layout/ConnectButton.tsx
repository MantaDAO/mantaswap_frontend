'use client';

import Button from '../ui/Button';
import BaseCard from '../cards/Base';
import Image from 'next/image';
import useAuthStore from '@/store/authStore';
import { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/20/solid';

const ConnectButton = () => {
  const { setSignedIn } = useAuthStore();
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative">
      <Button
        variant="primary"
        onClick={() => setShowModal(true)}
      >
        Connect
      </Button>
      {showModal && (
        <BaseCard
          type={1}
          className="absolute p-5 top-0 right-0 w-[300px]"
        >
          <Button
            onClick={() => setShowModal(false)}
            size="icon"
            className="absolute top-4 right-4"
          >
            <XMarkIcon className="w-4" />
          </Button>
          <div className="w-[220px] flex flex-col gap-1">
            <h4>Connect wallet</h4>
            <p className="w-full">Select your wallet provider below</p>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <Button
              variant="neutral"
              className="w-full h-[72px]"
              onClick={() => setSignedIn(true)}
            >
              <Image
                src="/img/keplr.png"
                height={30}
                width={86}
                alt="Keplr"
              />
            </Button>
            <Button
              variant="neutral"
              className="w-full h-[72px]"
              onClick={() => setSignedIn(true)}
            >
              <Image
                src="/img/leap-wallet.png"
                height={32}
                width={135}
                alt="Leap Wallet"
              />
            </Button>
          </div>
        </BaseCard>
      )}
    </div>
  );
};

export default ConnectButton;
