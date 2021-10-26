
const { default: fetch } = require('cross-fetch');
const fetchQuotes = require('../src/fetch-quotes-utils.js');

jest.mock('cross-fetch');

describe('fetchQuotes function returns an object containing name, quote, and image properties from an api.', () =>  {
  it('fetchQuotes returns expected object format.', async () => {
    

    // This was really hard and confusing. When we're learning new things it's hard to remember and trust fundamental knowledge because I'm not confident in the new environment or how it's different variables might affect my existing truths.
    // Our fetch response must be an object with a json method. 
    // This is a fact because in fetchQuotes() `response.json()` implies that response is an object, and json() is a method. Thus, when we are mocking fetch, we must mock this method. Huge shoutout to Erich for helping me see this!
    const mockResponse = {
      json: () => [
        {
          'character': 'Fry',
          'quote': 'In my time we didn\'t depend on high-tech gadgets like you do. We didn\'t need\na mechanical washing unit to wash our clothes, we just used a washing machine!',
          'image': 'https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554904133/fry.png'
        }
      ]
    };

    fetch.mockResolvedValue(mockResponse);
    
    const expectedObj = {
      name: expect.any(String),
      quote: expect.any(String),
      image: expect.any(String)
    };

    const actualObj = await fetchQuotes();

    expect(actualObj).toEqual(expectedObj);
  });
});
