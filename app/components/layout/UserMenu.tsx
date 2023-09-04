import { Popover, Transition } from '@headlessui/react';
import Button from '../ui/Button';
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid';
import {
  DocumentDuplicateIcon,
  ArrowLeftOnRectangleIcon,
  CircleStackIcon,
  MagnifyingGlassPlusIcon,
} from '@heroicons/react/24/outline';
import BaseCard from '../cards/Base';
import TokenValue from '../cards/TokenValue';
import { useState } from 'react';
import Popper from '../ui/Popper';

const recentTokens = [
  {
    tokenId: 'mnta',
    ticker: 'MNTA',
    img: '/img/icons/manta.png',
    description: 'Manta',
    balance: '0.000000',
  },
  {
    tokenId: 'osmosis',
    ticker: 'OSMO',
    img: '/img/icons/osmosis.png',
    description: 'Osmosis',
    balance: '0.000000',
  },
  {
    tokenId: 'kujira',
    ticker: 'KUJI',
    img: '/img/icons/kujira.webp',
    description: 'Kujira',
    balance: '0.000000',
  },
  {
    tokenId: 'usdc',
    ticker: 'USDC',
    img: '/img/icons/usdc.png',
    description: 'USDC',
    balance: '0.000000',
  },
  {
    tokenId: 'usk',
    ticker: 'USK',
    img: '/img/icons/usk.png',
    description: 'USK',
    balance: '0.000000',
  },
];

const UserMenu = () => {
  const [expandTokens, setExpandTokens] = useState(false);
  return (
    <>
      <Popover className="relative backdrop-blur-lg">
        {({ open }) => (
          <>
            <Popover.Button>
              <Button>
                <img
                  src="http://via.placeholder.com/300x300"
                  alt="pfp"
                  className="w-[20px] h-[20px] border rounded-full"
                />
                <span className="hidden md:block">kuji...xn5b1</span>
                <EllipsisVerticalIcon className="w-5 ui-open:rotate-90 transition" />
              </Button>
            </Popover.Button>

            <Transition
              enter="transition duration-200 ease-out"
              enterFrom="transform scale-80 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-200 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-80 opacity-0"
            >
              <Popover.Panel className="absolute w-[300px] z-10 right-0 top-2 flex items-end justify-end">
                <BaseCard
                  type={2}
                  className="block w-full p-5"
                >
                  <div className="flex items-center gap-5 flex-col">
                    <div className="flex items-center w-full gap-3">
                      <img
                        src="http://via.placeholder.com/300x300"
                        alt="pfp"
                        className="w-[40px] h-[40px] border rounded-full"
                      />
                      <div>
                        <h5>20.87 MNTA</h5>
                        <span className="text-md text-body">kuji...xn5b1</span>
                      </div>
                      <div className="flex ml-auto gap-2">
                        <Popper content="Copy address">
                          <Button size="icon">
                            <DocumentDuplicateIcon className="w-4" />
                          </Button>
                        </Popper>
                        <Popper content="Sign out">
                          <Button size="icon">
                            <ArrowLeftOnRectangleIcon className="w-4" />
                          </Button>
                        </Popper>
                      </div>
                    </div>
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-[#3D3D56] to-transparent"></div>
                    <div className="flex items-center gap-3 w-full">
                      <div>
                        <span className="text-body text-md font-medium">Wallet value</span>
                        <h2>$1,983.00</h2>
                        <span className="text-body text-sm font-medium">~20.87 MNTA</span>
                      </div>
                      <div className="flex ml-auto gap-2">
                        <Popper content="View on explorer">
                          <Button size="icon">
                            <MagnifyingGlassPlusIcon className="w-4" />
                          </Button>
                        </Popper>
                        <Popper
                          positionX="right"
                          content="Hide small balances"
                        >
                          <Button
                            size="icon"
                            variant="tertiary"
                          >
                            <CircleStackIcon className="w-4" />
                          </Button>
                        </Popper>
                      </div>
                    </div>
                    <div
                      className={`flex flex-col gap-1 w-full overflow-hidden relative
                    ${expandTokens ? 'max-h-[40vh] overflow-y-scroll' : 'h-[120px]'}
                    `}
                    >
                      {!expandTokens && (
                        <div
                          className={`absolute w-full h-28 bottom-0 left-0 bg-gradient-to-b from-transparent to-surface-lighter z-10`}
                        ></div>
                      )}
                      {recentTokens.map((token, index) => (
                        <TokenValue
                          key={index}
                          tokenId={token.tokenId}
                          ticker={token.ticker}
                          img={token.img}
                          balance={token.balance}
                          description={token.description}
                        />
                      ))}
                    </div>
                    <Button
                      onClick={() => setExpandTokens(!expandTokens)}
                      className="w-full"
                    >
                      {expandTokens ? 'Collapse' : 'Show all tokens'}
                    </Button>
                  </div>
                </BaseCard>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </>
  );
};

export default UserMenu;
