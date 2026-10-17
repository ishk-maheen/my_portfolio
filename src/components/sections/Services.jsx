import { services } from "../../data/services";
import SectionHeading from "../ui/SectionHeading";

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <SectionHeading eyebrow="How I can help" title="Solutions built around" accent="your goals.">
          Choose the support that fits your project. Deliverables are agreed in advance, so you know what to expect.
        </SectionHeading>
        <div className="grid services-grid">
          {services.map((s) => (
            <article className="panel reveal" key={s.title}>
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <ul className="feature-list">
                {s.features.map((f) => <li key={f}>{f}</li>)}
              </ul>
              <span className="service-tag">{s.tag}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
