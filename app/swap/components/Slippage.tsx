import { useState } from 'react';
import DialogModal from '@/app/components/ui/Dialog';
import Button from '@/app/components/ui/Button';
import HSliders from '@/app/components/icons/HSliders';
import BaseCard from '@/app/components/cards/Base';
import { XMarkIcon } from '@heroicons/react/20/solid';
import useTokenStore from '@/store/tokenStore';
import InputWrap from '@/app/components/forms/InputWrap';

const SlippageControl = () => {
  const [open, setOpen] = useState(false);
  const [customSlippage, setCustomSlippage] = useState(false); // Initial custom slippage value
  const { slippage, setSlippage } = useTokenStore(); // default slippage = "0.3%"

  const handleSlippageChange = (newSlippage: any) => {
    setSlippage(newSlippage);
    // setOpen(false); // Close the modal after selecting slippage
  };

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        size="xs"
      >
        <HSliders className="w-[13px]" />
        <span className="text-sm">{slippage}%</span>
      </Button>

      <DialogModal
        isOpen={open}
        onClose={() => setOpen(false)}
        className="text-left"
      >
        <Button
          onClick={() => setOpen(false)}
          size="icon"
          className="absolute top-4 right-4"
        >
          <XMarkIcon className="w-4" />
        </Button>
        <div className="w-[90%] flex flex-col gap-1">
          <h4>Slippage Control</h4>
          <p className="w-full">Select slippage below:</p>
        </div>
        <BaseCard className="p-2 flex gap-1">
          <Button
            size="sm"
            variant={slippage === '0.1' ? 'primary' : 'neutral'}
            className={`grow`}
            onClick={() => (handleSlippageChange('0.1'), setCustomSlippage(false))}
          >
            0.1%
          </Button>
          <Button
            size="sm"
            className={`grow `}
            variant={slippage === '0.3' ? 'primary' : 'neutral'}
            onClick={() => (handleSlippageChange('0.3'), setCustomSlippage(false))}
          >
            0.3%
          </Button>
          <Button
            size="sm"
            className={`grow `}
            variant={slippage === '1' ? 'primary' : 'neutral'}
            onClick={() => (handleSlippageChange('1'), setCustomSlippage(false))}
          >
            1%
          </Button>
          <Button
            size="sm"
            className={`grow`}
            variant={customSlippage === true ? 'primary' : 'neutral'}
            onClick={() => (setCustomSlippage(true), setSlippage('3'))}
          >
            Custom
          </Button>
        </BaseCard>
        {customSlippage && (
          <div className="mt-2">
            <InputWrap>
              <input
                type="number"
                value={slippage}
                onChange={(e) => setSlippage(e.target.value)}
                className="w-full text-center"
              />
              %
            </InputWrap>
          </div>
        )}
      </DialogModal>
    </>
  );
};

export default SlippageControl;
