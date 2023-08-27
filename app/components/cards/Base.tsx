'use client';

import { motion } from 'framer-motion';

type BaseCardProps = {
  className?: string; // Prop type for additional class names
  children?: React.ReactNode; // Prop type for children
  type?: number; // Prop type for card type
};

const BaseCard: React.FC<BaseCardProps> = ({ className, children, type = 1 }) => {
  const type1 = `bg-surface-c1 rounded shadow-c1 border-gradient backdrop-blur-lg ${className}`;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, translateY: 10 }}
      animate={{ opacity: 1, scale: 1, translateY: 0 }}
      transition={{ duration: 0.3 }}
      // className="w-full mx-auto items-center justify-center flex"
    >
      <div className={type1}>{children}</div>
    </motion.div>
  );
};

export default BaseCard;
