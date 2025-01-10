import { Topic } from './App';
type TopicCardProps = {
  topic: Topic;
  handleClick: (id: number) => void;
  selected: boolean;
};

export function TopicCard({ topic, handleClick, selected }: TopicCardProps) {
  return (
    <div onClick={() => handleClick(topic.id)} className="topic-card">
      <h2>{topic.title}</h2>
      {selected ? <div className="topic-content">{topic.content}</div> : null}
    </div>
  );
}
