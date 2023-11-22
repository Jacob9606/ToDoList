const quotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    author: " - Steve Jobs",
  },
  {
    quote: "The purpose of our lives is to be happy.",
    author: " - Dalai Lama",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: " - John Lennon",
  },
  {
    quote: "Get busy living or get busy dying.",
    author: " - Stephen King",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: " - Mae West",
  },
  {
    quote:
      "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    author: " - Thomas A. Edison",
  },
  {
    quote:
      "If life were predictable it would cease to be life, and be without flavor.",
    author: " - Eleanor Roosevelt",
  },
  {
    quote:
      "The whole secret of a successful life is to find out what is one's destiny to do, and then do it.",
    author: " - Henry Ford",
  },
  {
    quote: "In order to write about life first you must live it.",
    author: " - Ernest Hemingway",
  },
  {
    quote:
      "The big lesson in life, baby, is never be scared of anyone or anything.",
    author: " - Frank Sinatra",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
