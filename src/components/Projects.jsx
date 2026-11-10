import { useState } from "react";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

// Filter options are based on the technologies actually used in the data.
const filterOptions = ["All", "React", "JavaScript", "HTML", "CSS", "Tailwind CSS"];

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) =>
          project.technologies.includes(activeFilter)
        );

  return (
    <section id="projects" className="section">
      <div className="section-inner">
        <h2 className="section-title">
          My <span>Projects</span>
        </h2>
        <p className="section-subtitle">
          A few things I have built while learning full stack web development.
        </p>

        <div className="project-filters">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`filter-btn ${activeFilter === filter ? "active" : ""}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="no-projects">No projects found for this technology.</p>
        )}
      </div>
    </section>
  );
}

export default Projects;
