describe('fetchQuotes function returns a an object containing name, quote, and image properties from an api.', () =>  {
  it('fetchQuotes returns expected object format.', () => {
    const newQuoteObj = {
      name: 'Fry',
      quote: 'What would Ted Lasso do?',
      img: 'https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554904133/fry.png'
    };
  
    expect(newQuoteObj).toEqual({});
  });
});
