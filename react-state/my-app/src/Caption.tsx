import { useState } from 'react';

type Props = {
  captionList: string[];
};

export function Caption({ captionList }: Props) {
  const [index, setIndex] = useState(0);
  function handleClick() {
    setIndex((lastIndex) => (lastIndex + 1) % captionList.length);
  }
  return <h3 onClick={handleClick}>{captionList[index]}</h3>;
}
