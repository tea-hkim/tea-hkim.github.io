const quotes = [
  {
    quote:
      "I’ve failed over and over and over again in my life and that is why I succeed",
    author: "Michael Jordan",
  },
  {
    quote: "There is no man living that can not do more than he thinks he can",
    author: "Henry Ford",
  },
  {
    quote:
      "Never give up on something that you can’t go a day without thinking about",
    author: "Winston Churchill",
  },
  {
    quote:
      "Most people are other people. Their thoughts are someone elses opinions, their lives a mimicry, their passions a quotation",
    author: "Oscar Wilde",
  },
  {
    quote: "It is never too late to be what you might have been",
    author: "George Eliot",
  },
  {
    quote:
      "Who controls the past controls the future; who controls the present controls the past",
    author: "George Orwell",
  },
  {
    quote: "Whatever the mind can conceive and believe, it can achieve",
    author: "Napoleon Hill",
  },
  {
    quote: "What does not kill me, makes me stronger",
    author: "Friedrich Nietzsche",
  },
  {
    quote: "What is evil? Whatever springs from weakness",
    author: "Friedrich Nietzsche",
  },
  {
    quote: "The journey is the reward",
    author: "Steve Jobs",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
