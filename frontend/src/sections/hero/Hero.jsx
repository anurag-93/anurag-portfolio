import Container from "../../components/comman/Container.jsx";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <Container>
        <div className="hero__content">

          <div className="hero__intro">
            <div className="hero__profile">
              <img
                src="/images/hero/Profile.jpeg"
                alt="Anurag Rajpoot"
              />
            </div>

            <div className="hero__identity">
              <h1>Anurag Rajpoot</h1>

              <p className="hero__role">
                Backend / Fullstack Developer
                <span> · </span>
                Noida, India
              </p>

              <p className="hero__description">
                I build fast, practical, and maintainable software with a
                focus on backend systems, APIs, and fullstack applications.
              </p>

              <div className="hero__links" aria-label="Social links">
                <a href="https://github.com/anurag-93" target="_blank" rel="noreferrer">
                  GitHub
                </a>

                <a href="https://www.linkedin.com/in/anurag-rajpoot-760955304/" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>

                <a href="https://x.com/anurag93__" target="_blank" rel="noreferrer">
                  X
                </a>

                <a href="mailto:codewithanurag93@gmail.com" target="_blank" rel="noreferrer">
                  Email
                </a>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}

export default Hero;