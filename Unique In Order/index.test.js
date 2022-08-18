const uniqueInOrder = require('./index');

describe('Unique In Order', () => {
  it('should reduce duplicates', () => {
    expect(uniqueInOrder('AAAABBBCCDAABBB')).toEqual([
      'A',
      'B',
      'C',
      'D',
      'A',
      'B',
    ]);
  });
  it('Empty Array', () => {
    expect(uniqueInOrder([])).toEqual([]);
  });
  it('should work with one element', () => {
    expect(uniqueInOrder(['A'])).toEqual(['A']);
  });
  it('treat lowercase as different from uppercase', () => {
    expect(uniqueInOrder('ABBCcAD')).toEqual(['A', 'B', 'C', 'c', 'A', 'D']);
  });
  it('work with int arrays', () => {
    expect(uniqueInOrder([1, 2, 3, 3])).toEqual([1, 2, 3]);
  });
  it('work with arrays', () => {
    expect(uniqueInOrder([1, 2, 5, 5])).toEqual([1, 2, 5]);
  });
  it('work with strings', () => {
    expect(uniqueInOrder('1233')).toEqual(['1', '2', '3']);
  });
});
