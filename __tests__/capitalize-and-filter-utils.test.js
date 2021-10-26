const capitalizeAndFilter = require('../src/capitalize-and-filter-utils.js');

describe('capitalizeAndFilter function returns capitalized and filtered array.', () =>  {
  it('capitalizeAndFilter recieves an array of grocery items, returns an array of capitalized items excluding those beginning with F', () => {
    const groceryArr = ['apples', 'bananas', 'fruit-cups', 'fire-wood', 'cilantro'];

    const newArr = capitalizeAndFilter(groceryArr);

    expect(newArr).toEqual(['APPLES', 'BANANAS', 'CILANTRO']);
  });
});
