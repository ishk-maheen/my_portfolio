import { heroFloatCards, heroProof, site } from "../../data/site";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="eyebrow">Freelance Web Developer · MERN Stack</div>
          <p className="hero-name">
            <span className="hero-avatar" aria-hidden="true">
              <img src={site.portrait} alt="" width="72" height="72" decoding="async" />
            </span>
            <span>I am <span className="gradient-text">{site.name}</span></span>
          </p>
          <h1>I Turn Ideas Into <span className="gradient-text">Powerful Web Applications.</span></h1>
          <p className="hero-copy">
            Need a modern website or web application for your business? I help turn ideas into{" "}
            <strong>responsive, user-friendly digital experiences</strong> with thoughtful interfaces and modern web technologies.
          </p>
          <div className="actions">
            <Button href="#contact">Discuss Your Project <span>↗</span></Button>
            <Button variant="outline" href="#projects">View My Work</Button>
          </div>
          <div className="hero-proof">
            {heroProof.map((p) => <span key={p}>{p}</span>)}
          </div>
        </div>
        <div className="hero-visual">
          <div className="visual-glow" />
          <div className="visual-orbit">
            <img
              className="hero-portrait"
              src={site.portrait}
              alt={`Portrait of ${site.name}`}
              width="800"
              height="800"
              fetchpriority="high"
              decoding="async"
            />
          </div>
          {heroFloatCards.map((c) => (
            <div className={`float-card ${c.cls}`} key={c.cls}>
              <strong>{c.title}</strong>
              <small>{c.text}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
