const fetch = require('cross-fetch');

const fetchQuotes = async () => {
  const response = await fetch('http://futuramaapi.herokuapp.com/api/quotes/1');
  const body = await response.json();

  const [quoteObj] = body;
  const { character, image, quote } = quoteObj;

  return {
    name: character,
    image,
    quote
  };

};

module.exports = fetchQuotes;
