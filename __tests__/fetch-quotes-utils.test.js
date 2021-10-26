const fetchQuotes = require('../src/fetch-quotes-utls.js');


describe('fetchQuotes function returns a an object containing name, quote, and image properties from an api.', () =>  {
  it('fetchQuotes returns expected object format.', () => {
    const expectedObj = {
      name: expect.any(String),
      quote: expect.any(String),
      img: expect.any(String)
    };

    const actualObj = fetchQuotes();
  
    expect(actualObj).toEqual(expectedObj);
  });
});
