import { aiSupportCards, plannedAIModels } from "../content/interactiveContent";
import { Section } from "../components/ui/Section";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Reveal } from "../components/ui/Reveal";

export function AILearningSupport() {
  return (
    <Section id="ai-support" className="ai-support-section section--dark">
      <Reveal>
        <div className="ai-support-heading">
          <div className="ai-model-badge">
            <span aria-hidden="true" />
            <strong>OPENAI FRONTIER INTELLIGENCE</strong>
            <small>Lecture-aware AI Core</small>
          </div>
          <SectionHeader
            eyebrow="AI LEARNING SUPPORT"
            title="最新AIが、質問と復習を次の理解へつなぐ。"
            lead="講義中に生まれた疑問を整理し、重要な質問を見つけ、講義後の復習まで支援する。すべての学習データを、次の理解を生み出す体験へ変える。"
            align="center"
          />
        </div>
      </Reveal>
      <div className="ai-model-grid" aria-label="AIコア技術">
        {plannedAIModels.map((model, index) => (
          <Reveal delay={index * 80} key={model.name}>
            <article className="ai-model-card">
              <div>
                <span>AI CORE</span>
                <small>{model.role}</small>
              </div>
              <h3>{model.name}</h3>
              <p>{model.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
      <div className="ai-support-grid">
        {aiSupportCards.map((card, index) => (
          <Reveal delay={index * 70} key={card.title}>
            <article className="ai-support-card">
              <p>{card.eyebrow}</p>
              <h3>{card.title}</h3>
              <span>{card.body}</span>
              <div className="mini-tags">
                {card.tags.map((tag) => (
                  <small key={tag}>{tag}</small>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
