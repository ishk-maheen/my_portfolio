import { projects } from "../../data/projects";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../cards/ProjectCard";

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <SectionHeading title="Work I have" accent="built.">
          Explore my full stack, AI and React frontend work. These are portfolio projects, not paid client engagements.
        </SectionHeading>
        <div className="grid project-grid">
          {projects.map((p) => <ProjectCard project={p} key={p.title} />)}
        </div>
      </div>
    </section>
  );
}
