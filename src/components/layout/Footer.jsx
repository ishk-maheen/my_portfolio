import { navLinks, site } from "../../data/site";
import { services } from "../../data/services";
import ExternalLink from "../ui/ExternalLink";

// "Learning SEO" is a learning topic, not an offered service, so it stays out of this list.
const offered = services.filter((s) => s.tag !== "Currently learning");

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <a className="brand" href="#home">
            <span className="brand-mark">M</span>
            <span>
              {site.name}
              <small>{site.role}</small>
            </span>
          </a>
          <p>Turning business ideas into responsive websites and useful web applications.</p>
          <div className="footer-social">
            <ExternalLink className="footer-social-link" href={site.linkedin} aria-label="LinkedIn profile">in</ExternalLink>
            <ExternalLink className="footer-social-link" href={site.github} aria-label="GitHub profile">{"</>"}</ExternalLink>
          </div>
        </div>

        <nav className="footer-col" aria-label="Footer navigation">
          <p className="footer-title">Explore</p>
          <ul>
            {navLinks.map((l) => (
              <li key={l.href}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </nav>

        <div className="footer-col">
          <p className="footer-title">What I do</p>
          <ul>
            {offered.map((s) => (
              <li key={s.title}><a href="#services">{s.title}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <p className="footer-title">Let's connect</p>
          <ul>
            <li><a href="#contact">Start a project ↗</a></li>
            <li><ExternalLink href={site.linkedin}>LinkedIn</ExternalLink></li>
            <li><ExternalLink href={site.github}>GitHub</ExternalLink></li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {site.name}. Built with care.</span>
        <a className="footer-top-link" href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}
