type buttonProps = {
  click: string;
};

export function Button({ click }: buttonProps) {
  return <button>{click}</button>;
}
