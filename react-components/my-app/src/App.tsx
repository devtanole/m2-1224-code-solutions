import './App.css';
import { Header } from './Header.tsx';
import { Image } from './Image.tsx';
import { Caption } from './Caption.tsx';
import { Description } from './Description';
import { Button } from './Button.tsx';

function App() {
  return (
    <>
      <Header />
      <Image />
      <Caption />
      <Description />
      <Button />
    </>
  );
}

export default App;
