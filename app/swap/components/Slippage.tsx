'use client';

import { useState } from 'react';
import DialogModal from '@/app/components/ui/Dialog';

import Button from '@/app/components/ui/Button';
import HSliders from '@/app/components/icons/HSliders';
const SlippageControl = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        size="xs"
      >
        <HSliders className="w-[13px]" />
        <span className="text-sm">0.3%</span>
      </Button>

      <DialogModal
        isOpen={open}
        onClose={() => setOpen(false)}
      >
        Content
      </DialogModal>
    </>
  );
};

export default SlippageControl;
