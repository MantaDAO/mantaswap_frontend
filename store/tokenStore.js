// tokenStore.js
import create from 'zustand';

function getRandomBalance(min, max) {
  return (Math.random() * (max - min) + min).toFixed(6);
}

const vaults = [
  {
    code: 'MNTA/KUJI',
    name: 'MNTA/KUJI',
    description: 'Liquidity Pool',
    label: 'BOW',
    pool_type: 'Liquidity Pool',
    algo: 'Constant Product',
    denom: 'factory/kujira16ethwy4fkjn7ymd04ect2wwlq7pwtlxdzw3zg5nvw8smmwsks49sqjg326/ulp',
    tokens: {
      token1: {
        denom: 'denom-MNTA',
      },
      token2: {
        denom: 'denom-KUJI',
      },
    },
  },
  {
    code: 'OSMO/USDC',
    name: 'OSMO/USDC',
    description: 'Liquidity Pool',
    label: 'BOW',
    pool_type: 'Liquidity Pool',
    algo: 'Constant Product',
    denom: 'factory/kujira16ethwy4fkjn7ymd04ect2wwlq7pwtlxdzw3zg5nvw8smmwsks49sqjg326/ulp',
    tokens: {
      token1: {
        denom: 'denom-OSMO',
      },
      token2: {
        denom: 'denom-USDC',
      },
    },
  },
  {
    code: 'BTC/ETH',
    name: 'BTC/ETH',
    description: 'Liquidity Pool',
    label: 'BOW',
    pool_type: 'Liquidity Pool',
    algo: 'Constant Product',
    denom: 'factory/kujira16ethwy4fkjn7ymd04ect2wwlq7pwtlxdzw3zg5nvw8smmwsks49sqjg326/ulp',
    tokens: {
      token1: {
        denom: 'denom-BTC',
      },
      token2: {
        denom: 'denom-ETH',
      },
    },
  },
  {
    code: 'XRP/LTC',
    name: 'XRP/LTC',
    description: 'Liquidity Pool',
    label: 'BOW',
    pool_type: 'Liquidity Pool',
    algo: 'Constant Product',
    denom: 'factory/kujira16ethwy4fkjn7ymd04ect2wwlq7pwtlxdzw3zg5nvw8smmwsks49sqjg326/ulp',
    tokens: {
      token1: {
        denom: 'denom-XRP',
      },
      token2: {
        denom: 'denom-LTC',
      },
    },
  },
  {
    code: 'XLM/ADA',
    name: 'XLM/ADA',
    description: 'Liquidity Pool',
    label: 'BOW',
    pool_type: 'Liquidity Pool',
    algo: 'Constant Product',
    denom: 'factory/kujira16ethwy4fkjn7ymd04ect2wwlq7pwtlxdzw3zg5nvw8smmwsks49sqjg326/ulp',
    tokens: {
      token1: {
        denom: 'denom-XLM',
      },
      token2: {
        denom: 'denom-ADA',
      },
    },
  },
  {
    code: 'DOT/LINK',
    name: 'DOT/LINK',
    description: 'Liquidity Pool',
    label: 'BOW',
    pool_type: 'Liquidity Pool',
    algo: 'Constant Product',
    denom: 'factory/kujira16ethwy4fkjn7ymd04ect2wwlq7pwtlxdzw3zg5nvw8smmwsks49sqjg326/ulp',
    tokens: {
      token1: {
        denom: 'denom-DOT',
      },
      token2: {
        denom: 'denom-LINK',
      },
    },
  },
  {
    code: 'XTZ/VET',
    name: 'XTZ/VET',
    description: 'Liquidity Pool',
    label: 'BOW',
    pool_type: 'Liquidity Pool',
    algo: 'Constant Product',
    denom: 'factory/kujira16ethwy4fkjn7ymd04ect2wwlq7pwtlxdzw3zg5nvw8smmwsks49sqjg326/ulp',
    tokens: {
      token1: {
        denom: 'denom-XTZ',
      },
      token2: {
        denom: 'denom-VET',
      },
    },
  },
  {
    code: 'MNTA/OSMO',
    name: 'MNTA/OSMO',
    description: 'Liquidity Pool',
    label: 'BOW',
    pool_type: 'Liquidity Pool',
    algo: 'Constant Product',
    denom: 'factory/kujira16ethwy4fkjn7ymd04ect2wwlq7pwtlxdzw3zg5nvw8smmwsks49sqjg326/ulp',
    tokens: {
      token1: {
        denom: 'denom-MNTA',
      },
      token2: {
        denom: 'denom-OSMO',
      },
    },
  },
  {
    code: 'KUJI/USDC',
    name: 'KUJI/USDC',
    description: 'Liquidity Pool',
    label: 'BOW',
    pool_type: 'Liquidity Pool',
    algo: 'Constant Product',
    denom: 'factory/kujira16ethwy4fkjn7ymd04ect2wwlq7pwtlxdzw3zg5nvw8smmwsks49sqjg326/ulp',
    tokens: {
      token1: {
        denom: 'denom-KUJI',
      },
      token2: {
        denom: 'denom-USDC',
      },
    },
  },
  {
    code: 'BTC/XRP',
    name: 'BTC/XRP',
    description: 'Liquidity Pool',
    label: 'BOW',
    pool_type: 'Liquidity Pool',
    algo: 'Constant Product',
    denom: 'factory/kujira16ethwy4fkjn7ymd04ect2wwlq7pwtlxdzw3zg5nvw8smmwsks49sqjg326/ulp',
    tokens: {
      token1: {
        denom: 'denom-BTC',
      },
      token2: {
        denom: 'denom-XRP',
      },
    },
  },
  {
    code: 'ETH/LTC',
    name: 'ETH/LTC',
    description: 'Liquidity Pool',
    label: 'BOW',
    pool_type: 'Liquidity Pool',
    algo: 'Constant Product',
    denom: 'factory/kujira16ethwy4fkjn7ymd04ect2wwlq7pwtlxdzw3zg5nvw8smmwsks49sqjg326/ulp',
    tokens: {
      token1: {
        denom: 'denom-ETH',
      },
      token2: {
        denom: 'denom-LTC',
      },
    },
  },
  {
    code: 'XRP/XLM',
    name: 'XRP/XLM',
    description: 'Liquidity Pool',
    label: 'BOW',
    pool_type: 'Liquidity Pool',
    algo: 'Constant Product',
    denom: 'factory/kujira16ethwy4fkjn7ymd04ect2wwlq7pwtlxdzw3zg5nvw8smmwsks49sqjg326/ulp',
    tokens: {
      token1: {
        denom: 'denom-XRP',
      },
      token2: {
        denom: 'denom-XLM',
      },
    },
  },
  {
    code: 'DOT/XTZ',
    name: 'DOT/XTZ',
    description: 'Liquidity Pool',
    label: 'BOW',
    pool_type: 'Liquidity Pool',
    algo: 'Constant Product',
    denom: 'factory/kujira16ethwy4fkjn7ymd04ect2wwlq7pwtlxdzw3zg5nvw8smmwsks49sqjg326/ulp',
    tokens: {
      token1: {
        denom: 'denom-DOT',
      },
      token2: {
        denom: 'denom-XTZ',
      },
    },
  },
  {
    code: 'ADA/DOT',
    name: 'ADA/DOT',
    description: 'Liquidity Pool',
    label: 'BOW',
    pool_type: 'Liquidity Pool',
    algo: 'Constant Product',
    denom: 'factory/kujira16ethwy4fkjn7ymd04ect2wwlq7pwtlxdzw3zg5nvw8smmwsks49sqjg326/ulp',
    tokens: {
      token1: {
        denom: 'denom-ADA',
      },
      token2: {
        denom: 'denom-DOT',
      },
    },
  },
  {
    code: 'LINK/XTZ',
    name: 'LINK/XTZ',
    description: 'Liquidity Pool',
    label: 'BOW',
    pool_type: 'Liquidity Pool',
    algo: 'Constant Product',
    denom: 'factory/kujira16ethwy4fkjn7ymd04ect2wwlq7pwtlxdzw3zg5nvw8smmwsks49sqjg326/ulp',
    tokens: {
      token1: {
        denom: 'denom-LINK',
      },
      token2: {
        denom: 'denom-XTZ',
      },
    },
  },
];

