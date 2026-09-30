import "./ProjectCard.css";

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card__top">
        <span className="project-card__number">
          {String(project.id).padStart(2, "0")}
        </span>

        <div className="project-card__links">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
            >
              Live ↗
            </a>
          )}
        </div>
      </div>

      <div className="project-card__body">
        <h3>{project.title}</h3>

        <p>{project.description}</p>
      </div>

      <div className="project-card__technologies">
        {project.technologies.map((technology) => (
          <span key={technology}>
            {technology}
          </span>
        ))}
      </div>
    </article>
  );
}

export default ProjectCard;