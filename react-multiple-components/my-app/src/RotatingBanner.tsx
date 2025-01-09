import { Banner } from './Banner';
import { NavButton } from './NavButton';
import { Indicators } from './Indicators';
import { useState } from 'react';

type BannerProps = {
  items: string[];
};

export function RotatingBanner({ items }: BannerProps) {
  const [index, setIndex] = useState(0);

  function handlePrev() {
    if (index === 0) setIndex(items.length - 1);
    else setIndex((prev) => prev - 1);
  }

  function handleNext() {
    if (index === items.length - 1) setIndex(0);
    else setIndex((prev) => prev + 1);
  }

  function handleSelect(i: number) {
    setIndex(i);
  }

  return (
    <>
      <Banner name={items[index]} />
      <NavButton label="Prev" handleClick={handlePrev} />
      <br></br>
      <Indicators
        count={items.length}
        handleSelect={handleSelect}
        index={index}
      />
      <br></br>
      <NavButton label="Next" handleClick={handleNext} />
    </>
  );
}
