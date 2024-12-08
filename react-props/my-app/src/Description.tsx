type descText = {
  description: string;
};

export function Description({ description }: descText) {
  return <p>{description}</p>;
}
