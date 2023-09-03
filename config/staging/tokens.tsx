import { Bitcoin } from '@/app/components/icons/_tokens/bitcoin';
import { Usdc } from '@/app/components/icons/_tokens/usdc';
import { LUNA } from '@/app/components/icons/_tokens/luna';
import { USK } from '@/app/components/icons/_tokens/usk';
import { Kuji as Kujira } from '@/app/components/icons/_tokens/kuji';
import { Mnta as Manta } from '@/app/components/icons/_tokens/mnta';
import { IconSTATOM } from '@/app/components/icons/_tokens/IconSTATOM';
import { IconJUNO } from '@/app/components/icons/_tokens/IconJUNO';
import { IconKuji } from '@/app/components/icons/_tokens/IconKuji';
import { DEMO } from 'kujira.js';

export const TOKENS: Token[] = [
  {
    code: 'KUJI',
    name: 'KUJI - Kujira',
    denom: 'ukuji',
    cgId: 'kujira',
    icon: (
      <div className="block w-6 h-6">
        <IconKuji
          width={24}
          height={24}
        />
      </div>
    ),
    price: 0,
    decimals: 6,
    routes: [
      {
        to: 'DEMO',
        address: 'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
      },
      {
        to: 'USK',
        address: 'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
      },
      {
        to: 'LUNA',
        address: 'kujira1mf6ptkssddfmxvhdx0ech0k03ktp6kf9yk59renau2gvht3nq2gqx97zgq',
      },
    ],
  },
  {
    code: 'DEMO',
    name: 'DEMO - DEMO',
    price: 1.0,
    denom: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo',
    icon: (
      <Usdc
        width={24}
        height={24}
      />
    ),
    decimals: 6,
    routes: [
      {
        to: 'KUJI',
        address: 'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
      },
      {
        to: 'USK',
        address: 'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
      },
    ],
  },
  {
    code: 'USK',
    name: 'USK - Stablecoin',
    price: 1.0,
    cgId: 'usk',
    denom: 'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk',
    icon: (
      <USK
        width={24}
        height={24}
      />
    ),
    decimals: 6,
    routes: [
      {
        to: 'KUJI',
        address: 'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6',
      },
      {
        to: 'DEMO',
        address: 'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg',
      },
      {
        to: 'MNTA',
        address: 'kujira16084g6pg0qk0646erfcwkstck95m46xc70zgt48usya0juf8lf0syg6yr5',
      },
    ],
  },
  {
    code: 'LUNA',
    name: 'LUNA - Terra 2',
    price: 1.0,
    cgId: 'terra-luna-2',
    denom: 'ibc/A1E1A20C1E4F2F76F301DA625CC476FBD0FCD8CA94DAF60814CA5257B6CD3E3E',
    icon: (
      <LUNA
        width={24}
        height={24}
      />
    ),
    decimals: 6,
    routes: [
      {
        to: 'KUJI',
        address: 'kujira1mf6ptkssddfmxvhdx0ech0k03ktp6kf9yk59renau2gvht3nq2gqx97zgq',
      },
    ],
  },
  {
    code: 'MNTA',
    name: 'MNTA - The Worlds Greatest DAO',
    price: 1.0,
    cgId: 'mantadao',
    denom: 'factory/kujira1643jxg8wasy5cfcn7xm8rd742yeazcksqlg4d7/umnta',
    icon: (
      <Manta
        width={24}
        height={24}
      />
    ),
    decimals: 6,
    routes: [
      {
        to: 'USK',
        address: 'kujira16084g6pg0qk0646erfcwkstck95m46xc70zgt48usya0juf8lf0syg6yr5',
      },
    ],
  },
  //Bow Pool Tokens
  {
    code: 'KUJI/USK LP',
    name: 'KUJI/USK LP',
    price: 1.0,
    denom: 'factory/kujira16ethwy4fkjn7ymd04ect2wwlq7pwtlxdzw3zg5nvw8smmwsks49sqjg326/ulp',
    icon: (
      <div className="relative w-10 h-6">
        <div className="absolute w-6 h-6">
          <Kujira
            width={24}
            height={24}
          />
        </div>
        <div className="absolute w-6 h-6 right-0">
          <USK
            width={24}
            height={24}
          />
        </div>
      </div>
    ),
    decimals: 6,
    routes: [],
  },
  {
    code: 'KUJI/DEMO LP',
    name: 'KUJI/DEMO LP',
    price: 1.0,
    denom: 'factory/kujira19kxd9sqk09zlzqfykk7tzyf70hl009hkekufq8q0ud90ejtqvvxs8xg5cq/ulp',
    icon: (
      <div className="relative w-10 h-6">
        <div className="absolute w-6 h-6">
          <Kujira
            width={24}
            height={24}
          />
        </div>
        <div className="absolute w-6 h-6 right-0">
          <Usdc
            width={24}
            height={24}
          />
        </div>
      </div>
    ),
    decimals: 6,
    routes: [],
  },
  {
    code: 'DEMO/USK LP',
    name: 'DEMO/USK LP',
    price: 1.0,
    denom: 'factory/kujira1a9fha3f02xyzvmanxxl4p3djrnp40ewwkrfkm4gr0exlv028ze3slhv4fn/ulp',
    icon: (
      <div className="relative w-10 h-6">
        <div className="absolute w-6 h-6">
          <Usdc
            width={24}
            height={24}
          />
        </div>
        <div className="absolute w-6 h-6 right-0">
          <Usdc
            width={24}
            height={24}
          />
        </div>
      </div>
    ),
    decimals: 6,
    routes: [],
  },
  {
    code: 'KUJI/DEMO MLP',
    name: 'KUJI/DEMO MLP',
    price: 1.0,
    denom: 'factory/kujira1m4wq7t6py8uchdhr4ljytedrktj4phsdxqvvfrfwsyn7alccz0rqaalkcj/umlp',
    // icon: <div className="relative w-10"><div className="relative"><Kujira width={24} height={24} /></div><div className="absolute right-0 mr-2"><Usdc width={24} height={24} /></div></div>,
    icon: (
      <div className="relative w-10 h-6">
        <div className="absolute w-6 h-6">
          <Kujira
            width={24}
            height={24}
          />
        </div>
        <div className="absolute w-6 h-6 right-0">
          <Usdc
            width={24}
            height={24}
          />
        </div>
      </div>
    ),
    decimals: 6,
    routes: [],
  },
];

export const PLATFORM_TOKENS = TOKENS.filter((token) => {
  return token.cgId === 'kujira' || token.cgId === 'terra-luna-2';
});

export function getTokenByCode(code: String) {
  const token = TOKENS.find((token: Token) => {
    return token.code === code;
  });

  return token;
}

export function getTokenByDenom(denom: String) {
  const token = TOKENS.find((token: Token) => {
    return token.denom === denom;
  });

  if (!token) {
    // console.error(`No token entry for ${denom}`)
  }

  return token;
}

export interface Token {
  code: string;
  name: string;
  denom: string;
  cgId?: string;
  icon: JSX.Element;
  price: Number;
  decimals: Number;
  routes: Route[];
}

export interface Route {
  to: String;
  address: String;
}

export interface Hop {
  token: Token;
  route: Route;
}
