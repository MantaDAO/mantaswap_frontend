import { Bitcoin } from '@/app/components/icons/bitcoin';
import { Usdc } from '@/app/components/icons/usdc';
import { Ethereum } from '@/app/components/icons/ethereum';
import { EthereumDark } from '@/app/components/icons/ethereum-dark';
import { Bnb } from '@/app/components/icons/bnb';
import { Kujira } from '@/app/components/icons/kujira';
import { IconAtom } from '@/app/components/icons/tokens/IconAtom';
import { IconSTOSMO } from '@/app/components/icons/tokens/IconSTOSMO';
import { IconSTATOM } from '@/app/components/icons/tokens/IconSTATOM';
import IconACRE from '@/app/components/icons/tokens/IconACRE';
import IconRATOM from '@/app/components/icons/tokens/IconRATOM';
import { IconLoop } from '@/app/components/icons/tokens/IconLoop';
import { IconAMPKUJI } from '@/app/components/icons/tokens/IconAmpKUJI';
import { IconJUNO } from '@/app/components/icons/tokens/IconJUNO';
import { IconAKT } from '@/app/components/icons/tokens/IconAKT';
import { IconAstroport } from '@/app/components/icons/tokens/IconAstroport';
import { IconAXL } from '@/app/components/icons/tokens/IconAXL';
import { SCRT } from '@/app/components/icons/tokens/IconSCRT';
import { STARS } from '@/app/components/icons/tokens/IconSTARS';
import { LUNA } from '@/app/components/icons/luna';
import { Mnta as Manta } from '@/app/components/icons/mnta';
import { IconPAXG } from '@/app/components/icons/tokens/IconPAXG';
import IconLUNA from '@/app/components/icons/tokens/IconLuna';
import { IconKuji } from '@/app/components/icons/tokens/IconKuji';
import { USK } from '@/app/components/icons/usk';
import { OSMO } from '@/app/components/icons/tokens/IconOSMO';
import IconCMDX from '@/app/components/icons/tokens/IconCMDX';
import IconCMST from '@/app/components/icons/tokens/IconCMST';
import IconFRNZ from '@/app/components/icons/tokens/IconFRNZ';
import IconMars from '@/app/components/icons/tokens/IconMars';
import IconGRAV from '@/app/components/icons/tokens/IconGRAV';
import { IconWHALE } from '@/app/components/icons/tokens/IconWHALE';
import IconSTRD from '@/app/components/icons/tokens/IconSTRD';
import IconINJ from '@/app/components/icons/tokens/IconINJ';
import IconWINK from '@/app/components/icons/tokens/IconWINK';
import { IconUSK } from '@/app/components/icons/tokens/IconUSK';
import { ATOM, axlUSDC } from 'kujira.js';
import IconROAR from '@/app/components/icons/tokens/IconROAR';
import IconARCH from '@/app/components/icons/tokens/IconARCH';
import IconwstETH from '@/app/components/icons/tokens/IconwstETH';
import IconSHD from '@/app/components/icons/tokens/IconSHD';

