// tokenStore.js
import create from 'zustand';

const popularTokens = [
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

const allTokens = [
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
  {
    tokenId: 'bitcoin',
    ticker: 'BTC',
    img: '/img/icons/manta.png',
    description: 'Bitcoin',
    balance: '2.000000',
  },
  {
    tokenId: 'ethereum',
    ticker: 'ETH',
    img: '/img/icons/osmosis.png',
    description: 'Ethereum',
    balance: '10.500000',
  },
  {
    tokenId: 'ripple',
    ticker: 'XRP',
    img: '/img/icons/kujira.webp',
    description: 'Ripple',
    balance: '100.000000',
  },
  {
    tokenId: 'litecoin',
    ticker: 'LTC',
    img: '/img/icons/usdc.png',
    description: 'Litecoin',
    balance: '25.750000',
  },
  {
    tokenId: 'stellar',
    ticker: 'XLM',
    img: '/img/icons/usk.png',
    description: 'Stellar',
    balance: '500.000000',
  },
  {
    tokenId: 'cardano',
    ticker: 'ADA',
    img: '/img/icons/manta.png',
    description: 'Cardano',
    balance: '50.250000',
  },
  {
    tokenId: 'polkadot',
    ticker: 'DOT',
    img: '/img/icons/osmosis.png',
    description: 'Polkadot',
    balance: '15.750000',
  },
  {
    tokenId: 'chainlink',
    ticker: 'LINK',
    img: '/img/icons/kujira.webp',
    description: 'Chainlink',
    balance: '30.500000',
  },
  {
    tokenId: 'tezos',
    ticker: 'XTZ',
    img: '/img/icons/usdc.png',
    description: 'Tezos',
    balance: '75.000000',
  },
  {
    tokenId: 'vechain',
    ticker: 'VET',
    img: '/img/icons/usk.png',
    description: 'VeChain',
    balance: '200.000000',
  },
];

const useTokenStore = create((set) => ({
  activeFromToken: null,
  activeToToken: null,
  popularTokens: popularTokens,
  recentTokens: recentTokens,
  allTokens: allTokens,
  setActiveFromToken: (token) => set({ activeFromToken: token }),
  setActiveToToken: (token) => set({ activeToToken: token }),
}));

export default useTokenStore;
