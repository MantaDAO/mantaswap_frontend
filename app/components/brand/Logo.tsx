'use client';
import logoSVG from '@/assets/img/logo.svg';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <div className="flex items-center">
      <Link href="/">
        <div className="overflow-hidden flex flex-col gap-0 h-[30px] w-[140px] justify-start t1 group">
          <div className="h-[60px] group-hover:-mt-[31px] t1">
            <Image
              src={logoSVG}
              alt="MantaSwap"
              width={139}
              height={30}
              className="-mt-0.5"
            />
            <Image
              src={logoSVG}
              alt="MantaSwap"
              width={139}
              height={30}
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
