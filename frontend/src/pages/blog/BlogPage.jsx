import Container from "../../components/comman/Container.jsx";
import BlogCard from "../../components/blog/BlogCard.jsx";
import { blogs } from "../../data/blogs.js";
import "./BlogPage.css";

function BlogPage() {
  return (
    <main className="blog-page">
      <Container>
        <section className="blog-page__intro">
          <p className="blog-page__eyebrow">BLOG</p>

          <h1 className="blog-page__title">
            Writing about
            <br />
            things I build.
          </h1>

          <p className="blog-page__description">
            Notes on backend development, full-stack projects,
            systems, databases, and things I learn along the way.
          </p>
        </section>

        <section className="blog-page__content">
          <div className="blog-page__filters">
            <button className="blog-filter blog-filter--active">
              All
            </button>

            <button className="blog-filter">
              Backend
            </button>

            <button className="blog-filter">
              Frontend
            </button>

            <button className="blog-filter">
              Systems
            </button>
          </div>

          <div className="blog-page__list">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}

export default BlogPage;