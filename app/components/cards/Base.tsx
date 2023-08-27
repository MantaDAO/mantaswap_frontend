type BaseCardProps = {
  className?: string; // Prop type for additional class names
  children?: React.ReactNode; // Prop type for children
  type?: number; // Prop type for card type
};

const BaseCard: React.FC<BaseCardProps> = ({ className, children, type = 1 }) => {
  const type1 = `bg-surface-c1 rounded shadow-c1 border-gradient filter backdrop-blur-lg ${className}`;
  return <div className={type1}>{children}</div>;
};

export default BaseCard;
