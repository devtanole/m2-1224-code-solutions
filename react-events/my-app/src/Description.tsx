type Props = {
  texts: string;
};
export function Description({ texts }: Props) {
  return <p>{texts}</p>;
}