const popularTokens = [
  {
    tokenId: 'mnta',
    ticker: 'MNTA',
    denom: 'denom-MNTA',
    img: '/img/icons/manta.png',
    description: 'Manta',
    balance: getRandomBalance(0.1, 100),
  },
  {
    tokenId: 'osmosis',
    ticker: 'OSMO',
    denom: 'denom-OSMO',
    img: '/img/icons/osmosis.png',
    description: 'Osmosis',
    balance: getRandomBalance(0.1, 100),
  },
  {
    tokenId: 'kujira',
    ticker: 'KUJI',
    denom: 'denom-KUJI',
    img: '/img/icons/kujira.webp',
    description: 'Kujira',
    balance: getRandomBalance(0.1, 100),
  },
  {
    tokenId: 'usdc',
    ticker: 'USDC',
    denom: 'denom-USDC',
    img: '/img/icons/usdc.png',
    description: 'USDC',
    balance: getRandomBalance(0.1, 100),
  },
  {
    tokenId: 'usk',
    ticker: 'USK',
    denom: 'denom-USK',
    img: '/img/icons/usk.png',
    description: 'USK',
    balance: getRandomBalance(0.1, 100),
  },
];

const recentTokens = [
  {
    tokenId: 'mnta',
    ticker: 'MNTA',
    denom: 'denom-MNTA',
    img: '/img/icons/manta.png',
    description: 'Manta',
    balance: getRandomBalance(0.1, 100),
  },
  {
    tokenId: 'osmosis',
    ticker: 'OSMO',
    denom: 'denom-OSMO',
    img: '/img/icons/osmosis.png',
    description: 'Osmosis',
    balance: getRandomBalance(0.1, 100),
  },
  {
    tokenId: 'kujira',
    ticker: 'KUJI',
    denom: 'denom-KUJI',
    img: '/img/icons/kujira.webp',
    description: 'Kujira',
    balance: getRandomBalance(0.1, 100),
  },
  {
    tokenId: 'usdc',
    ticker: 'USDC',
    denom: 'denom-USDC',
    img: '/img/icons/usdc.png',
    description: 'USDC',
    balance: getRandomBalance(0.1, 100),
  },
  {
    tokenId: 'usk',
    ticker: 'USK',
    denom: 'denom-USK',
    img: '/img/icons/usk.png',
    description: 'USK',
    balance: getRandomBalance(0.1, 100),
  },
];

