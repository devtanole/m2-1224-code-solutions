import { useState } from 'react';
import { Header } from './Header';
import { Image } from './Image';
import { Caption } from './Caption';
import { Description } from './Description';
import { Button } from './Button';
import './App.css';

const imgList = [
  {
    src: '/starry-sky.jpeg',
    caption: 'A Beautiful Image of Space',
    description: 'This is a wonderful sky full of stars!',
  },
  {
    src: '/cool-kitty.jpg',
    caption: 'A Cool Cat',
    description: 'This is a picture of a very cool cat!',
  },
  {
    src: '/cool-car.jpg',
    caption: 'A Cool Car',
    description: 'This is a picture of a very cool car!',
  },
];

export function App() {
  const [index, setIndex] = useState(0);
  function handleClick() {
    if (index >= imgList.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }
  return (
    <>
      <Header text="React Image Bank" />
      <Image src={imgList[index].src} />
      <Caption caption={imgList[index].caption} />
      <Description texts={imgList[index].description} />
      <Button onButtonClick={handleClick} label="Click for Next Image" />
    </>
  );
}
