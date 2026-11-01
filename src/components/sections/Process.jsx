import { processSteps } from "../../data/content";
import SectionHeading from "../ui/SectionHeading";

export default function Process() {
  return (
    <section id="process">
      <div className="container">
        <SectionHeading title="How a project" accent="runs.">
          Five steps from the first message to launch.
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
