import BaseCard from '@/app/components/cards/Base';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import useChainStore from '@/store/chainStore';

interface VaultSelectorProps {
  className?: string;
  identifier?: string;
  chains: any;
}

const VaultSelector: React.FC<VaultSelectorProps> = ({ className, identifier = 'to', chains }) => {
  const [open, setOpen] = useState(false);
  const { chainFrom, chainTo, setChainFrom, setChainTo } = useChainStore();

  let thisChain: any;
  let setThisChain: any;

  if (identifier === 'to') {
    thisChain = chainTo;
    setThisChain = setChainTo;
  } else {
    thisChain = chainFrom;
    setThisChain = setChainFrom;
  }

  const handleChainChange = (chain: any) => {
    if (identifier === 'to' && chain === chainFrom) {
      // Swap if 'to' is the active identifier and the selected chain is the same as chainFrom
      setChainFrom(chainTo);
      setChainTo(chain);
    } else if (identifier !== 'to' && chain === chainTo) {
      // Swap if 'from' is the active identifier and the selected chain is the same as chainTo
      setChainTo(chainFrom);
      setChainFrom(chain);
    } else {
      // Otherwise, update the active chain
      setThisChain(chain);
    }
    setOpen(false);
  };

  return (
    <div className="w-full relative">
      <BaseCard
        type={2}
        className={`flex p-3 gap-2 items-center h-[44px] relative cursor-pointer hover:bg-surface-c3 ${className}`}
        onClick={() => setOpen(!open)}
      >
        <img
          src={thisChain.icon}
          alt={thisChain.name}
          className="border rounded-full w-5 h-5"
        />
        <span className="token_name text-header text-base">{thisChain.name}</span>
        <ChevronDownIcon className="w-4 ml-auto" />
      </BaseCard>
      {open && (
        <BaseCard className="absolute left-0 w-[265px] p-4 top-full mt-2 z-30">
          {chains.map((chain: any) => (
            <BaseCard
              key={chain.id}
              type={4}
              className={`flex items-center gap-2 p-2 rounded cursor-pointer hover:bg-surface-c3 border-transparent border hover:border ${
                thisChain === chain ? 'hidden' : '' // Add styles for the active chain
              }`}
              onClick={() => handleChainChange(chain)}
            >
              <img
                src={chain.icon}
                alt={chain.name}
                className="border rounded-full w-5 h-5"
              />
              <span className="token_name text-header text-base">{chain.name}</span>
            </BaseCard>
          ))}
        </BaseCard>
      )}
    </div>
  );
};

export default VaultSelector;
