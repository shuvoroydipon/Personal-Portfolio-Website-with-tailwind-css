function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className={`project-visual ${project.visual}`}>
        <span className="project-visual-icon">{project.icon}</span>
      </div>

      <div className="project-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="project-tech">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-buttons">
          <a
            href={project.liveDemo}
            className="btn btn-primary btn-small"
            target={project.liveDemo.startsWith("http") ? "_blank" : undefined}
            rel={project.liveDemo.startsWith("http") ? "noreferrer" : undefined}
          >
            Live Demo
          </a>
          <a href={project.github} className="btn btn-outline btn-small">
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
