import { Topic } from './App';
import { useState } from 'react';
import './Accordion.css';
import { TopicCard } from './TopicCard';

type AccordionProps = {
  topics: Topic[];
};

export function Accordion({ topics }: AccordionProps) {
  const [clickIndex, setClickIndex] = useState<number>();

  function handleClick(id: number) {
    if (clickIndex === id) {
      setClickIndex(undefined);
    } else setClickIndex(id);
  }

  return (
    <>
      {topics.map((topic) => (
        <TopicCard
          handleClick={handleClick}
          key={topic.id}
          topic={topic}
          selected={topic.id === clickIndex}
        />
      ))}
    </>
  );
}
