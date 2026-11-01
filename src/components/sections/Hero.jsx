import { site } from "../../data/site";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="eyebrow">MERN Stack Developer | Agentic AI Developer</div>
          <h1>I Turn Your Ideas Into <span className="gradient-text">Powerful Web Applications.</span></h1>
          <p className="hero-copy">
            I build <strong>responsive websites</strong>, <strong>MERN stack web applications</strong> and{" "}
            <strong>AI solutions</strong> with clean interfaces and reliable code, so your idea works well on every device.
          </p>
          <div className="actions">
            <Button href="#contact">Let's Build Your Project <span aria-hidden="true">↗</span></Button>
            <Button variant="outline" href="#projects">Explore My Work</Button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="visual-orbit">
            <img
              className="hero-portrait"
              src={site.portrait}
              alt={`${site.name}, MERN Stack and Agentic AI developer`}
              width="800"
              height="800"
              fetchpriority="high"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
