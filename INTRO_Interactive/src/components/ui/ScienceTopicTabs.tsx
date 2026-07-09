import { scienceTopics } from "../../content/interactiveContent";

type ScienceTopicTabsProps = {
  activeId: string;
  onChange: (id: string) => void;
};

export function ScienceTopicTabs({ activeId, onChange }: ScienceTopicTabsProps) {
  return (
    <div className="topic-tabs" role="tablist" aria-label="講義テーマ">
      {scienceTopics.map((topic) => (
        <button
          key={topic.id}
          type="button"
          role="tab"
          aria-selected={activeId === topic.id}
          className={activeId === topic.id ? "is-active" : ""}
          onClick={() => onChange(topic.id)}
        >
          <span>{topic.label}</span>
          <small>{topic.title}</small>
        </button>
      ))}
    </div>
  );
}
