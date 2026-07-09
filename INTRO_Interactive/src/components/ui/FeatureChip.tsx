type FeatureChipProps = {
  children: string;
};

export function FeatureChip({ children }: FeatureChipProps) {
  return <span className="feature-chip">{children}</span>;
}
