import { Header } from './Header';
import { Image } from './Image';
import { Caption } from './Caption';
import { Description } from './Description';
import { Button } from './Button';
import './App.css';

const srcPics = [
  '/starry-sky.jpeg',
  '/barathSigil-removebg-preview.png',
  '/stark2-removebg-preview.png',
];
const caption = [
  'A Beautiful Image of Space',
  'Sigil of House Baratheon',
  'Sigil of House Stark',
];
const description = [
  `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
  Aliquam incidunt sit dolorum accusantium sapiente reiciendis maxime dolores ullam delectus,
  commodi placeat eveniet, quam voluptates facere et magnam architecto quaerat velit voluptas
  rerum quos asperiores quis in ! Nemo aut aliquam quas dolore quaerat,
  error numquam odio modi eos vero. Modi nisi eos autem ? Iusto hic impedit aspernatur
  labore quos nesciunt ? Ad dolore pariatur aperiam nemo, maiores laboriosam quam quod nisi ipsum,
  dicta sunt laborum similique repellat?`,
  `A stag representing the House Baratheon. Notable members include King Robert and the self declared kings Renly and Stannis. Blah blah blah blah they all die in the show blah blah blah.`,
  `A direwolf for the House Stark of the North. Ned Stark is/was warden of the North before his death caused by his treason. Notable members include Eddard (Ned), Robb, Sansa and Arya. Known for being bound by honor even when it is foolish. Blah blah blah blah blah blah blah blah blah.`,
];

export default function App() {
  return (
    <>
      <Header text="React Image Bank" />
      <Image srcPics={srcPics} />
      <Caption captionList={caption} />
      <Description descList={description} />
      <Button label="Click for Next Image" />
    </>
  );
}
