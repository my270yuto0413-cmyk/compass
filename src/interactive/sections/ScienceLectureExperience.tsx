"use client";

import { useMemo, useState } from "react";
import { scienceTopics } from "../content/interactiveContent";
import { Section } from "../components/ui/Section";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Reveal } from "../components/ui/Reveal";
import { ScienceTopicTabs } from "../components/ui/ScienceTopicTabs";
import { QuizBars } from "../components/ui/QuizBars";
import { MockCard } from "../components/ui/MockCard";

export function ScienceLectureExperience() {
  const [activeTopicId, setActiveTopicId] = useState("biochemistry");
  const activeTopic = useMemo(
    () => scienceTopics.find((topic) => topic.id === activeTopicId) ?? scienceTopics[0],
    [activeTopicId]
  );

  return (
    <Section id="examples" className="science-section section--dark">
      <Reveal>
        <SectionHeader
          eyebrow="LECTURE EXAMPLES"
          title="薬学・生命科学の専門講義を、もっと深く理解する。"
          lead="作用機序、実験デザイン、反応機構、薬物動態、分子生物学。専門講義の中で生まれる疑問を、その場で共有・確認・整理する。"
          align="center"
        />
      </Reveal>
      <div className="science-grid">
        <Reveal>
          <ScienceTopicTabs activeId={activeTopicId} onChange={setActiveTopicId} />
        </Reveal>
        <Reveal className="science-panel" delay={120}>
          <MockCard label={activeTopic.label} title={activeTopic.title}>
            <p>{activeTopic.lead}</p>
            <div className="example-comments">
              {activeTopic.comments.map((comment) => (
                <p key={comment}>{comment}</p>
              ))}
            </div>
            <QuizBars key={activeTopic.id} question={activeTopic.quiz.question} options={activeTopic.quiz.options} />
          </MockCard>
        </Reveal>
      </div>
    </Section>
  );
}
