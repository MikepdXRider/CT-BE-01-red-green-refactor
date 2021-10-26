describe('copyAndPush returns a new array with all items in array plus one item', () =>  {
  it('copyAndPush recieves [1,2,3] and 4, returns [1,2,3,4]', () => {
    const numArr = [1, 2, 3];
    
    expect(numArr).toEqual([1, 2, 3, 4]);
  });
});

