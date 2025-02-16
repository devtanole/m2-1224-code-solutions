import type { Image } from './App';
import { useState, useEffect, useCallback } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { FaCircle, FaRegCircle } from 'react-icons/fa';

type CarouselProps = {
  images: Image[];
};

export function Carousel({ images }: CarouselProps) {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    const nextIdx = (index + 1) % images.length;
    setIndex(nextIdx);
  }, [index, images.length]);

  useEffect(() => {
    const timeout = setTimeout(next, 3000);
    return () => clearTimeout(timeout);
  }, [next]);

  function prev() {
    const prevIdx = (index - 1 + images.length) % images.length;
    setIndex(prevIdx);
  }

  return (
    <div className="carousel">
      <PrevButton handleClick={prev} />
      <NextButton handleClick={next} />
      <ImageCard image={images[index]} />
      <Indicators
        index={index}
        dotCount={images.length}
        handleClick={setIndex}
      />
    </div>
  );
}

type PrevButtonProps = {
  handleClick: () => void;
};
function PrevButton({ handleClick }: PrevButtonProps) {
  return (
    <FaChevronLeft
      onClick={handleClick}
      className="previous-image"
      size="2rem"
    />
  );
}

type NextButtonProps = {
  handleClick: () => void;
};
function NextButton({ handleClick }: NextButtonProps) {
  return (
    <FaChevronRight onClick={handleClick} className="next-image" size="2rem" />
  );
}

type ImageCardProps = {
  image: Image;
};
function ImageCard({ image }: ImageCardProps) {
  return (
    <div className="image-wrapper">
      <img className="current-image" src={image.src} alt={image.alt} />
    </div>
  );
}

type DotProps = {
  index: number;
  dotCount: number;
  handleClick: (idx: number) => void;
};
function Indicators({ index, dotCount, handleClick }: DotProps) {
  const dots = [];
  for (let i = 0; i < dotCount; i++) {
    const icon =
      i === index ? (
        <FaCircle
          className="progress-dot"
          onClick={() => handleClick(i)}
          key={i}
        />
      ) : (
        <FaRegCircle
          className="progress-dot"
          onClick={() => handleClick(i)}
          key={i}
        />
      );
    dots.push(icon);
  }
  return <div className="progress-dots">{dots}</div>;
}
