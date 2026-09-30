import "./BlogCard.css";

function BlogCard({ blog }) {
  return (
    <article className="blog-card">
      <div className="blog-card__meta">
        <span>{blog.category}</span>
        <span>{blog.date}</span>
      </div>

      <h2 className="blog-card__title">{blog.title}</h2>

      <p className="blog-card__excerpt">{blog.excerpt}</p>

      <a href={`/blog/${blog.slug}`} className="blog-card__link">
        Read article
        <span>↗</span>
      </a>
    </article>
  );
}

export default BlogCard;