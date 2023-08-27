'use client';

import Logo from '../brand/Logo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import IconSwap from '../icons/Swap';
import IconBridge from '../icons/Bridge';
import IconRewards from '../icons/Rewards';
import IconVaults from '../icons/Vaults';
import ActiveGraphic from '@/assets/img/navActiveGfk.png';
import Image from 'next/image';
import { Transition } from '@headlessui/react';
import Button from '../ui/Button';
import ChainSelector from './ChainSelector';

type NavItem = {
  label: string;
  icon: any;
  href: string;
};

const navItems: Record<string, NavItem> = {
  swap: {
    label: 'Swap',
    icon: IconSwap,
    href: '/',
  },
  vaults: {
    label: 'Vaults',
    icon: IconVaults,
    href: 'vaults',
  },
  rewards: {
    label: 'Rewards',
    icon: IconRewards,
    href: 'rewards',
  },
  bridge: {
    label: 'Bridge',
    icon: IconBridge,
    href: 'bridge',
  },
};

const Nav = () => {
  const pathname = usePathname();
  return (
    <>
      <div className="w-full h-[68px] absolute backdrop-blur-lg bg-surface-nav z-10">
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#3D3D56] to-transparent"></div>
        <div className="nav-inner w-full h-full flex items-center justify-between px-5">
          <Logo />
          <nav className="h-full overflow-hidden px-10">
            <ul className="flex h-full">
              {Object.keys(navItems).map((key) => {
                const { label, icon: IconComponent, href } = navItems[key];
                const isActive =
                  (pathname === '/' && href === '/') ||
                  (pathname.startsWith(`/${href}`) && href !== '/');

                return (
                  <li
                    key={key}
                    className={`h-full relative ${isActive ? 'active' : ''}`}
                  >
                    <Transition
                      show={isActive}
                      enter="transition-opacity duration-[1000ms]"
                      enterFrom="opacity-0 translate-y-full"
                      enterTo="opacity-100"
                      leave="transition-opacity duration-[800ms]"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0 translate-y-1/2 duration-[800ms]"
                    >
                      <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 w-[200%] h-[200%] z-0">
                        <Image
                          src={ActiveGraphic}
                          layout="fill"
                          alt={label}
                          objectFit="cover"
                        />
                      </div>
                    </Transition>
                    <Link
                      href={`/${href}`}
                      className="flex gap-2 h-full px-7 items-center relative group"
                    >
                      <IconComponent
                        fill="currentColor"
                        className={`w-4 group-hover:text-body t1 ${
                          isActive ? 'text-tertiary' : 'text-body-2'
                        }`}
                      />
                      <div
                        className={`t1 group-hover:text-header font-medium ${
                          isActive ? 'text-header' : 'text-body'
                        }`}
                      >
                        {label}
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="flex items-center gap-2">
            <ChainSelector />
            <Button variant="primary">Connect</Button>
          </div>
        </div>
      </div>
      <div className="w-full h-[68px]"></div>
    </>
  );
};

export default Nav;
