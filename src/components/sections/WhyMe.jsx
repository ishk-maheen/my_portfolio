import { whyCards } from "../../data/content";
import SectionHeading from "../ui/SectionHeading";

export default function WhyMe() {
  return (
    <section id="why-me">
      <div className="container">
        <SectionHeading eyebrow="Working together" title="Clear expectations." accent="Thoughtful execution.">
          A good freelance experience is about communication and reliable delivery as much as the code itself.
        </SectionHeading>
        <div className="grid why-grid">
          {whyCards.map((c) => (
            <article className="panel why-card reveal" key={c.title}>
              <div className="service-icon">{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
