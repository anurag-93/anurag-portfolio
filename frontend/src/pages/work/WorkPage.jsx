import Container from "../../components/comman/Container.jsx";
import ProjectCard from "../../components/work/ProjectCard.jsx";
import { projects } from "../../data/projects.js";
import "./WorkPage.css";

function WorkPage() {
  return (
    <main className="work-page">
      <Container>
        <header className="work-page__header">
          <p>Selected work</p>

          <h1>Things I've built.</h1>

          <span>
            A collection of projects, experiments, and practical software.
          </span>
        </header>

        <div className="work-page__grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </Container>
    </main>
  );
}

export default WorkPage;