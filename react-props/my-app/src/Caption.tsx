type capProps = {
  capText: string;
};

export function Caption({ capText }: capProps) {
  return <h3>{capText}</h3>;
}
