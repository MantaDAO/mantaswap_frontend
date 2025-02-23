import '@/styles/app.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Nav from './components/layout/Nav';
import DemoSignInButton from './components/layout/signInButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MantaSwap by MantaDAO',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/favicon.png"
          sizes="any"
        />
      </head>
      <body className={inter.className}>
        <div className="fixed bottom-0 w-[60vw] h-[50vw] opacity-10 left-0">
          <div className="radial-circle w-[1200px] h-[1200px] top-0 right-0 absolute"></div>
        </div>
        <Nav />
        <div className="w-full py-5 sm:py-12 flex flex-col relative z-0 px-5">{children}</div>

        <div className="px-5 flex items-center justify-center">
          <DemoSignInButton />
        </div>
      </body>
    </html>
  );
}
