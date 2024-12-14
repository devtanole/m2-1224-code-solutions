import { useState } from 'react';
import './App.css';
import './ToggleSwitch.css';

function App() {
  const [toggled, setToggle] = useState(false);
  return (
    <>
      <button
        className={`button ${toggled ? 'toggled' : ''}`}
        onClick={() => setToggle(!toggled)}>
        <div className="box"></div>
      </button>
    </>
  );
}

export default App;
