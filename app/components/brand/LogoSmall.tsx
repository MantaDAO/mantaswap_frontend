'use client';
import logoSVG from '@/assets/img/logo.svg';
import Image from 'next/image';
import Link from 'next/link';

const LogoSm = () => {
  return (
    <div className="flex items-center">
      <Link href="/">
        <Image
          src={logoSVG}
          alt="MantaSwap"
          width={100}
          height={30}
          className="-mt-0.5"
        />
      </Link>
    </div>
  );
};

export default LogoSm;
