const getName = require('../src/utils.js');

describe('getName returns the name property of an object', () =>  {
  it('spot object returns spot', () => {

    const spot = {
      name: 'spot',
      age: 5,
      weight: '20 lbs'
    };

    expect(getName(spot)).toEqual('spot');
  });

  it('chracter object returns Aang', () => {

    const character = { 
      _id: '5cf5679a915ecad153ab68c9',
      name: 'Aang' 
    };

    expect(getName(character)).toEqual('Aang');
  });
});

