import Container from "../../components/comman/Container.jsx";
import { projects } from "../../data/projects.js";
import { Link } from "react-router-dom";
import "./Projects.css";

function Projects() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="projects" id="projects">
      <Container>
        <div className="projects__header">
          <h2>Projects</h2>
        </div>

        <div className="projects__list">
          {featuredProjects.map((project) => (
            <article className="project-preview" key={project.id}>
              <div className="project-preview__content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-preview__tech">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>

              <div className="project-preview__links">
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
            </article>
          ))}
        </div>

        <div className="projects__footer">
          <Link to="/work">
            Show all work <span>↗</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default Projects;