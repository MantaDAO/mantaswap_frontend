'use client';
import React, { useState } from 'react';
import BaseCard from '@/app/components/cards/Base';
import Button from '@/app/components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion'; // Import AnimatePresence
import SwapDetailLine from '@/app/components/cards/SwapDetailLine';

const SwapDetails = ({ details }: { details: { label: string; value: string }[] }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <BaseCard>
      <div>
        {/* Wrap the expanded_details with AnimatePresence */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              className="expanded_details flex flex-col gap-2 p-5"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              {details.map((detail, index) => (
                <SwapDetailLine
                  key={index}
                  label={detail.label}
                  value={detail.value}
                />
              ))}
              <Button
                onClick={toggleExpanded}
                className="mt-4"
              >
                Minimize details
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
        {!expanded && (
          <div
            onClick={toggleExpanded}
            className="px-[16px] h-[40px] flex items-center justify-center font-medium cursor-pointer"
          >
            Expand details
          </div>
        )}
      </div>
    </BaseCard>
  );
};

export default SwapDetails;
