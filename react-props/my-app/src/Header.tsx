type HeaderProp = {
  text: string;
};

export function Header({ text }: HeaderProp) {
  return <h1>{text}</h1>;
}
