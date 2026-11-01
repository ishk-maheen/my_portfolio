import { services } from "../../data/services";
import SectionHeading from "../ui/SectionHeading";
import ServiceIcon from "../ui/ServiceIcon";

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <SectionHeading title="What I can build" accent="for you.">
          Pick what fits your project. We agree the scope and deliverables before any work starts.
        </SectionHeading>
        <div className="grid services-grid">
          {services.map((s) => (
            <article className="panel reveal" key={s.title}>
              <div className="service-icon"><ServiceIcon name={s.icon} /></div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <dl className="service-meta">
                <div><dt>Good for</dt><dd>{s.solves}</dd></div>
                <div><dt>What you get</dt><dd>{s.expect}</dd></div>
              </dl>
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
