import { faqs } from "../../data/content";
import SectionHeading from "../ui/SectionHeading";

export default function Faq() {
  return (
    <section id="faq">
      <div className="container">
        <SectionHeading eyebrow="Frequently asked questions" title="Before we" accent="get started.">
          Some useful details to help you decide whether we're a good fit for your project.
        </SectionHeading>
        <div className="faq-list">
          {faqs.map((f) => (
            <details className="reveal" key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
