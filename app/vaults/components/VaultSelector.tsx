import BaseCard from '@/app/components/cards/Base';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface VaultSelectorProps {
  className?: string;
}

const VaultSelector: React.FC<VaultSelectorProps> = ({ className }) => {
  return (
    <BaseCard
      type={3}
      className={`flex p-3 gap-2 items-center h-[44px] ${className}`}
    >
      <img
        src="/img/icons/kujira.webp"
        alt="Kujira"
        className="border rounded-full w-5 h-5"
      />
      <span className="token_name text-header text-base">Kujira</span>
      <ChevronDownIcon className="w-4 ml-auto" />
    </BaseCard>
  );
};

export default VaultSelector;
