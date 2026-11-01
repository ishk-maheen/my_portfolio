import { faqs } from "../../data/content";
import SectionHeading from "../ui/SectionHeading";

export default function Faq() {
  return (
    <section id="faq">
      <div className="container">
        <SectionHeading title="" accent="FAQs">
          Quick answers before we start.
        </SectionHeading>
        <div className="faq-list">
          {faqs.map((f) => (
            <details className="reveal" name="faq" key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
