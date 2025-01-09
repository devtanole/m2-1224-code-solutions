import { useState } from 'react';
import './StopWatch.css';
import { FaPlay, FaPause } from 'react-icons/fa';

export function StopWatch() {
  const [time, setTime] = useState(0);
  const [pause, setPause] = useState(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>(null);

  const toggleTimer = () => {
    if (pause) {
      clearInterval(intervalId);
      setPause(false);
    } else {
      const id = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
      setPause(true);
      setIntervalId(id);
    }
  };

  const resetTimer = (): void => {
    if (intervalId) clearInterval(intervalId);
    setTime(0);
    setPause(false);
  };

  const handleClickFace = () => {
    if (!pause) {
      resetTimer();
    }
  };

  return (
    <>
      <div className="wrapper">
        <div className="face" onClick={handleClickFace}>
          <span>{time}</span>
        </div>
        <button onClick={toggleTimer} className="play-pause">
          {pause ? <FaPause size="20px" /> : <FaPlay size="20px" />}
        </button>
      </div>
    </>
  );
}
