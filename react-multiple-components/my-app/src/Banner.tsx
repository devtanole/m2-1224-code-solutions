type Props = {
  name: string;
};

export function Banner({ name }: Props) {
  return (
    <>
      <h2>{name}</h2>
    </>
  );
}
