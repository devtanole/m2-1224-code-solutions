import './Image.css';
import { useState } from 'react';

type Props = {
  srcPics: string[];
};
export function Image({ srcPics }: Props) {
  const [index, setIndex] = useState(0);
  function handleClick() {
    setIndex((lastIndex) => (lastIndex + 1) % srcPics.length);
  }
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img
          className="image-fill"
          src={srcPics[index]}
          alt="space-image"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
