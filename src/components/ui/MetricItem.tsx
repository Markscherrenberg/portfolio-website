interface MetricItemProps {
  label: string;
  value: number | string;
}

export default function MetricItem({ label, value }: MetricItemProps) {
  return (
    <div className="w-60 flex flex-col items-center">
      <p className="text-accent text-6xl leading-tight font-medium">{value}</p>
      <h3 className="text-primary-300 text-lg font-medium mt-3">{label}</h3>
    </div>
  );
}
