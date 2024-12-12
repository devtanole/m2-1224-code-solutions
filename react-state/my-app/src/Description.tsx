import { useState } from 'react';

type Props = {
  descList: string[];
};
export function Description({ descList }: Props) {
  const [index, setIndex] = useState(0);
  function handleClick() {
    setIndex((lastIndex) => (lastIndex + 1) % descList.length);
  }
  return <p onClick={handleClick}>{descList[index]}</p>;
}
