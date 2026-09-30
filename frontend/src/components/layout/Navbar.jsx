import { Link } from "react-router-dom";
import Container from "../comman/Container.jsx";
import "./Navbar.css";

function Navbar({ theme, toggleTheme }) {
  return (
    <header className="navbar">
      <Container>
        <nav className="navbar__inner" aria-label="Main navigation">

          <Link to="/" className="navbar__brand">
            AR<span>.</span>
          </Link>

          <div className="navbar__links">
            <Link to="/">Home</Link>
            <Link to="/work">Work</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/blog">Blog</Link>
          </div>

          <button
            type="button"
            className="navbar__theme"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? "☀" : "☾"}
          </button>

        </nav>
      </Container>
    </header>
  );
}

export default Navbar;