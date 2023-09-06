'use client';

import Button from '../ui/Button';
import useAuthStore from '@/store/authStore';

const DemoSignInButton = () => {
  const { signedIn, setSignedIn } = useAuthStore();
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
