'use client';

import { motion } from 'framer-motion';

type BaseCardProps = {
  className?: string; // Prop type for additional class names
  children?: React.ReactNode; // Prop type for children
  type?: 1 | 2 | 3 | 4 | 5; // Prop type for card type, only accepts 1 or 2
};

const BaseCard: React.FC<BaseCardProps> = ({ className, children, type = 1 }) => {
  // Validate the type prop to ensure it's either 1 or 2
  if (type !== 1 && type !== 2 && type !== 3 && type !== 4 && type !== 5) {
    throw new Error("Invalid 'type' prop value. Use either 1,2,3,4 or 5.");
  }

  const cardClasses = `rounded border-gradient backdrop-blur ${className}`;
  const cardTypeClasses = {
    1: `bg-surface-c1 shadow-c1 ${cardClasses}`,
    2: `bg-surface-c2 shadow-c2 ${cardClasses}`,
    3: `bg-surface-c3 shadow-c2 ${cardClasses}`,
    4: `${className}`,
    5: `bg-surface-c1 shadow-c3 ${cardClasses}`,
  };

  return (
    // <motion.div
    //   initial={{ opacity: 0, scale: 0.98, translateY: 10 }}
    //   animate={{ opacity: 1, scale: 1, translateY: 0 }}
    //   transition={{ duration: 0.3 }}
    // >
    <div className={cardTypeClasses[type]}>
      {type !== 4 && (
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#3D3D56] to-transparent"></div>
      )}
      {children}
    </div>
    // </motion.div>
  );
};

export default BaseCard;
