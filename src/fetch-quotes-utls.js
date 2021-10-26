const { default: fetch } = require('cross-fetch');

const fetchQuotes = () => {
  return {
    name: 'Fry',
    quote: 'What would Ted Lasso do?',
    img: 'https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554904133/fry.png'
  };
};
module.exports = fetchQuotes;
