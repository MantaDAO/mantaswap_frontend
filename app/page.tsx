import Swap from './swap/components/Swap';

const demoSwapRoute = [
  [
    {
      tokenId: 'osmosis',
      percentage: 80,
      img: '/img/icons/osmosis.png',
    },
    {
      tokenId: 'kujira',
      img: '/img/icons/kujira.webp',
    },
    {
      tokenId: 'usdc',
      img: '/img/icons/usdc.png',
    },
    {
      tokenId: 'usk',
      img: '/img/icons/usk.png',
    },
  ],
  [
    {
      tokenId: 'osmosis',
      percentage: 10,
      img: '/img/icons/osmosis.png',
    },
    {
      tokenId: 'usdc',
      img: '/img/icons/usdc.png',
    },
    {
      tokenId: 'usk',
      img: '/img/icons/usk.png',
    },
  ],
  [
    {
      tokenId: 'osmosis',
      percentage: 5,
      img: '/img/icons/osmosis.png',
    },
    {
      tokenId: 'usk',
      img: '/img/icons/usk.png',
    },
  ],
];

const demoSwapDetails = [
  {
    label: 'Minimum received',
    value: '0 USK',
  },
  {
    label: 'Rate',
    value: '1 OSMO per USK',
  },
  {
    label: 'Extra vs FIN',
    value: '--',
  },
  {
    label: 'Max slippage',
    value: '0.3%',
  },
  {
    label: 'Exchange fee',
    value: '0 USK',
  },
];

export default function Home() {
  return (
    <div className="w-full flex justify-center">
      <Swap
        route={demoSwapRoute}
        details={demoSwapDetails}
      />
    </div>
  );
}
