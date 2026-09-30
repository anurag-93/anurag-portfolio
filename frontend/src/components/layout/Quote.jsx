import "./Quote.css";

const quotes = {
  home: {
    text: "Build things that are useful, simple, and worth maintaining.",
    author: "Anurag Rajpoot",
  },

  work: {
    text: "Good software should solve problems without creating new ones.",
    author: "Anurag Rajpoot",
  },

  resume: {
    text: "Keep learning. Keep building. Keep improving.",
    author: "Anurag Rajpoot",
  },

  blog: {
    text: "Write down what you learn. Someone else may need it tomorrow.",
    author: "Anurag Rajpoot",
  },
};

function Quote({ page = "home" }) {
  const quote = quotes[page] || quotes.home;

  return (
    <section className="quote">
      <div className="quote__box">

        <span className="quote__mark quote__mark--left">
          “
        </span>

        <div className="quote__content">
          <p>{quote.text}</p>

          <span>— {quote.author}</span>
        </div>

        <span className="quote__mark quote__mark--right">
          ”
        </span>

      </div>
    </section>
  );
}

export default Quote;