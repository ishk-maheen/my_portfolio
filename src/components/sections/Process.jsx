import { processSteps } from "../../data/content";
import SectionHeading from "../ui/SectionHeading";

export default function Process() {
  return (
    <section id="process">
      <div className="container">
        <SectionHeading eyebrow="The workflow" title="From first message to" accent="launch.">
          A simple process helps both sides understand what happens next.
        </SectionHeading>
        <div className="grid process-grid">
          {processSteps.map((s, i) => (
            <article className="panel process-card reveal" key={s.title}>
              <div className="process-num">STEP {String(i + 1).padStart(2, "0")}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
