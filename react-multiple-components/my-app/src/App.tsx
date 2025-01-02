import './App.css';
import { Wrap } from './RotatingBanner';

function App() {
  const items = [
    'Aardvark',
    'Bengal',
    'Caterpillar',
    'Dromedary',
    'Elephant',
    'Ferret',
  ];
  return (
    <>
      <Wrap items={items} />
    </>
  );
}

export default App;
