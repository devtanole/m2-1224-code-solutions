type Props = {
  count: number;
};

export function Indicators({ count }: Props) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(<button key={i}>{i}</button>);
  }
  return <>{buttons}</>;
}
