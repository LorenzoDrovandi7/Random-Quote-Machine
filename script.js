const QUOTES = [
  { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
  {
    text: "Programs must be written for people to read, and only incidentally for machines to execute.",
    author: "Harold Abelson",
  },
  { text: "Premature optimization is the root of all evil.", author: "Donald Knuth" },
  { text: "Simplicity is prerequisite for reliability.", author: "Edsger W. Dijkstra" },
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { text: "Code is like humor. When you have to explain it, it’s bad.", author: "Cory House" },
  { text: "The only way to learn a new programming language is by writing programs in it.", author: "Dennis Ritchie" },
  { text: "Before software can be reusable it first has to be usable.", author: "Ralph Johnson" },
  { text: "Controlling complexity is the essence of computer programming.", author: "Brian Kernighan" },
  {
    text: "Move fast and break things. Unless you are breaking stuff, you are not moving fast enough.",
    author: "Mark Zuckerberg",
  },
];

function getRandomIndex(excludeIndex = -1) {
  if (QUOTES.length <= 1) return 0;
  let idx;
  do {
    idx = Math.floor(Math.random() * QUOTES.length);
  } while (idx === excludeIndex);
  return idx;
}

function QuoteMachine() {
  const [index, setIndex] = React.useState(() => getRandomIndex());
  const quote = QUOTES[index];

  const tweetHref = React.useMemo(() => {
    const text = encodeURIComponent(`"${quote.text}" — ${quote.author}`);
    return `https://twitter.com/intent/tweet?text=${text}`;
  }, [quote]);

  function handleNew() {
    setIndex((i) => getRandomIndex(i));
  }

  return (
    <main>
      <section id="quote-box" aria-live="polite">
        <h1 className="sr-only">Random Quote Machine</h1>
        <p id="text" className="quote-text">
          “{quote.text}”
        </p>
        <p id="author" className="quote-author">
          — {quote.author}
        </p>

        <div className="row">
          <div className="left">
            <a id="tweet-quote" href={tweetHref} target="_blank" rel="noopener noreferrer">
              🐦 Tweet
            </a>
          </div>
          <div className="right">
            <button id="new-quote" onClick={handleNew}>
              New quote
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

ReactDOM.render(<QuoteMachine />, document.getElementById("app"));
