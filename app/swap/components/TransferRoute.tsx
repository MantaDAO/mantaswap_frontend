'use client';

import React, { useState } from 'react';
import BaseCard from '@/app/components/cards/Base';
import Button from '@/app/components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

// Define a TypeScript type for the item within the swap route.
type SwapRouteItem = {
  tokenId: string;
  percentage?: number;
  img?: string;
};

// Define a TypeScript type for the swap route array.
type SwapRoute = SwapRouteItem[][];

interface RowProps {
  items: SwapRouteItem[];
}

const Row: React.FC<RowProps> = ({ items }) => (
  <div className="flex items-center w-full justify-between gap-3">
    {items.map((item, itemIndex) => (
      <React.Fragment key={itemIndex}>
        <div className="flex items-center gap-1">
          <img
            src={item.img}
            alt={item.tokenId}
            className="w-6"
          />
          {item.percentage && <span className="text-sm">{item.percentage}%</span>}
        </div>
        {itemIndex < items.length - 1 && (
          <div
            key={`divider-${itemIndex}`}
            className="border-b border-dashed grow border-body-2"
          />
        )}
      </React.Fragment>
    ))}
  </div>
);

interface TransferRouteProps {
  transferRoute: SwapRoute;
}

const showMoreVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: 'auto' },
};

const TransferRoute: React.FC<TransferRouteProps> = ({ transferRoute }) => {
  const [showRows, setShowRows] = useState(false);

  const toggleRows = () => {
    setShowRows(!showRows);
  };

  return (
    <BaseCard
      className="p-5"
      type={2}
    >
      <Row items={transferRoute[0]} />
      <AnimatePresence initial={false}>
        {showRows && (
          <motion.div
            key="showMore"
            className="mt-4 flex flex-col gap-4 overflow-hidden"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={showMoreVariants}
          >
            {transferRoute.slice(1).map((route, index) => (
              <Row
                key={index}
                items={route}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      {!showRows && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Button
            size="xxs"
            onClick={toggleRows}
            className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 backdrop-blur"
          >
            Show more
          </Button>
        </motion.div>
      )}
      {showRows && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Button
            size="xxs"
            onClick={() => setShowRows(false)}
            className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2"
          >
            Show less
          </Button>
        </motion.div>
      )}
    </BaseCard>
  );
};

export default TransferRoute;
