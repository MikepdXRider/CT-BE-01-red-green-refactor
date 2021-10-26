const getName = require('../src/utils.js');

describe('Red, Green, Refactor Lab', () =>  {
  it('getName returns the name property of an object', () => {

    const spot = {
      name: 'spot',
      age: 5,
      weight: '20 lbs'
    };
    
    const nameStr = getName(spot);

    expect(nameStr).toEqual('spot');
  });
});

