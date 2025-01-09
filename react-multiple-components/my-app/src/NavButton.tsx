type NavProps = {
  label: string;
  handleClick: () => void;
};

export function NavButton({ label, handleClick }: NavProps) {
  return <button onClick={() => handleClick()}>{label}</button>;
}
