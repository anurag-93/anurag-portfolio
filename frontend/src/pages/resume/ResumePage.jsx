import Container from "../../components/comman/Container.jsx";
import { resume } from "../../data/resume.js";
import "./ResumePage.css";

function ResumePage() {
  const {
    personal,
    summary,
    skills,
    projects,
    education,
    additional,
  } = resume;

  return (
    <main className="resume">
      <Container>

        {/* =========================
            INTRO
        ========================= */}

        <section className="resume__intro resume__outer-card">
          <div className="resume__intro-main">
            <p className="resume__label">
              Resume / 2026
            </p>

            <h2>
              {personal.name}
            </h2>

            <p className="resume__role">
              {personal.role}
            </p>
          </div>

          <div className="resume__intro-side">
            <p>{personal.location}</p>

            <a href={`mailto:${personal.email}`}>
              {personal.email}
            </a>

            <div className="resume__socials">
              {personal.links.linkedin && (
                <a
                  href={personal.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn ↗
                </a>
              )}

              {personal.links.github && (
                <a
                  href={personal.links.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>
              )}

              {personal.links.x && (
                <a
                  href={personal.links.x}
                  target="_blank"
                  rel="noreferrer"
                >
                  X ↗
                </a>
              )}
            </div>
          </div>
        </section>


        {/* =========================
            TOOLBAR
        ========================= */}

        <div className="resume__toolbar">
          <span>
            Backend / Fullstack Developer
          </span>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Download PDF
            <span>↓</span>
          </a>
        </div>


        {/* =========================
            ABOUT
        ========================= */}

        <section className="resume__about-grid">

          <div className="resume__card resume__card--about">
            <div className="resume__card-label">
              About
            </div>

            <p>
              {summary}
            </p>
          </div>

          <div className="resume__card resume__card--status">
            <span className="resume__dot" />

            <div>
              <span>Currently</span>

              <strong>
                {additional.careerLevel}
              </strong>
            </div>
          </div>

        </section>


        {/* =========================
            SKILLS
        ========================= */}

        <section className="resume__outer-card resume__section">

          <div className="resume__section-header">
            <span>01</span>

            <h2>
              Skills
            </h2>
          </div>

          <div className="resume__skills-grid">

            {Object.entries(skills).map(
              ([category, items], index) => (

                <div
                  className="resume__skill-card"
                  key={category}
                >
                  <div className="resume__skill-top">
                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span>
                      {items.length} skills
                    </span>
                  </div>

                  <h3>
                    {category}
                  </h3>

                  <div className="resume__chips">
                    {items.map((skill) => (
                      <span key={skill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              )
            )}

          </div>

        </section>


        {/* =========================
            PROJECTS
        ========================= */}

        <section className="resume__outer-card resume__section">

          <div className="resume__section-header">
            <span>02</span>

            <h2>
              Selected Projects
            </h2>
          </div>

          <div className="resume__project-grid">

            {projects.map((project, index) => (

              <article
                className="resume__project-card"
                key={project.title}
              >

                <div className="resume__project-top">
                  <span>
                    0{index + 1}
                  </span>

                  <span>
                    {project.stack.join(" · ")}
                  </span>
                </div>

                <h3>
                  {project.title}
                </h3>

                <p className="resume__project-description">
                  {project.description}
                </p>

                <ul>
                  {project.points.map((point) => (
                    <li key={point}>
                      {point}
                    </li>
                  ))}
                </ul>

                {(project.links.github ||
                  project.links.live) && (

                  <div className="resume__project-links">

                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub ↗
                      </a>
                    )}

                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live ↗
                      </a>
                    )}

                  </div>
                )}

              </article>
            ))}

          </div>

        </section>


        {/* =========================
            EDUCATION
        ========================= */}

        <section className="resume__outer-card resume__section">

          <div className="resume__section-header">
            <span>03</span>

            <h2>
              Education
            </h2>
          </div>

          <div className="resume__education">

            {education.map((item) => (

              <div
                className="resume__education-item"
                key={item.degree}
              >

                <div className="resume__education-date">
                  {item.duration}
                </div>

                <div className="resume__education-main">

                  <h3>
                    {item.degree}
                  </h3>

                  <p>
                    {item.institution}
                  </p>

                  <span>
                    {item.location}
                  </span>

                </div>

              </div>

            ))}

          </div>

        </section>


        {/* =========================
            LOOKING FOR
        ========================= */}

        <section className="resume__outer-card resume__section">

          <div className="resume__section-header">
            <span>04</span>

            <h2>
              Looking For
            </h2>
          </div>

          <div className="resume__roles">

            {additional.targetRoles.map((role) => (

              <div
                className="resume__role-item"
                key={role}
              >
                <span>
                  {role}
                </span>

                <b>
                  ↗
                </b>
              </div>

            ))}

          </div>

        </section>


        {/* =========================
            FOOTER
        ========================= */}

        <footer className="resume__footer">
          <span>
            {personal.name}
          </span>

          <span>
            {personal.email}
          </span>

          <span>
            2026
          </span>
        </footer>

      </Container>
    </main>
  );
}

export default ResumePage;