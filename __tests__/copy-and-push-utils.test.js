const copyAndPush = require('../src/copy-and-push-utils.js');

describe('copyAndPush returns a new array with all items in array plus one item', () =>  {
  it('copyAndPush recieves [1,2,3] and 4, returns [1,2,3,4]', () => {
    const initNumArr = [1, 2, 3];

    const newNumArr = copyAndPush(initNumArr, 4);
    
    expect(newNumArr).toEqual([1, 2, 3, 4]);
  });
  it('copyAndPush does not mutate initial array', () => {
    const initNumArr = [1, 2, 3];

    copyAndPush(initNumArr, 4);
    
    expect (initNumArr).toEqual([1, 2, 3]);
  });

});

