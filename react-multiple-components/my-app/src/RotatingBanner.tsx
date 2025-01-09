import { Banner } from './Banner';
import { NavButton } from './NavButton';
import { Indicators } from './Indicators';

type BannerProps = {
  items: string[];
};

export function RotatingBanner({ items }: BannerProps) {
  return (
    <>
      <Banner name={items[4]} />
      <NavButton label="Prev" />
      <br></br>
      <Indicators count={items.length} />
      <br></br>
      <NavButton label="Next" />
    </>
  );
}
