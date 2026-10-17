import { approachSteps } from "../../data/content";

export default function Approach() {
  return (
    <section id="case-studies">
      <div className="container case-study">
        <div className="case-side reveal">
          <div className="eyebrow">My approach</div>
          <h2>How I think through <span className="gradient-text">a project.</span></h2>
          <p>Good development starts with understanding the purpose, not just writing code. Here is the structure I use to explain my work honestly and clearly.</p>
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
