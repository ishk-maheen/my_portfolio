import { skillGroups, trustStrip } from "../../data/content";
import { site } from "../../data/site";

export default function About() {
  return (
    <section id="about">
      <div className="container about-grid">
        <div className="about-visual reveal">
          <img
            className="about-photo"
            src={site.portrait}
            alt={`Portrait of ${site.name}`}
            width="800"
            height="800"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="about-copy reveal">
          <div className="eyebrow">A little about me</div>
          <h2>Developer mindset, <span className="gradient-text">trainer's clarity.</span></h2>
          <p>I'm Maheen Sheikh, a Computer Science student and freelance web developer focused on responsive interfaces and web applications. I work with modern frontend technologies and the MERN stack, while expanding my knowledge of Agentic AI and SEO.</p>
          <p>My experience as a Web Development and IT Foundation Trainer has helped me practice explaining technical concepts clearly and breaking complex tasks into manageable steps. I bring that structured approach to my development work too.</p>
          <div className="skill-groups">
            {skillGroups.map((g) => (
              <div className="skill-group" key={g.title}>
                <strong>{g.title}</strong>
                <span>{g.text}</span>
              </div>
            ))}
          </div>
          <div className="trust-strip">
            {trustStrip.map((t) => <span key={t}>{t}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
