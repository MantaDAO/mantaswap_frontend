const SwapDetailLine: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="flex items-center justify-between">
    <span className="text-md font-medium text-body">{label}</span>
    <span className="text-md font-medium text-header">{value}</span>
  </div>
);

export default SwapDetailLine;
