'use client';

import { motion } from 'framer-motion';

type BaseCardProps = {
  className?: string; // Prop type for additional class names
  children?: React.ReactNode; // Prop type for children
  type?: 1 | 2; // Prop type for card type, only accepts 1 or 2
};

const BaseCard: React.FC<BaseCardProps> = ({ className, children, type = 1 }) => {
  // Validate the type prop to ensure it's either 1 or 2
  if (type !== 1 && type !== 2) {
    throw new Error("Invalid 'type' prop value. Use either 1 or 2.");
  }

  const cardClasses = `rounded shadow-c1 border-gradient backdrop-blur-lg ${className}`;
  const cardTypeClasses = {
    1: `bg-surface-c1 ${cardClasses}`,
    2: `bg-surface-c2 ${cardClasses}`,
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, translateY: 10 }}
      animate={{ opacity: 1, scale: 1, translateY: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className={cardTypeClasses[type]}>{children}</div>
    </motion.div>
  );
};

export default BaseCard;
