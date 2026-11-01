import { useRef } from "react";
import useCardTilt from "../../hooks/useCardTilt";
import ExternalLink from "../ui/ExternalLink";

export default function ProjectCard({ project }) {
  const ref = useRef(null);
  useCardTilt(ref);

  return (
    <article className="panel project-card reveal" ref={ref}>
      <div className="project-preview">
        <div className="mock-browser">
          <div className="browser-top"><i /><i /><i /></div>
          {project.image ? (
            <img
              className="project-shot"
              src={project.image}
              alt={`Screenshot of the ${project.title} website homepage`}
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
          <ExternalLink className="btn btn-primary btn-sm" href={project.demo} aria-label={`Live demo of ${project.title}`}>Live Demo ↗</ExternalLink>
          <ExternalLink className="btn btn-outline btn-sm" href={project.code.href} aria-label={`GitHub repository for ${project.title}`}>GitHub ↗</ExternalLink>
        </div>
      </div>
    </article>
  );
}
