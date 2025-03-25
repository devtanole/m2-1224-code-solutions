type Props = {
  count: number;
  handleSelect: (i: number) => void;
  index: number;
};

export function Indicators({ count, handleSelect, index }: Props) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    const selected = i === index;
    buttons.push(
      <button
        className={selected ? 'selected' : ''}
        key={i}
        onClick={() => handleSelect(i)}>
        {i}
      </button>
    );
  }
  return <>{buttons}</>;
}
