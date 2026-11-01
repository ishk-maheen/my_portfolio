import { approachSteps } from "../../data/content";

export default function Approach() {
  return (
    <section id="case-studies">
      <div className="container case-study">
        <div className="case-side reveal">
          <h2>How I handle <span className="gradient-text">a project.</span></h2>
          <p>I start by understanding what the project needs, then plan, build and test it.</p>
        </div>
        <div className="case-steps">
          {approachSteps.map((s) => (
            <article className="case-step reveal" key={s.num}>
              <div className="step-num">{s.num}</div>
              <div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
