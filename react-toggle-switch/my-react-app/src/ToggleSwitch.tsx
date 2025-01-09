import { useState } from 'react';
import './ToggleSwitch.css';

export function ToggleSwitch() {
  const [toggled, setToggle] = useState(false);
  return (
    <div className="container">
      <button
        className={`button ${toggled ? 'toggled' : ''}`}
        onClick={() => setToggle(!toggled)}>
        <div className="box"></div>
      </button>
      <span className="switchText">{toggled ? 'ON' : 'OFF'}</span>
    </div>
  );
}
