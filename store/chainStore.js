import create from 'zustand';

export const chains = [
  {
    name: 'Kujira',
    chainId: 'kaiyo-1',
    relayTime: '5 Minutes',
    rpc: 'https://rpc.mantadao.app',
    icon: 'https://placehold.it/72x72',
    gas: {
      amount: 625,
      denom: 'ukuji',
      display: '0.000625 KUJI',
    },
    bridgeTokens: [],
  },
  {
    name: 'Osmosis',
    relayTime: '5 Minutes',
    chainId: 'osmosis-1',
    icon: 'https://placehold.it/72x72',
    rpc: 'https://rpc.osmosis.zone/',
    gas: {
      amount: 2500,
      denom: 'uosmo',
      display: '0.000625 OSMO',
    },
    bridgeTokens: [
      {
        code: 'KUJI',
        route: [
          {
            channel: 259,
            chainId: 'osmosis-1',
            denom: 'ibc/BB6BCDB515050BAE97516111873CCD7BCF1FD0CCB723CC12F3C4F704D6C646CE',
            decimals: 6,
          },
          {
            chainId: 'kaiyo-1',
            denom: 'ukuji',
            channelFrom: 3,
            decimals: 6,
          },
        ],
      },
      {
        code: 'OSMO',
        route: [
          {
            channel: 259,
            chainId: 'osmosis-1',
            denom: 'uosmo',
            decimals: 6,
          },
          {
            chainId: 'kaiyo-1',
            denom: 'ibc/47BD209179859CDE4A2806763D7189B6E6FE13A17880FE2B42DE1E6C1E329E23',
            channelFrom: 3,
            decimals: 6,
          },
        ],
      },
      {
        code: 'MNTA',
        route: [
          {
            channel: 259,
            chainId: 'osmosis-1',
            denom: 'ibc/51D893F870B7675E507E91DA8DB0B22EA66333207E4F5C0708757F08EE059B0B',
            decimals: 6,
          },
          {
            chainId: 'kaiyo-1',
            denom: 'factory/kujira1643jxg8wasy5cfcn7xm8rd742yeazcksqlg4d7/umnta',
            channelFrom: 3,
            decimals: 6,
          },
        ],
      },
      {
        code: 'ATOM',
        route: [
          // Osmosis -> CosmosHub
          {
            channel: 0,
            chainId: 'osmosis-1',
            denom: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
            decimals: 6,
          },
          // CosmosHub -> Kujira
          {
            channel: 343,
            channelFrom: 141,
            chainId: 'cosmoshub-4',
            denom: 'uatom',
            decimals: 6,
          },
          {
            chainId: 'kaiyo-1',
            channelFrom: 0,
            decimals: 6,
          },
        ],
      },
      {
        code: 'SCRT',
        route: [
          // Osmosis -> Secret
          {
            channel: 88,
            chainId: 'osmosis-1',
            denom: 'ibc/0954E1C28EB7AF5B72D24F3BC2B47BBB2FDF91BDDFD57B74B99E133AED40972A',
            decimals: 6,
          },
          // Secret -> Kujira
          {
            channel: 22,
            channelFrom: 1,
            chainId: 'secret-4',
            denom: 'uscrt',
            decimals: 6,
          },
          {
            chainId: 'kaiyo-1',
            channelFrom: 10,
            decimals: 6,
          },
        ],
      },
      {
        code: 'JUNO',
        route: [
          // Osmosis -> Juno
          {
            channel: 42,
            chainId: 'osmosis-1',
            denom: 'ibc/0954E1C28EB7AF5B72D24F3BC2B47BBB2FDF91BDDFD57B74B99E133AED40972A',
            decimals: 6,
          },
          // Juno -> Kujira
          {
            channel: 87,
            channelFrom: 0,
            chainId: 'juno-1',
            denom: 'ujuno',
            decimals: 6,
          },
          {
            chainId: 'kaiyo-1',
            channelFrom: 10,
            decimals: 6,
          },
        ],
      },
      {
        code: 'STARS',
        route: [
          // Osmosis -> Stargaze
          {
            channel: 75,
            chainId: 'osmosis-1',
            denom: 'ibc/987C17B11ABC2B20019178ACE62929FE9840202CE79498E29FE8E5CB02B7C0A4',
            decimals: 6,
          },
          // Stargaze -> Kujira
          {
            channel: 49,
            channelFrom: 0,
            chainId: 'stargaze-1',
            denom: 'ustars',
            decimals: 6,
          },
          {
            denom: 'ibc/4F393C3FCA4190C0A6756CE7F6D897D5D1BE57D6CCB80D0BC87393566A7B6602',
            chainId: 'kaiyo-1',
            channelFrom: 7,
            decimals: 6,
          },
        ],
      },
      {
        code: 'STRD',
        route: [
          {
            channel: 379,
            chainId: 'osmosis-1',
            denom: 'ibc/A8CA5EE328FA10C9519DF6057DA1F69682D28F7D0F5CCC7ECB72E3DCA2D157A4',
            decimals: 6,
          },
          {
            channel: 8,
            channelFrom: 36,
            chainId: 'stride-1',
            denom: 'ustrd',
            decimals: 6,
          },
          {
            chainId: 'kaiyo-1',
            denom: 'ibc/4F393C3FCA4190C0A6756CE7F6D897D5D1BE57D6CCB80D0BC87393566A7B6602',
            channelFrom: 32,
            decimals: 6,
          },
        ],
      },
      {
        code: 'stATOM',
        route: [
          {
            channel: 379,
            chainId: 'osmosis-1',
            denom: 'ibc/C140AFD542AE77BD7DCC83F13FDD8C5E5BB8C4929785E6EC2F4C636F98F17901',
            decimals: 6,
          },
          {
            channel: 8,
            channelFrom: 36,
            chainId: 'stride-1',
            denom: 'stuatom',
            decimals: 6,
          },
          {
            chainId: 'kaiyo-1',
            denom: 'ibc/0306D6B66EAA2EDBB7EAD23C0EC9DDFC69BB43E80B398035E90FBCFEF3FD1A87',
            channelFrom: 32,
            decimals: 6,
          },
        ],
      },
    ],
  },
  {
    name: 'CosmosHub',
    chainId: 'cosmoshub-4',
    icon: 'https://placehold.it/72x72',
    rpc: 'https://cosmos-rpc.publicnode.com/',
    gas: {
      amount: 2500,
      denom: 'uatom',
      display: '0.000625 ATOM',
    },
    bridgeTokens: [
      {
        code: 'ATOM',
        route: [
          // CosmosHub -> Kujira
          {
            channel: 343,
            chainId: 'cosmoshub-4',
            denom: 'uatom',
            decimals: 6,
          },
          {
            channelFrom: 0,
            chainId: 'kaiyo-1',
            decimals: 6,
          },
        ],
      },
      {
        code: 'KUJI',
        route: [
          {
            channel: 343,
            chainId: 'cosmoshub-4',
            denom: 'ibc/4CC44260793F84006656DD868E017578F827A492978161DA31D7572BCB3F4289',
            decimals: 6,
          },
          {
            chainId: 'kaiyo-1',
            channelFrom: 0,
            decimals: 6,
          },
        ],
      },
    ],
  },
  {
    name: 'Secret',
    chainId: 'secret-4',
    relayTime: '5 Minutes',
    rpc: 'https://rpc.secret.express',
    icon: 'https://placehold.it/72x72',
    gas: {
      amount: 12500,
      denom: 'uscrt',
      display: '0.000625 KUJI',
    },
    bridgeTokens: [
      {
        code: 'SCRT',
        route: [
          {
            channel: 22,
            chainId: 'secret-4',
            denom: 'uscrt',
            decimals: 6,
          },
          {
            chainId: 'kaiyo-1',
            denom: 'ibc/A358D7F19237777AF6D8AD0E0F53268F8B18AE8A53ED318095C14D6D7F3B2DB5',
            channelFrom: 10,
            decimals: 6,
          },
        ],
      },
      {
        code: 'KUJI',
        route: [
          {
            channel: 22,
            chainId: 'secret-4',
            denom: 'ibc/FFA324A40F82EF430CF78D498CE04FF634D2091FCDC04EFEC8841B86011F307A',
            decimals: 6,
          },
          {
            chainId: 'kaiyo-1',
            denom: 'ukuji',
            channelFrom: 10,
            decimals: 6,
          },
        ],
      },
    ],
  },
  {
    name: 'Juno',
    chainId: 'juno-1',
    relayTime: '5 Minutes',
    rpc: 'https://rpc-juno.ecostake.com',
    icon: 'https://placehold.it/72x72',
    gas: {
      amount: 100000,
      denom: 'ujuno',
      display: '0.000625 KUJI',
    },
    bridgeTokens: [
      {
        code: 'JUNO',
        route: [
          {
            channel: 87,
            chainId: 'juno-1',
            denom: 'ujuno',
            decimals: 6,
          },
          {
            chainId: 'kaiyo-1',
            denom: 'ibc/EFF323CC632EC4F747C61BCE238A758EFDB7699C3226565F7C20DA06509D59A5',
            channelFrom: 1,
            decimals: 6,
          },
        ],
      },
      {
        code: 'KUJI',
        route: [
          {
            channel: 87,
            chainId: 'juno-1',
            denom: 'ibc/7F7D3698E2E3484D576001608BB84D13F5C8B02B97359716ECC60A29A7523BF3',
            decimals: 6,
          },
          {
            chainId: 'kaiyo-1',
            denom: 'ukuji',
            channelFrom: 1,
            decimals: 6,
          },
        ],
      },
    ],
  },
  {
    name: 'Stargaze',
    chainId: 'stargaze-1',
    relayTime: '5 Minutes',
    rpc: 'https://rpc.stargaze-apis.com/',
    icon: 'https://placehold.it/72x72',
    gas: {
      amount: 1000000,
      denom: 'ustars',
      display: '0.000625 KUJI',
    },
    bridgeTokens: [
      {
        code: 'STARS',
        route: [
          {
            channel: 49,
            chainId: 'stargaze-1',
            denom: 'ustars',
            decimals: 6,
          },
          {
            chainId: 'kaiyo-1',
            denom: 'ibc/4F393C3FCA4190C0A6756CE7F6D897D5D1BE57D6CCB80D0BC87393566A7B6602',
            channelFrom: 7,
            decimals: 6,
          },
        ],
      },
      {
        code: 'KUJI',
        route: [
          {
            channel: 49,
            chainId: 'stargaze-1',
            denom: 'ibc/0E57658B71E9CC4BB0F6FE3E01712966713B49E6FD292E6B66E3F111B103D361',
            decimals: 6,
          },
          {
            chainId: 'kaiyo-1',
            denom: 'ukuji',
            channelFrom: 7,
            decimals: 6,
          },
        ],
      },
    ],
  },
  {
    name: 'Stride ',
    chainId: 'stride-1',
    relayTime: '5 Minutes',
    rpc: 'https://stride-rpc.polkachu.com/',
    icon: 'https://placehold.it/72x72',
    gas: {
      amount: 0,
      denom: 'ustrd',
      display: '0.000625 KUJI',
    },
    bridgeTokens: [
      {
        code: 'STRD',
        route: [
          {
            channel: 8,
            chainId: 'stride-1',
            denom: 'ustrd',
            decimals: 6,
          },
          {
            chainId: 'kaiyo-1',
            denom: 'ibc/4F393C3FCA4190C0A6756CE7F6D897D5D1BE57D6CCB80D0BC87393566A7B6602',
            channelFrom: 32,
            decimals: 6,
          },
        ],
      },
      {
        code: 'stATOM',
        route: [
          {
            channel: 8,
            chainId: 'stride-1',
            denom: 'stuatom',
            decimals: 6,
          },
          {
            chainId: 'kaiyo-1',
            denom: 'ibc/0306D6B66EAA2EDBB7EAD23C0EC9DDFC69BB43E80B398035E90FBCFEF3FD1A87',
            channelFrom: 32,
            decimals: 6,
          },
        ],
      },
      {
        code: 'KUJI',
        route: [
          {
            channel: 8,
            chainId: 'stride-1',
            denom: 'ibc/EF4222BF77971A75F4E655E2AD2AFDDC520CE428EF938A1C91157E9DFBFF32A3',
            decimals: 6,
          },
          {
            chainId: 'kaiyo-1',
            denom: 'ukuji',
            channelFrom: 32,
            decimals: 6,
          },
        ],
      },
    ],
  },
];

const useChainStore = create((set) => ({
  chains: chains,
  chainFrom: chains[0],
  chainTo: chains[1],
  activeChainToken: chains[0].bridgeTokens[0],
  setActiveChainToken: (token) => set((state) => ({ activeChainToken: token })),
  setChainFrom: (chain) => set((state) => ({ chainFrom: chain })),
  setChainTo: (chain) => set((state) => ({ chainTo: chain })),
}));

export default useChainStore;
