import { projects } from "../../data/projects";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../cards/ProjectCard";

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <SectionHeading eyebrow="Selected work" title="Practical projects," accent="real skills.">
          Explore my full-stack, AI-focused and React frontend work. These are portfolio projects, not claims of paid client engagements.
        </SectionHeading>
        <div className="grid project-grid">
          {projects.map((p) => <ProjectCard project={p} key={p.title} />)}
        </div>
      </div>
    </section>
  );
}
