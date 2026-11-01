import { useState } from "react";
import { navLinks, site } from "../../data/site";

export default function Header({ activeId }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav">
        <a className="brand" href="#home">
          <img className="brand-logo" src={site.logo} alt="" width="50" height="50" />
          <span>
            {site.name}
          </span>
        </a>
        <nav className={`nav-links${open ? " open" : ""}`} id="navLinks" aria-label="Main navigation">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={activeId === l.href.slice(1) ? "active" : undefined}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <a className="nav-cta" href="#contact">Discuss a project ↗</a>
          <button
            className="menu-toggle"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="navLinks"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? "×" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
}
