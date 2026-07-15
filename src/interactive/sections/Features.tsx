import { features } from "../content/interactiveContent";
import { Section } from "../components/ui/Section";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Reveal } from "../components/ui/Reveal";

export function Features() {
  return (
    <Section id="features" className="features-section">
      <Reveal>
        <SectionHeader
          eyebrow="FEATURES"
          title="講義のすべてを、ひとつの学習体験に。"
          lead="リアルタイムの参加、理解度の共有、AIによる整理。聞く、質問する、確認する、復習する。そのすべてを一つにつなげます。"
          align="center"
        />
      </Reveal>
      <div className="feature-grid">
        {features.map((feature, index) => (
          <Reveal delay={index * 70} key={feature.title}>
            <article className="feature-card">
              <p>{feature.eyebrow}</p>
              <h3>{feature.title}</h3>
              <strong>{feature.headline}</strong>
              <span>{feature.body}</span>
              <div className="mini-tags">
                {feature.tags.map((tag) => (
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
