const fetch = require('cross-fetch');

const fetchQuotes = async () => {
  const response = await fetch('http://futuramaapi.herokuapp.com/api/quotes/1');
  const body = await response.json();

  const { character, image, quote } = body[0];

  return {
    name: character,
    image,
    quote
  };
  
};

module.exports = fetchQuotes;
