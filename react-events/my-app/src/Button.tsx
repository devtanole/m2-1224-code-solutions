type Props = {
  label: string;
  onButtonClick: () => void;
};
export function Button({ label, onButtonClick }: Props) {
  function handleButtonClick() {
    console.log('button clicked');
    onButtonClick();
  }
  return <button onClick={handleButtonClick}>{label}</button>;
}
