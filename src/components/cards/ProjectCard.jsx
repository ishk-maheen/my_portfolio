import { useRef } from "react";
import useCardTilt from "../../hooks/useCardTilt";
import ExternalLink from "../ui/ExternalLink";

export default function ProjectCard({ project }) {
  const ref = useRef(null);
  useCardTilt(ref);

  if (project.comingSoon) {
    return (
      <article className="panel project-card project-card--soon reveal" ref={ref}>
        <div className="project-preview">
          <div className="browser-top" aria-hidden="true"><i /><i /><i /></div>
          <div className="project-soon" aria-hidden="true">
            <div className="soon-ghost">
              <div className="browser-top"><i /><i /><i /></div>
              <div className="mock-content">
                <div className="mock-row">
                  <div className="mock-block" /><div className="mock-block" /><div className="mock-block" />
                </div>
                <div className="mock-post" />
                <div className="mock-post" />
              </div>
            </div>
            <span className="soon-icon">?</span>
            <span className="soon-label">
              Coming soon<span className="soon-dots"><i>.</i><i>.</i><i>.</i></span>
            </span>
          </div>
        </div>
        <div className="project-body">
          <div className="project-kicker">{project.kicker}</div>
          <h3>{project.title}</h3>
          <p>{project.text}</p>
          <div className="soon-redacted" aria-hidden="true"><span /><span /><span /></div>
        </div>
      </article>
    );
  }

  return (
    <article className="panel project-card reveal" ref={ref}>
      <div className="project-preview">
        <div className="mock-browser">
          <div className="browser-top"><i /><i /><i /></div>
          {project.image ? (
            <img
              className="project-shot"
              src={project.image}
              alt={`Screenshot of the ${project.title} homepage`}
              width="960"
              height="438"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div className="mock-content">
              <div className="mock-title">{project.mockTitle}</div>
              <div className="mock-subtitle">{project.mockSubtitle}</div>
              <div className="mock-row">
                <div className="mock-block" /><div className="mock-block" /><div className="mock-block" />
              </div>
              <div className="mock-post" />
              <div className="mock-post" />
            </div>
          )}
        </div>
      </div>
      <div className="project-body">
        <div className="project-kicker">{project.kicker}</div>
        <h3>{project.title}</h3>
        <p>{project.text}</p>
        <div className="chips">
          {project.chips.map((c) => <span className="chip" key={c}>{c}</span>)}
        </div>
        <div className="project-links">
          <ExternalLink className="text-link" href={project.demo}>Live demo ↗</ExternalLink>
          <ExternalLink className="text-link" href={project.code.href}>{project.code.label} ↗</ExternalLink>
        </div>
      </div>
    </article>
  );
}
