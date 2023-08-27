import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import BaseCard from '../cards/Base';
import Button from '../ui/Button';

type Chain = {
  name: string;
  icon: string;
};

const chains: Record<string, Chain> = {
  kujira: {
    name: 'Kujira',
    icon: '/img/icons/kujira.webp',
  },
  terra: {
    name: 'Terra',
    icon: '/img/icons/terra.webp',
  },
};

const ChainSelector: React.FC = () => {
  return (
    <Popover className="relative backdrop-blur-lg">
      <Popover.Button
        className={`flex items-center gap-1 relative z-10 outline-none bg-surface-c1 hover:bg-surface-c2 t1 shadow-c1 border-gradient h-[40px] rounded px-3 group`}
      >
        <img
          src="/img/icons/kujira.webp"
          alt="Kujira"
          className="h-6 rounded-full"
        />
        <ChevronDownIcon className="w-6 text-body-2 group-hover:text-body" />
      </Popover.Button>

      <Transition
        enter="transition duration-200 ease-out"
        enterFrom="transform scale-80 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-200 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-80 opacity-0"
      >
        <Popover.Panel className="absolute z-10 left-0 sm:left-auto sm:right-0 top-2">
          <BaseCard className="w-[300px] p-[24px] flex flex-col">
            <div>
              <h3>Select chain</h3>
              <p>Change your network</p>
            </div>
            <div className="flex flex-col gap-2">
              {Object.keys(chains).map((key) => {
                const { name, icon } = chains[key];
                return (
                  <Button key={key}>
                    <div className="flex items-center gap-2">
                      <img
                        src={icon}
                        alt={name}
                        className="h-[18px] rounded-full"
                      />
                      <span>{name}</span>
                    </div>
                  </Button>
                );
              })}
            </div>
          </BaseCard>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default ChainSelector;
