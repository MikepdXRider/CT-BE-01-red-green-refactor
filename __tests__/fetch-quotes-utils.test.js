const fetchQuotes = require('../src/fetch-quotes-utils.js');


describe('fetchQuotes function returns a an object containing name, quote, and image properties from an api.', () =>  {
  it('fetchQuotes returns expected object format.', async () => {
    const expectedObj = {
      name: expect.any(String),
      quote: expect.any(String),
      image: expect.any(String)
    };

    const actualObj = await fetchQuotes();

    expect(actualObj).toEqual(expectedObj);
  });
});
