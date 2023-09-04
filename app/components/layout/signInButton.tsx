'use client';

import Button from '../ui/Button';
import { useAtom } from 'jotai';
import { demoSignedIn } from '@/store/atoms';

const DemoSignInButton = () => {
  const [signedIn, setSignedIn] = useAtom(demoSignedIn);
  return (
    <Button
      className="bottom-0 right-0 mr-5 mb-5"
      onClick={() => setSignedIn(!signedIn)}
    >
      Sign in toggle
    </Button>
  );
};

export default DemoSignInButton;
