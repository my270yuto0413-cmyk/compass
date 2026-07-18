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
            lead="講義音声、資料、投票、学生の問いをAIがひとつにつなぐ。聞き逃した一節から、クラスで深めたい論点、講義後の振り返りまで、講義中に生まれた情報が次の理解に変わる。"
            align="center"
          />
        </div>
      </Reveal>
      <div className="ai-model-grid" aria-label="AIコア技術">
        {plannedAIModels.map((model, index) => (
          <Reveal delay={index * 80} key={model.name}>
            <article className="ai-model-card" data-state={model.state}>
              <header>
                <span>{model.status}</span>
                <small>{model.role}</small>
              </header>
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
              <header>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{card.eyebrow}</p>
                {card.status && <small>{card.status}</small>}
              </header>
              <h3>{card.title}</h3>
              <p className="ai-support-card__body">{card.body}</p>
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
