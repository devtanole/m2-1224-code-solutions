import { useState } from 'react';
import './button.css';

export function HotButton() {
  const [clicks, setClicks] = useState(0);

  function getClass(): string {
    if (clicks <= 3) return 'cold';
    if (clicks <= 6) return 'cool';
    if (clicks <= 9) return 'tepid';
    if (clicks <= 12) return 'warm';
    if (clicks <= 15) return 'hot';
    return 'nuclear';
  }
  const buttonClass = getClass();

  return (
    <>
      <button
        onClick={() => setClicks(clicks + 1)}
        className={`${buttonClass}`}>
        Hot Button
      </button>
      <p>clicks: {clicks}</p>
    </>
  );
}
