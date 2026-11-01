import { skillGroups } from "../../data/content";
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
          <div className="eyebrow">About Me</div>
          <h2>Working with me means <span className="gradient-text">clear communication.</span></h2>
          <p>I'm Maheen Sheikh, a freelance web developer who builds responsive websites and MERN stack applications. I turn your requirements into something that looks good, works well on every device and is easy for your users to understand.</p>
          <p>My background as a Web Development and IT Foundation Trainer means I explain things in plain language and share progress as the work moves forward, so you always know what is being built and why. I'm also exploring Agentic AI and learning SEO, so I can offer more over time.</p>
          <div className="skill-groups">
            {skillGroups.map((g) => (
              <div className="skill-group" key={g.title}>
                <strong>{g.title}</strong>
                <span>{g.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