const allTokens = [
  {
    tokenId: 'mnta',
    ticker: 'MNTA',
    denom: 'denom-MNTA',
    img: '/img/icons/manta.png',
    description: 'Manta',
    balance: getRandomBalance(0.1, 100),
  },
  {
    tokenId: 'osmosis',
    ticker: 'OSMO',
    denom: 'denom-OSMO',
    img: '/img/icons/osmosis.png',
    description: 'Osmosis',
    balance: getRandomBalance(0.1, 100),
  },
  {
    tokenId: 'kujira',
    ticker: 'KUJI',
    denom: 'denom-KUJI',
    img: '/img/icons/kujira.webp',
    description: 'Kujira',
    balance: getRandomBalance(0.1, 100),
  },
  {
    tokenId: 'usdc',
    ticker: 'USDC',
    denom: 'denom-USDC',
    img: '/img/icons/usdc.png',
    description: 'USDC',
    balance: getRandomBalance(0.1, 100),
  },
  {
    tokenId: 'usk',
    ticker: 'USK',
    denom: 'denom-USK',
    img: '/img/icons/usk.png',
    description: 'USK',
    balance: getRandomBalance(0.1, 100),
  },
  {
    tokenId: 'bitcoin',
    ticker: 'BTC',
    denom: 'denom-BTC',
    img: '/img/icons/manta.png',
    description: 'Bitcoin',
    balance: getRandomBalance(0.1, 100),
  },
  {
    tokenId: 'ethereum',
    ticker: 'ETH',
    denom: 'denom-ETH',
    img: '/img/icons/osmosis.png',
    description: 'Ethereum',
    balance: getRandomBalance(0.1, 100),
  },
  {
    tokenId: 'ripple',
    ticker: 'XRP',
    denom: 'denom-XRP',
    img: '/img/icons/kujira.webp',
    description: 'Ripple',
    balance: getRandomBalance(0.1, 100),
  },
  {
    tokenId: 'litecoin',
    ticker: 'LTC',
    denom: 'denom-LTC',
    img: '/img/icons/usdc.png',
    description: 'Litecoin',
    balance: getRandomBalance(0.1, 100),
  },
  {
    tokenId: 'stellar',
    ticker: 'XLM',
    denom: 'denom-XLM',
    img: '/img/icons/usk.png',
    description: 'Stellar',
    balance: getRandomBalance(0.1, 100),
  },
  {
    tokenId: 'cardano',
    ticker: 'ADA',
    denom: 'denom-ADA',
    img: '/img/icons/manta.png',
    description: 'Cardano',
    balance: getRandomBalance(0.1, 100),
  },
  {
    tokenId: 'polkadot',
    ticker: 'DOT',
    denom: 'denom-DOT',
    img: '/img/icons/osmosis.png',
    description: 'Polkadot',
    balance: getRandomBalance(0.1, 100),
  },
  {
    tokenId: 'chainlink',
    ticker: 'LINK',
    denom: 'denom-LINK',
    img: '/img/icons/kujira.webp',
    description: 'Chainlink',
    balance: getRandomBalance(0.1, 100),
  },
  {
    tokenId: 'tezos',
    ticker: 'XTZ',
    denom: 'denom-XTZ',
    img: '/img/icons/usdc.png',
    description: 'Tezos',
    balance: getRandomBalance(0.1, 100),
  },
  {
    tokenId: 'vechain',
    ticker: 'VET',
    denom: 'denom-VET',
    img: '/img/icons/usk.png',
    description: 'VeChain',
    balance: getRandomBalance(0.1, 100),
  },
];

const useTokenStore = create((set) => ({
  activeFromToken: null,
  activeToToken: null,
  popularTokens: popularTokens,
  recentTokens: recentTokens,
  allTokens: allTokens,
  activeChain: 'kujira',
  vaults: vaults,
  setActiveChain: (chain) => set({ activeChain: chain }),
  setActiveFromToken: (token) => set({ activeFromToken: token }),
  setActiveToToken: (token) => set({ activeToToken: token }),
}));

export default useTokenStore;