export const TOKENS: Token[] = [
  {
    code: 'MNTA',
    name: 'MNTA - The Worlds Greatest DAO',
    price: 1.0,
    cgId: 'mantadao',
    denom: 'factory/kujira1643jxg8wasy5cfcn7xm8rd742yeazcksqlg4d7/umnta',
    icon: (
      <div className="block w-6 h-6">
        <Manta
          width={24}
          height={24}
        />
      </div>
    ),
    decimals: 6,
    routes: [
      {
        to: 'USK',
        address: 'kujira1mf4v3x3pkuthha5a4r9jd0slgulcxkucy4weuqsvx2n030twduzqewuznf',
      },
      {
        to: 'axlUSDC',
        address: 'kujira1ws9w7wl68prspv3rut3plv8249rm0ea0kk335swye3sl2slld4lqdmc0lv',
      },
      {
        to: 'KUJI',
        address: 'kujira1nkgq8xl4flsau7v3vphr3ayc7tprgazg6pzjmq8plkr76v385fhsx26qfa',
      },
      {
        to: 'stATOM',
        address: 'kujira1l2x5c2fjjnw9uhrfhtme9snw3tzs4jt8cm0q2ysqssx6zskxatesjm7w7f',
      },
      {
        to: 'wstETH',
        address: 'kujira1hf44at7dqewrn3ssa392d9p8nh5mr538u59gqsukdza35663hlestqr29e',
      },
      {
        to: 'STARS',
        address: 'kujira1hsdzhyvuc2z3f8d3yae84uk62d69vk68vxgudkun7gccz6hvrvfq0vx6fd',
      },
      {
        to: 'wBTC',
        address: 'kujira1y50nul39ql5sf42p67nrsy9j0luly2mvaxmlkmx6888pnzw66k6qc0gku9',
      },
      {
        to: 'SHD',
        address: 'kujira14u8ynhj7d8h2379yqj5q2ma0xxpvfjlrpauhzxgnj40ejq953mlsugux8d',
      },
      {
        to: 'OSMO',
        address: 'kujira12zc52j25xac565t297rmd3huj8zh62usrecy66rzxnsf9mchaepqnwx3cg',
      },
    ],
  },
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
        to: 'MNTA',
        address: 'kujira1nkgq8xl4flsau7v3vphr3ayc7tprgazg6pzjmq8plkr76v385fhsx26qfa',
      },
      {
        to: 'axlUSDC',
        address: 'kujira14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9sl4e867',
      },
      {
        to: 'USK',
        address: 'kujira193dzcmy7lwuj4eda3zpwwt9ejal00xva0vawcvhgsyyp5cfh6jyq66wfrf',
      },
      {
        to: 'ATOM',
        address: 'kujira18v47nqmhvejx3vc498pantg8vr435xa0rt6x0m6kzhp6yuqmcp8s4x8j2c',
      },
      {
        to: 'stATOM',
        address: 'kujira1gvfjvm09gunj9qkygvzr93ld7hux9nwa9k2t8lug8g46p4x8vt0q3xhu06',
      },
      {
        to: 'ampKUJI',
        address: 'kujira1lse59wt7a5yksdd08mennt299katjkfzdhmh8hvck8ln08jktcmsxrnh8s',
      },
      {
        to: 'LUNA',
        address: 'kujira1xqhakgvn3jeqfade0z4aufer9xylx7ft45fgyhg6z75mauhkjwks9cucyq',
      },
      {
        to: 'wETH',
        address: 'kujira1zdf0zjz8grfhhe2x06k8f8xpnv04y90w06f4py7fjml4nmukn3yswk3ugc',
      },
      {
        to: 'wBTC',
        address: 'kujira17t9w0xlnukuy7pw6fzkr7gd3pdun9zma0hzqaueqszskw2lr95yqfqnynt',
      },
      // {
      //     to: "stOSMO",
      //     address: "kujira16f84qasz2nw09cy25nlzxnzxyrnhvvygym74869y5q83pev9rhdsr7emra"
      // },
    ],
  },
  {
    code: 'axlUSDC',
    name: 'axlUSDC - Axelar USDC',
    cgId: 'axlusdc',
    price: 1.0,
    denom: 'ibc/295548A78785A1007F232DE286149A6FF512F180AF5657780FC89C009E2C348F',
    icon: (
      <div className="block w-6 h-6">
        <Usdc
          width={24}
          height={24}
        />
      </div>
    ),
    decimals: 6,
    routes: [
      {
        to: 'KUJI',
        address: 'kujira14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9sl4e867',
      },
      {
        to: 'ATOM',
        address: 'kujira1xr3rq8yvd7qplsw5yx90ftsr2zdhg4e9z60h5duusgxpv72hud3sl8nek6',
      },
      {
        to: 'OSMO',
        address: 'kujira1aakfpghcanxtc45gpqlx8j3rq0zcpyf49qmhm9mdjrfx036h4z5sfmexun',
      },
      {
        to: 'USK',
        address: 'kujira1rwx6w02alc4kaz7xpyg3rlxpjl4g63x5jq292mkxgg65zqpn5llq202vh5',
      },
      {
        to: 'LUNA',
        address: 'kujira1yg8930mj8pk288lmkjex0qz85mj8wgtns5uzwyn2hs25pwdnw42skp0kur',
      },
      {
        to: 'JUNO',
        address: 'kujira1z7asfxkwv0t863rllul570eh5pf2zk07k3d86ag4vtghaue37l5s9epdvn',
      },
      // {
      //     to: "LOOP",
      //     address: "kujira10fqy0npt7djm8lg847v9rqlng88kqfdvl8tyt4ge204wf52sy68qwmj07l"
      // },
      // {
      //     to: "MARS",
      //     address: "kujira149m52kn7nvsg5nftvv4fh85scsavpdfxp5nr7zasz97dum89dp5qevttd9"
      // },
      // {
      //     to: "stOSMO",
      //     address: "kujira1yugk2n5y5059yzr7yq938nwzkz9mjgfctunhjhf0jp8tgax7t2cqag6e8c"
      // },
      {
        to: 'SCRT',
        address: 'kujira1fkwjqyfdyktgu5f59jpwhvl23zh8aav7f98ml9quly62jx2sehysqa4unf',
      },
      {
        to: 'STARS',
        address: 'kujira1jkte0pytr85qg0whmgux3vmz9ehmh82w40h8gaqeg435fnkyfxqq5m32qy',
      },
      {
        to: 'MNTA',
        address: 'kujira1ws9w7wl68prspv3rut3plv8249rm0ea0kk335swye3sl2slld4lqdmc0lv',
      },
      {
        to: 'wETH',
        address: 'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
      },
      {
        to: 'gPAXG',
        address: 'kujira12p30cr4gstmp2yucwxtaq92turrzsxxar8upz3rhmfjxh6gdgk4s5vsyse',
      },
      {
        to: 'wBTC',
        address: 'kujira12jdezs3kk6y04q3fnl7kq5567pcw0zfr7j0yfsxjqgggdkktut9s2gm7cm',
      },
    ],
  },
  {
    code: 'USK',
    name: 'USK - Kujira Stablecoin',
    cgId: 'usk',
    price: 1.0,
    denom: 'factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk',
    icon: (
      <div className="block w-6 h-6">
        <USK
          width={24}
          height={24}
        />
      </div>
    ),
    decimals: 6,
    routes: [
      {
        to: 'KUJI',
        address: 'kujira193dzcmy7lwuj4eda3zpwwt9ejal00xva0vawcvhgsyyp5cfh6jyq66wfrf',
      },
      {
        to: 'ATOM',
        address: 'kujira1yum4v0v5l92jkxn8xpn9mjg7wuldk784ctg424ue8gqvdp88qzlqr2qp2j',
      },
      {
        to: 'axlUSDC',
        address: 'kujira1rwx6w02alc4kaz7xpyg3rlxpjl4g63x5jq292mkxgg65zqpn5llq202vh5',
      },
      // {
      //     to: "ACRE",
      //     address: "kujira1zumrlzj7ffq0murckuzykgsvcn3xzyvn3e85fxjsymwyhezmkycqtq87zj"
      // },
      // {
      //     to: "AKT",
      //     address: "kujira1ppr63x265m0sgqdhl2k23t8hmfcgrar85rxgq45uvctksr8w8hzsqwwdcq"
      // },
      // {
      //     to: "ASTRO",
      //     address: "kujira1qqlk2773dvj8cyv3ftnzvyrknq78yryghp3uyumnumaxu656yreszrdph0"
      // },
      // {
      //     to: "xASTRO",
      //     address: "kujira1qwtjeaf0y6hn094gn3xprw7wknkl4egpkr7dqu3cljkev5ex4xfqf2h8uc"
      // },
      {
        to: 'stATOM',
        address: 'kujira18rd5fge3m8zvcw4rl94ztre2jra0srpv8d7t64aag4gzw7jkmzeqvx564r',
      },
      // {
      //     to: "AXL",
      //     address: "kujira1dtaqwlmzlk3jku5un6h6rfunttmwsqnfz7evvdf4pwr0wypsl68q49aaud"
      // },
      // {
      //     to: "CMDX",
      //     address: "kujira1h7eenquygffwsmc8csrlx88zcddwx0aqspq3x2dsl20lwk4r9n2q9t86ht"
      // },
      {
        to: 'INJ',
        address: 'kujira1ddeadmhum3umygv84frhc87gl2grzjmx9x8fuhjts7zqwuc39xuq53w3d8',
      },
      {
        to: 'STRD',
        address: 'kujira1cn922pcqrt4g2dr4va9vxk8h3w3jfxnxjqq2qp6zktjsehdzde6sz66um0',
      },
      {
        to: 'WINK',
        address: 'kujira1qxtd87qus6uzvqs4jv9r0j9ccd4yla42s6qag7y8fp7hhv68nzas6hqxgw',
      },
      {
        to: 'MNTA',
        address: 'kujira1mf4v3x3pkuthha5a4r9jd0slgulcxkucy4weuqsvx2n030twduzqewuznf',
      },
      {
        to: 'MARS',
        address: 'kujira1v8kh6mqxq7awcvl936xeyzv8fnmdkd3yxggvkyek5d0ecut4a6zs0larj2',
      },
      {
        to: 'LUNA',
        address: 'kujira1zz74gvmq6ss3pg5vgahvx47ugpfzr80qu75l97lf2ggdgxq04ddqxkdzey',
      },
      {
        to: 'wETH',
        address: 'kujira17w9r23r8v8r7z5lphwj99296fhlye9ej5nq3hlqw554u63m88avspdl9tc',
      },
      {
        to: 'WHALE',
        address: 'kujira1x38mke7q0qut5lku4zrx7wgjrsj9jn3tffadegzzcsy9s5w5mdmqzzl0sn',
      },
      {
        to: 'GRAV',
        address: 'kujira1jlyyyg0m649v75nqzm40jfdmjar9sf7rh3qnuz8yqa4345s9tqvqhxwxjq',
      },
      {
        to: 'ROAR',
        address: 'kujira1vllmvr0ylegpgg34y727kmys4yy3kjjnwj8xt3j22mdc5u4z7egs5d0sg8',
      },
      {
        to: 'gPAXG',
        address: 'kujira1rtpn4nxkx7u5y4uf5lp4ywrhmnms07p8p8wc3pmw53hfv0lhyxdqlfhgrt',
      },
      {
        to: 'wBTC',
        address: 'kujira1ulyrqqtx9vqsk92805jk7xxwz77lszmm2f548juyced96tj4lg7qugewsf',
      },
      {
        to: 'STARS',
        address: 'kujira1nm3yktzcgpnvwu6qpzqgl2ktyvlgsstc7ev849dd3ulaygw75mqqxvtnck',
      },
      {
        to: 'ARCH',
        address: 'kujira1dfafpr32hrrue43373gvnjs93gzdyuqh6rcjv23scfztu354fxdqhzvfrv',
      },
      // {
      //     to: "SHD",
      //     address: "kujira1vdv74x0w4mq2v57r4mydps89jw4wsrqtrxez3tylzqwmy972a9fssy5e3y"
      // }
      // {
      //     to: "wstETH",
      //     address: "kujira140mxwk6w70yhrgumc0fv62p6aptgwx8t3eh9v08nq252dc5ur6qsyw6gg5"
      // }
    ],
  },
  {
    code: 'ATOM',
    name: 'ATOM - CosmosHub',
    cgId: 'cosmos',
    price: 1.0,
    denom: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
    icon: (
      <div className="block w-6 h-6">
        <IconAtom
          width={24}
          height={24}
        />
      </div>
    ),
    decimals: 6,
    routes: [
      {
        to: 'KUJI',
        address: 'kujira18v47nqmhvejx3vc498pantg8vr435xa0rt6x0m6kzhp6yuqmcp8s4x8j2c',
      },
      {
        to: 'stATOM',
        address: 'kujira158zzjcvkz7r3j5hueurcw22qrjerqw4dtrzlalztr7whjykjwvrsrahdnq',
      },
      // {
      //     to: "rATOM",
      //     address: "kujira1ryul6unmsnjccsugtempgdtly3gsdtu8af44yt5sqf4zpkgg7vjqkpxjjx"
      // },
      // {
      //     to: "FRNZ",
      //     address: "kujira1e8z7d334ngww7lnqaczlcrjpwg9hc5ggcptkk7nvc7ld4tem6dgsm9h336"
      // },
      {
        to: 'axlUSDC',
        address: 'kujira1xr3rq8yvd7qplsw5yx90ftsr2zdhg4e9z60h5duusgxpv72hud3sl8nek6',
      },
      {
        to: 'USK',
        address: 'kujira1yum4v0v5l92jkxn8xpn9mjg7wuldk784ctg424ue8gqvdp88qzlqr2qp2j',
      },
      // {
      //     to: "OSMO",
      //     address: "kujira1hulx7cgvpfcvg83wk5h96sedqgn72n026w6nl47uht554xhvj9nsra5j5u"
      // }
    ],
  },
  {
    code: 'LUNA',
    name: 'LUNA - Terra 2',
    cgId: 'terra-luna-2',
    price: 1.0,
    denom: 'ibc/DA59C009A0B3B95E0549E6BF7B075C8239285989FF457A8EDDBB56F10B2A6986',
    icon: (
      <div className="block w-6 h-6">
        <IconLUNA
          width={24}
          height={24}
        />
      </div>
    ),
    decimals: 6,
    routes: [
      {
        to: 'KUJI',
        address: 'kujira1xqhakgvn3jeqfade0z4aufer9xylx7ft45fgyhg6z75mauhkjwks9cucyq',
      },
      {
        to: 'axlUSDC',
        address: 'kujira1yg8930mj8pk288lmkjex0qz85mj8wgtns5uzwyn2hs25pwdnw42skp0kur',
      },
      {
        to: 'USK',
        address: 'kujira1zz74gvmq6ss3pg5vgahvx47ugpfzr80qu75l97lf2ggdgxq04ddqxkdzey',
      },
    ],
  },
  {
    code: 'OSMO',
    name: 'OSMO - Osmosis',
    price: 1.0,
    cgId: 'osmosis',
    denom: 'ibc/47BD209179859CDE4A2806763D7189B6E6FE13A17880FE2B42DE1E6C1E329E23',
    icon: (
      <div className="block w-6 h-6">
        <OSMO
          width={24}
          height={24}
        />
      </div>
    ),
    decimals: 6,
    routes: [
      // {
      //     to: "ATOM",
      //     address: "kujira1hulx7cgvpfcvg83wk5h96sedqgn72n026w6nl47uht554xhvj9nsra5j5u"
      // },
      {
        to: 'axlUSDC',
        address: 'kujira1aakfpghcanxtc45gpqlx8j3rq0zcpyf49qmhm9mdjrfx036h4z5sfmexun',
      },
      {
        to: 'MNTA',
        address: 'kujira12zc52j25xac565t297rmd3huj8zh62usrecy66rzxnsf9mchaepqnwx3cg',
      },
    ],
  },
  {
    code: 'SHD',
    name: 'SHD - Shade Protocol',
    price: 3.599,
    cgId: 'shdtemp',
    denom: 'ibc/590CE97A3681BC2058FED1F69B613040209DF3F17B7BD31DFFB8671C4D2CD99B',
    icon: (
      <div className="block w-6 h-6">
        <IconSHD
          width={24}
          height={24}
        />
      </div>
    ),
    decimals: 8,
    routes: [
      // {
      //     to: "ATOM",
      //     address: "kujira1hulx7cgvpfcvg83wk5h96sedqgn72n026w6nl47uht554xhvj9nsra5j5u"
      // },
      {
        to: 'MNTA',
        address: 'kujira14u8ynhj7d8h2379yqj5q2ma0xxpvfjlrpauhzxgnj40ejq953mlsugux8d',
      },
      // {
      //     to: "USK",
      //     address: "kujira1vdv74x0w4mq2v57r4mydps89jw4wsrqtrxez3tylzqwmy972a9fssy5e3y"
      // }
    ],
  },
  {
    code: 'stATOM',
    name: 'stATOM - Stride Staked ATOM',
    price: 1.0,
    cgId: 'stride-staked-atom',
    denom: 'ibc/0306D6B66EAA2EDBB7EAD23C0EC9DDFC69BB43E80B398035E90FBCFEF3FD1A87',
    icon: (
      <div className="block w-6 h-6">
        <IconSTATOM
          width={24}
          height={24}
        />
      </div>
    ),
    decimals: 6,
    routes: [
      {
        to: 'ATOM',
        address: 'kujira158zzjcvkz7r3j5hueurcw22qrjerqw4dtrzlalztr7whjykjwvrsrahdnq',
      },
      {
        to: 'KUJI',
        address: 'kujira1gvfjvm09gunj9qkygvzr93ld7hux9nwa9k2t8lug8g46p4x8vt0q3xhu06',
      },
      {
        to: 'USK',
        address: 'kujira18rd5fge3m8zvcw4rl94ztre2jra0srpv8d7t64aag4gzw7jkmzeqvx564r',
      },
      {
        to: 'MNTA',
        address: 'kujira1l2x5c2fjjnw9uhrfhtme9snw3tzs4jt8cm0q2ysqssx6zskxatesjm7w7f',
      },
    ],
  },
  {
    code: 'rATOM',
    name: 'rATOM - StaFi Staked ATOM',
    cgId: 'stafi-staked-atom',
    price: 1.0,
    denom: 'ibc/CA4AC8725BA74A291623BACAA8733DCC300D2A43059FB2EDB38657D794D8C7E2',
    icon: (
      <div className="block w-6 h-6">
        <IconRATOM
          width={24}
          height={24}
        />
      </div>
    ),
    decimals: 6,
    routes: [
      // {
      //     to: "ATOM",
      //     address: "kujira1ryul6unmsnjccsugtempgdtly3gsdtu8af44yt5sqf4zpkgg7vjqkpxjjx"
      // }
    ],
  },
  {
    code: 'FRNZ',
    name: 'FRNZ - Noble Friendship Bracelet',
    price: 1.0,
    denom: 'ibc/90D9BE4D0D9BFD6AE61FCACF84765820EDA9EE795548324AD60FF416E6685ECF',
    icon: (
      <div className="block w-6 h-6">
        <IconFRNZ
          width={24}
          height={24}
        />
      </div>
    ),
    decimals: 6,
    routes: [
      // {
      //     to: "ATOM",
      //     address: "kujira1e8z7d334ngww7lnqaczlcrjpwg9hc5ggcptkk7nvc7ld4tem6dgsm9h336"
      // }
    ],
  },
  {
    code: 'ampKUJI',
    name: 'ampKUJI - Eris Staked KUJI',
    price: 1.0,
    cgId: 'eris-staked-kuji',
    denom: 'factory/kujira1n3fr5f56r2ce0s37wdvwrk98yhhq3unnxgcqus8nzsfxvllk0yxquurqty/ampKUJI',
    icon: (
      <div className="block w-6 h-6">
        <IconAMPKUJI
          width={24}
          height={24}
        />
      </div>
    ),
    decimals: 6,
    routes: [
      {
        to: 'KUJI',
        address: 'kujira1lse59wt7a5yksdd08mennt299katjkfzdhmh8hvck8ln08jktcmsxrnh8s',
      },
    ],
  },
  // {
  //     code: "LOCAL",
  //     name: "LOCAL - Local Money",
  //     price: 1.00,
  //     cgId: "local-money",
  //     denom: "factory/kujira1swkuyt08z74n5jl7zr6hx0ru5sa2yev5v896p6/local",
  //     icon: <Bitcoin width={24} height={24} />,
  //     decimals: 6,
  //     routes: [
  //         {
  //             to: "KUJI",
  //             address: "kujira17v40udkwtm9tt2wt73ejj6xh9x4ts8at6zv6nhmusdj4x6ffnl2qpep73h"
  //         }
  //     ]
  // },
  {
    code: 'stOSMO',
    name: 'stOSMO - Stride Staked OSMO',
    price: 1.0,
    cgId: 'stride-staked-osmo',
    denom: 'ibc/F97BDCE220CCB52139C73066E36C45EC7EDCEEF1DAFF891A34F4FBA195A2E6E8',
    icon: (
      <div className="block w-6 h-6">
        <IconSTOSMO
          width={24}
          height={24}
        />
      </div>
    ),
    decimals: 6,
    routes: [
      // {
      //     to: "KUJI",
      //     address: "kujira16f84qasz2nw09cy25nlzxnzxyrnhvvygym74869y5q83pev9rhdsr7emra"
      // },
      // {
      //     to: "axlUSDC",
      //     address: "kujira1yugk2n5y5059yzr7yq938nwzkz9mjgfctunhjhf0jp8tgax7t2cqag6e8c"
      // }
    ],
  },
  {
    code: 'JUNO',
    name: 'JUNO - Juno Network',
    cgId: 'juno-network',
    price: 1.0,
    denom: 'ibc/EFF323CC632EC4F747C61BCE238A758EFDB7699C3226565F7C20DA06509D59A5',
    icon: (
      <div className="block w-6 h-6">
        <IconJUNO
          width={24}
          height={24}
        />
      </div>
    ),
    decimals: 6,
    routes: [
      {
        to: 'axlUSDC',
        address: 'kujira1z7asfxkwv0t863rllul570eh5pf2zk07k3d86ag4vtghaue37l5s9epdvn',
      },
    ],
  },
  {
    code: 'LOOP',
    name: 'LOOP - LOOP Protocol',
    cgId: 'loop',
    price: 1.0,
    denom: 'ibc/8318B7E036E50C0CF799848F23ED84778AAA8749D9C0BCD4FF3F4AF73C53387F',
    icon: (
      <div className="block w-6 h-6">
        <IconLoop
          width={24}
          height={24}
        />
      </div>
    ),
    decimals: 6,
    routes: [
      // {
      //     to: "axlUSDC",
      //     address: "kujira10fqy0npt7djm8lg847v9rqlng88kqfdvl8tyt4ge204wf52sy68qwmj07l"
      // }
    ],
  },
  {
    code: 'MARS',
    name: 'MARS - Mars Protocol',
    cgId: 'mars-protocol',
    price: 1.0,
    denom: 'ibc/DBF6ABDB5F3D4267C039967515594453F4A31007FD838A566F563A01D2C2FB80',
    icon: (
      <div className="block w-6 h-6">
        <IconMars
          width={24}
          height={24}
        />
      </div>
    ),
    decimals: 6,
    routes: [
      {
        to: 'axlUSDC',
        address: 'kujira149m52kn7nvsg5nftvv4fh85scsavpdfxp5nr7zasz97dum89dp5qevttd9',
      },
      {
        to: 'USK',
        address: 'kujira1v8kh6mqxq7awcvl936xeyzv8fnmdkd3yxggvkyek5d0ecut4a6zs0larj2',
      },
    ],
  },
  {
    code: 'SCRT',
    name: 'SCRT - Secret Network',
    cgId: 'secret',
    price: 1.0,
    denom: 'ibc/A358D7F19237777AF6D8AD0E0F53268F8B18AE8A53ED318095C14D6D7F3B2DB5',
    icon: (
      <div className="block w-6 h-6">
        <SCRT
          width={24}
          height={24}
        />
      </div>
    ),
    decimals: 6,
    routes: [
      {
        to: 'axlUSDC',
        address: 'kujira1fkwjqyfdyktgu5f59jpwhvl23zh8aav7f98ml9quly62jx2sehysqa4unf',
      },
    ],
  },
  {
    code: 'STARS',
    name: 'STARS - Stargaze',
    cgId: 'stargaze',
    price: 1.0,
    denom: 'ibc/4F393C3FCA4190C0A6756CE7F6D897D5D1BE57D6CCB80D0BC87393566A7B6602',
    icon: (
      <div className="block w-6 h-6">
        <STARS
          width={24}
          height={24}
        />
      </div>
    ),
    decimals: 6,
    routes: [
      {
        to: 'USK',
        address: 'kujira1nm3yktzcgpnvwu6qpzqgl2ktyvlgsstc7ev849dd3ulaygw75mqqxvtnck',
      },
      {
        to: 'axlUSDC',
        address: 'kujira1jkte0pytr85qg0whmgux3vmz9ehmh82w40h8gaqeg435fnkyfxqq5m32qy',
      },
      {
        to: 'MNTA',
        address: 'kujira1hsdzhyvuc2z3f8d3yae84uk62d69vk68vxgudkun7gccz6hvrvfq0vx6fd',
      },
    ],
  },
  // {
  //     code: "ACRE",
  //     name: "ACRE - Arable",
  //     price: 1.00,
  //     denom: "ibc/FD021051CD0A21590CAC7907B22749B19CC8CCB6A22DE48C21FE7D9EF1EE80B7",
  //     icon: <IconACRE width={24} height={24} />,
  //     decimals: 6,
  //     routes: [
  //         {
  //             to: "USK",
  //             address: "kujira1zumrlzj7ffq0murckuzykgsvcn3xzyvn3e85fxjsymwyhezmkycqtq87zj"
  //         }
  //     ]
  // },
  {
    code: 'AKT',
    name: 'AKT - Akash Network',
    price: 1.0,
    denom: 'ibc/7023F9629A70F8112764D959D04F52EA3115A0AED3CEE59694799FD8C91A97FA',
    icon: (
      <div className="block w-6 h-6">
        <IconAKT
          width={24}
          height={24}
        />
      </div>
    ),
    decimals: 6,
    routes: [
      // {
      //     to: "USK",
      //     address: "kujira1ppr63x265m0sgqdhl2k23t8hmfcgrar85rxgq45uvctksr8w8hzsqwwdcq"
      // }
    ],
  },
  {
    code: 'ASTRO',
    name: 'ASTRO - Astroport',
    price: 1.0,
    denom: 'ibc/640E1C3E28FD45F611971DF891AE3DC90C825DF759DF8FAA8F33F7F72B35AD56',
    icon: (
      <div className="block w-6 h-6">
        <IconAstroport
          width={24}
          height={24}
        />
      </div>
    ),
    decimals: 6,
    routes: [
      // {
      //     to: "USK",
      //     address: "kujira1qqlk2773dvj8cyv3ftnzvyrknq78yryghp3uyumnumaxu656yreszrdph0"
      // },
    ],
  },
  {
    code: 'xASTRO',
    name: 'xASTRO - Staked ASTRO',
    price: 1.0,
    denom: 'ibc/1AE6C91DF755F63FB9E8393F7AE6A1725B2389730C0A46ECE247D761A72DA80D',
    icon: (
      <div className="block w-6 h-6">
        <IconAstroport
          width={24}
          height={24}
        />
      </div>
    ),
    decimals: 6,
    routes: [],
  },
  {
    code: 'AXL',
    name: 'AXL - Axelar Network',
    price: 1.0,
    denom: 'ibc/C01154C2547F4CB10A985EA78E7CD4BA891C1504360703A37E1D7043F06B5E1F',
    cgId: 'axelar',
    icon: (
      <div className="block w-6 h-6">
        <IconAXL
          width={24}
          height={24}
        />
      </div>
    ),
    decimals: 6,
    routes: [],
  },
  {
    code: 'CMDX',
    name: 'CMDX - Comdex',
    price: 1.0,
    denom: 'ibc/3607EB5B5E64DD1C0E12E07F077FF470D5BC4706AFCBC98FE1BA960E5AE4CE07',
    icon: (
      <div className="block w-6 h-6">
        <IconCMDX
          width={24}
          height={24}
        />
      </div>
    ),
    decimals: 6,
    routes: [
      // {
      //     to: "USK",
      //     address: "kujira1h7eenquygffwsmc8csrlx88zcddwx0aqspq3x2dsl20lwk4r9n2q9t86ht"
      // }
    ],
  },
  {
    code: 'CMST',
    name: 'CMST - Comdex Stablecoin',
    price: 1.0,
    denom: 'ibc/1603E8643A49AD47F536F645A4BF0E4C1E06C76F0A98CBE8054B177F1EE7C39A',
    icon: (
      <div className="block w-6 h-6">
        <IconCMST
          width={24}
          height={24}
        />
      </div>
    ),
    decimals: 6,
    routes: [
      // {
      //     to: "USK",
      //     address: "kujira1qw5hdcmcf4aq5xmnu6znscurvkgvhxfsyvhz3jvxhasxjwtk3l7sccwcs8"
      // }
    ],
  },
  {
    code: 'GRAV',
    name: 'GRAV - Gravity Bridge',
    price: 1.0,
    cgId: 'graviton',
    denom: 'ibc/D20559F0071F4BFDFF519D0C12B77AFE2A4481D44214BD92808B0C36B1E223C9',
    icon: (
      <div className="block w-6 h-6">
        <IconGRAV
          width={24}
          height={24}
        />
      </div>
    ),
    decimals: 6,
    routes: [
      {
        to: 'USK',
        address: 'kujira1jlyyyg0m649v75nqzm40jfdmjar9sf7rh3qnuz8yqa4345s9tqvqhxwxjq',
      },
    ],
  },
  // {
  //     code: "CNTO",
  //     name: "CNTO - CANTO",
  //     price: 1.00,
  //     denom: "ibc/BF603AD88AA4C36FC8CA99F6D703CA1D7D437A1EA97023A73A8BA4437A05ABDF",
  //     icon: <Bitcoin width={24} height={24} />,
  //     decimals: 6,
  //     routes: [
  //         {
  //             to: "USK",
  //             address: "kujira1642dp8q7gzm5g5csdz2k676rc5zqfka4hfnas9ffydffp0saspts0e9zgp"
  //         }
  //     ]
  // },
  // {
  //     code: "CRE",
  //     name: "CRE - Crescent Network",
  //     price: 1.00,
  //     denom: "ibc/E41F596AC5F1BF0298758CC40CBF1DB2DA0615F10BF28E4D9E82B9EEE7A0DBF2",
  //     icon: <Bitcoin width={24} height={24} />,
  //     decimals: 6,
  //     routes: [
  //         {
  //             to: "USK",
  //             address: "kujira1nu8kef49y0pdrkphtkt857tgtt0pe8nr8ms0pnp6lylrav9jq2asmjljhe"
  //         }
  //     ]
  // },
  {
    code: 'wETH',
    name: 'wETH - Wrapped Ether',
    cgId: 'weth',
    price: 1.0,
    denom: 'ibc/1B38805B1C75352B28169284F96DF56BDEBD9E8FAC005BDCC8CF0378C82AA8E7',
    icon: (
      <div className="block w-6 h-6">
        <EthereumDark
          width={24}
          height={24}
        />
      </div>
    ),
    decimals: 18,
    routes: [
      {
        to: 'USK',
        address: 'kujira17w9r23r8v8r7z5lphwj99296fhlye9ej5nq3hlqw554u63m88avspdl9tc',
      },
      {
        to: 'axlUSDC',
        address: 'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh',
      },
      {
        to: 'KUJI',
        address: 'kujira1zdf0zjz8grfhhe2x06k8f8xpnv04y90w06f4py7fjml4nmukn3yswk3ugc',
      },
      {
        to: 'wstETH',
        address: 'kujira1ehwsdvgs3chpxuexktymjmmjj68m3h4q67p9vjj9rrgjqycc3gtsfzej24',
      },
      // {
      //     to: "wstETH",
      //     address: "kujira1ehwsdvgs3chpxuexktymjmmjj68m3h4q67p9vjj9rrgjqycc3gtsfzej24"
      // }
    ],
  },
  {
    code: 'INJ',
    name: 'INJ - Injective Network',
    price: 1.0,
    cgId: 'injective-protocol',
    denom: 'ibc/5A3DCF59BC9EC5C0BB7AA0CA0279FC2BB126640CB8B8F704F7BC2DC42495041B',
    icon: (
      <div className="block w-6 h-6">
        <IconINJ
          width={24}
          height={24}
        />
      </div>
    ),
    decimals: 18,
    routes: [
      {
        to: 'USK',
        address: 'kujira1ddeadmhum3umygv84frhc87gl2grzjmx9x8fuhjts7zqwuc39xuq53w3d8',
      },
    ],
  },
  {
    code: 'STRD',
    name: 'STRD - Stride',
    price: 1.0,
    denom: 'ibc/239BFF83852F67DF5243DB89F339FF7FDBF858437F961CAB6DA5B5ADEFB2BC07',
    cgId: 'stride',
    icon: (
      <div className="block w-6 h-6">
        <IconSTRD
          width={24}
          height={24}
        />
      </div>
    ),
    decimals: 6,
    routes: [
      {
        to: 'USK',
        address: 'kujira1cn922pcqrt4g2dr4va9vxk8h3w3jfxnxjqq2qp6zktjsehdzde6sz66um0',
      },
    ],
  },
  {
    code: 'WHALE',
    name: 'WHALE - White Whale',
    price: 1.0,
    cgId: 'white-whale',
    denom: 'ibc/21F041CFE99994E0D027D0C5F72A9EB6224CBCAF5A6AD5DDB75F67A781D46C68',
    icon: (
      <div className="block w-6 h-6">
        <IconWHALE
          width={24}
          height={24}
        />
      </div>
    ),
    decimals: 6,
    routes: [
      {
        to: 'USK',
        address: 'kujira1x38mke7q0qut5lku4zrx7wgjrsj9jn3tffadegzzcsy9s5w5mdmqzzl0sn',
      },
    ],
  },
  {
    code: 'ROAR',
    name: 'ROAR - LionDAO',
    price: 1.0,
    cgId: 'lion-dao',
    denom: 'ibc/31ED168F5E93D988FCF223B1298113ACA818DB7BED8F7B73764C5C9FAC293609',
    icon: (
      <div className="block w-6 h-6">
        <IconROAR
          width={24}
          height={24}
        />
      </div>
    ),
    decimals: 6,
    routes: [
      {
        to: 'USK',
        address: 'kujira1vllmvr0ylegpgg34y727kmys4yy3kjjnwj8xt3j22mdc5u4z7egs5d0sg8',
      },
    ],
  },
  {
    code: 'gPAXG',
    name: 'gPAXG - Gravity Bridged Paxos Gold',
    price: 1.0,
    cgId: 'pax-gold',
    denom: 'ibc/B4DCACF7753C05040AF0A7BF2B583402C4B8C9B0A86FCECE32EF63CB7F0A46B3',
    icon: (
      <div className="block w-6 h-6">
        <IconPAXG
          width={24}
          height={24}
        />
      </div>
    ),
    decimals: 18,
    routes: [
      {
        to: 'axlUSDC',
        address: 'kujira12p30cr4gstmp2yucwxtaq92turrzsxxar8upz3rhmfjxh6gdgk4s5vsyse',
      },
      {
        to: 'USK',
        address: 'kujira1rtpn4nxkx7u5y4uf5lp4ywrhmnms07p8p8wc3pmw53hfv0lhyxdqlfhgrt',
      },
    ],
  },
  {
    code: 'wBTC',
    name: 'wBTC - Wrapped Bitcoin',
    price: 1.0,
    cgId: 'wrapped-bitcoin',
    denom: 'ibc/301DAF9CB0A9E247CD478533EF0E21F48FF8118C4A51F77C8BC3EB70E5566DBC',
    icon: (
      <div className="block w-6 h-6">
        <Bitcoin
          width={24}
          height={24}
        />
      </div>
    ),
    decimals: 8,
    routes: [
      {
        to: 'axlUSDC',
        address: 'kujira12jdezs3kk6y04q3fnl7kq5567pcw0zfr7j0yfsxjqgggdkktut9s2gm7cm',
      },
      {
        to: 'USK',
        address: 'kujira1ulyrqqtx9vqsk92805jk7xxwz77lszmm2f548juyced96tj4lg7qugewsf',
      },
      {
        to: 'KUJI',
        address: 'kujira17t9w0xlnukuy7pw6fzkr7gd3pdun9zma0hzqaueqszskw2lr95yqfqnynt',
      },
      {
        to: 'MNTA',
        address: 'kujira1y50nul39ql5sf42p67nrsy9j0luly2mvaxmlkmx6888pnzw66k6qc0gku9',
      },
    ],
  },
  {
    code: 'ARCH',
    name: 'ARCH - Archway',
    price: 1.0,
    cgId: 'archway',
    denom: 'ibc/950993C6DA64F5A60A48D65A18CAB2D8190DE2DC1B861E70E8B03C61F7D5FBDC',
    icon: (
      <div className="block w-6 h-6">
        <IconARCH
          width={24}
          height={24}
        />
      </div>
    ),
    decimals: 18,
    routes: [
      {
        to: 'USK',
        address: 'kujira1dfafpr32hrrue43373gvnjs93gzdyuqh6rcjv23scfztu354fxdqhzvfrv',
      },
    ],
  },
  {
    code: 'wstETH',
    name: 'wstETH - Wrapped Staked ETH',
    cgId: 'wrapped-steth',
    price: 1.0,
    denom: 'ibc/B572E6F30E7C33D78A50D8B4E973A9C118C30F848DF31A95FAA5E4C7450A8BD0',
    icon: (
      <IconwstETH
        width={24}
        height={24}
      />
    ),
    decimals: 18,
    routes: [
      // {
      //     to: "USK",
      //     address: "kujira140mxwk6w70yhrgumc0fv62p6aptgwx8t3eh9v08nq252dc5ur6qsyw6gg5"
      // },
      {
        to: 'MNTA',
        address: 'kujira1hf44at7dqewrn3ssa392d9p8nh5mr538u59gqsukdza35663hlestqr29e',
      },
      {
        to: 'wETH',
        address: 'kujira1ehwsdvgs3chpxuexktymjmmjj68m3h4q67p9vjj9rrgjqycc3gtsfzej24',
      },
      // {
      //     to: "wETH",
      //     address: "kujira1ehwsdvgs3chpxuexktymjmmjj68m3h4q67p9vjj9rrgjqycc3gtsfzej24"
      // }
    ],
  },
  {
    code: 'WINK',
    name: 'WINK - WinkHUB',
    price: 1.0,
    cgId: 'winkhub',
    denom: 'factory/kujira12cjjeytrqcj25uv349thltcygnp9k0kukpct0e/uwink',
    icon: (
      <div className="block w-6 h-6">
        <IconWINK
          width={24}
          height={24}
        />
      </div>
    ),
    decimals: 6,
    routes: [
      {
        to: 'USK',
        address: 'kujira1qxtd87qus6uzvqs4jv9r0j9ccd4yla42s6qag7y8fp7hhv68nzas6hqxgw',
      },
    ],
  },

  //BOW Denoms
  {
    code: 'KUJI/ATOM LP',
    name: 'KUJI/ATOM LP',
    price: 1.0,
    denom: 'factory/kujira13y8hs83sk0la7na2w5g5nzrnjjpnkvmd7e87yd35g8dcph7dn0ksenay2a/ulp',
    icon: (
      <div className="relative w-10 h-6">
        <div className="absolute w-6 h-6">
          <Kujira
            width={24}
            height={24}
          />
        </div>
        <div className="absolute w-6 h-6 right-0">
          <IconAtom
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
    code: 'ATOM/USK LP',
    name: 'ATOM/USK LP',
    price: 1.0,
    denom: 'factory/kujira1yncutssgh2vj9scaymtteg949hwcft07c6qmgarxnaf04yesq3jsn6g2uv/ulp',
    icon: (
      <div className="relative w-10 h-6">
        <div className="absolute w-6 h-6">
          <IconAtom
            width={24}
            height={24}
          />
        </div>
        <div className="absolute w-6 h-6 right-0">
          <IconUSK
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
    code: 'KUJI/USK LP',
    name: 'KUJI/USK LP',
    price: 1.0,
    denom: 'factory/kujira1g9xcvvh48jlckgzw8ajl6dkvhsuqgsx2g8u3v0a6fx69h7f8hffqaqu36t/ulp',
    icon: (
      <div className="relative w-10 h-6">
        <div className="absolute w-6 h-6">
          <Kujira
            width={24}
            height={24}
          />
        </div>
        <div className="absolute w-6 h-6 right-0">
          <IconUSK
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
    code: 'axlUSDC/USK LP',
    name: 'axlUSDC/USK LP',
    price: 1.0,
    denom: 'factory/kujira12506pfme6layua70svszn2xza0pt9mnqu2u24lszrdyywmpvnw5qfz8sfq/ulp',
    icon: (
      <div className="relative w-10 h-6">
        <div className="absolute w-6 h-6">
          <IconUSK
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
    code: 'KUJI/axlUSDC LP',
    name: 'KUJI/axlUSDC LP',
    price: 1.0,
    denom: 'factory/kujira1sx99fxy4lqx0nv3ys86tkdrch82qygxyec5c8dxsk9raz4at5zpq72gypx/ulp',
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
    code: 'ampKUJI/KUJI LP',
    name: 'ampKUJI/KUJI LP',
    price: 1.0,
    denom: 'factory/kujira13a7yxnw9wvzsh7s59c2sm642eps3jwlta5h2rwtag6vs67rna5fsykqca7/ulp',
    icon: (
      <div className="relative w-10 h-6">
        <div className="absolute w-6 h-6">
          <IconAMPKUJI
            width={24}
            height={24}
          />
        </div>
        <div className="absolute w-6 h-6 right-0">
          <Kujira
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
    code: 'LUNA/USK LP',
    name: 'LUNA/USK LP',
    price: 1.0,
    denom: 'factory/kujira1y0v5znl0ucc6nsdalr9xeg0r3zyw44yn0uyd8tsgc8gl4j8stjcs9vmmr7/ulp',
    icon: (
      <div className="relative w-10 h-6">
        <div className="absolute w-6 h-6">
          <IconLUNA
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
    code: 'ATOM/axlUSDC LP',
    name: 'ATOM/axlUSDC LP',
    price: 1.0,
    denom: 'factory/kujira14wv3whn3v9sgf8r0dm7a46v7m7pukhs87x73e0ude3ktuzztfj9qxndumz/ulp',
    icon: (
      <div className="relative w-10 h-6">
        <div className="absolute w-6 h-6">
          <IconAtom
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
    code: 'MNTA/axlUSDC LP',
    name: 'MNTA/axlUSDC LP',
    price: 1.0,
    denom: 'factory/kujira1w2tzxxsz44gnsf7m7q9xxe04panfrsnyhq33mgu26mddzcec3nvq6vh5c5/ulp',
    icon: (
      <div className="relative w-10 h-6">
        <div className="absolute w-6 h-6">
          <Manta
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
    code: 'MNTA/USK LP',
    name: 'MNTA/USK LP',
    price: 1.0,
    denom: 'factory/kujira1xtaadmh06s8u3z5mypp8qayhrnxgga5wr88s7raram4rz8zu37hquf82wk/ulp',
    icon: (
      <div className="relative w-10 h-6">
        <div className="absolute w-6 h-6">
          <Manta
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
    code: 'MNTA/KUJI LP',
    name: 'MNTA/KUJI LP',
    price: 1.0,
    denom: 'factory/kujira1h75predtjdm2e7u8cuvqs3usc6xs2mxlkcr20zsshvw3qap25frsr4z949/ulp',
    icon: (
      <div className="relative w-10 h-6">
        <div className="absolute w-6 h-6">
          <Manta
            width={24}
            height={24}
          />
        </div>
        <div className="absolute w-6 h-6 right-0">
          <Kujira
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
    code: 'GRAV/USK LP',
    name: 'GRAV/USK LP',
    price: 1.0,
    denom: 'factory/kujira1xnyrh5tyaeu5vq8ylamtrp06z9zsxvxqsr5n4h7xy50ztwvkt69sqv7mke/ulp',
    icon: (
      <div className="relative w-10 h-6">
        <div className="absolute w-6 h-6">
          <IconGRAV
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
    code: 'wETH/axlUSDC LP',
    name: 'wETH/axlUSDC LP',
    price: 1.0,
    denom: 'factory/kujira1ngqlypl5h0mkgxmk4why878eq4y5yh6yhdtrw8hdxfz202xluzrs097qn5/ulp',
    icon: (
      <div className="relative w-10 h-6">
        <div className="absolute w-6 h-6">
          <EthereumDark
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
    code: 'wETH/USK LP',
    name: 'wETH/USK LP',
    price: 1.0,
    denom: 'factory/kujira1xwvvjq5w0887v2vz4e83kcu38s0jq8q8lqa3z5hxm295q7y4uejqp24la7/ulp',
    icon: (
      <div className="relative w-10 h-6">
        <div className="absolute w-6 h-6">
          <EthereumDark
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
    code: 'ROAR/USK LP',
    name: 'ROAR/USK LP',
    price: 1.0,
    denom: 'factory/kujira1u986p79p6x2rudytvkt2k303y65dukcjn26clvejnw63ns2wenvqj63mhm/ulp',
    icon: (
      <div className="relative w-10 h-6">
        <div className="absolute w-6 h-6">
          <IconROAR
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
    code: 'stATOM/MNTA LP',
    name: 'stATOM/MNTA LP',
    price: 1.0,
    denom: 'factory/kujira1jj4tkucqrmtsya40gdhkh5h2hdkldhjv0r8m6ysvlphl8fl632pqtgx2kx/ulp',
    icon: (
      <div className="relative w-10 h-6">
        <div className="absolute w-6 h-6">
          <IconSTATOM
            width={24}
            height={24}
          />
        </div>
        <div className="absolute w-6 h-6 right-0">
          <Manta
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
    code: 'wstETH/MNTA LP',
    name: 'wstETH/MNTA LP',
    price: 1.0,
    denom: 'factory/kujira1qx3hcr297qmgjt5f6u9peldf4phxqufvmew8d3eey3ns29e8qp3snj6jfu/ulp',
    icon: (
      <div className="relative w-10 h-6">
        <div className="absolute w-6 h-6">
          <IconwstETH
            width={24}
            height={24}
          />
        </div>
        <div className="absolute w-6 h-6 right-0">
          <Manta
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
    code: 'wBTC/MNTA LP',
    name: 'wBTC/MNTA LP',
    price: 1.0,
    denom: 'factory/kujira1vj39mdwekxznxxa97fv5gt957cghfdqhwju8fdv5ysu0x6vsyhps4zmqjl/ulp',
    icon: (
      <div className="relative w-10 h-6">
        <div className="absolute w-6 h-6">
          <Bitcoin
            width={24}
            height={24}
          />
        </div>
        <div className="absolute w-6 h-6 right-0">
          <Manta
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
    code: 'STARS/MNTA LP',
    name: 'STARS/MNTA LP',
    price: 1.0,
    denom: 'factory/kujira1av284rnqh6s0l2lwdqgpgz8wuva3wh9lkmlsupjd9escn5v4fels6kwc7v/ulp',
    icon: (
      <div className="relative w-10 h-6">
        <div className="absolute w-6 h-6">
          <STARS
            width={24}
            height={24}
          />
        </div>
        <div className="absolute w-6 h-6 right-0">
          <Manta
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
    code: 'SHD/MNTA LP',
    name: 'SHD/MNTA LP',
    price: 1.0,
    denom: 'factory/kujira12tpc335t72qtrjh64ccdydzsr9qtswkqn72cyvfj4d5hmtgynphsv4xjtu/ulp',
    icon: (
      <div className="relative w-10 h-6">
        <div className="absolute w-6 h-6">
          <IconSHD
            width={24}
            height={24}
          />
        </div>
        <div className="absolute w-6 h-6 right-0">
          <Manta
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
    code: 'OSMO/MNTA LP',
    name: 'OSMO/MNTA LP',
    price: 1.0,
    denom: 'factory/kujira1ygperwf0dc9ng2jffj0pwnnray3rscn9el6d78qjtt25qwgqukqszmdwtv/ulp',
    icon: (
      <div className="relative w-10 h-6">
        <div className="absolute w-6 h-6">
          <OSMO
            width={24}
            height={24}
          />
        </div>
        <div className="absolute w-6 h-6 right-0">
          <Manta
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
    return getTokenByCode('');
  }

  return token;
}

export interface Token {
  code: string;
  name: string;
  cgId?: string;
  denom: string;
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
