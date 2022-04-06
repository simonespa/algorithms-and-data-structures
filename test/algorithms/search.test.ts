import { linearSearch, binarySearch } from 'src/algorithms/search';

const unsortedSequence = [11, 3, 10, 9, 1, 23, 12, 7, 113, 39, 2, 948, 5, 82, 49, 33];
const sortedSequence = [1, 2, 3, 5, 7, 9, 10, 11, 12, 23, 33, 39, 49, 82, 113, 948];

describe('Linear Search', () => {
  test('should find 11', () => {
    expect(linearSearch(11, unsortedSequence)).toBe(true);
  });

  test('should not find 0', () => {
    expect(linearSearch(0, unsortedSequence)).toBe(false);
  });
});

describe('Binary Search', () => {
  test('should find 11', () => {
    expect(binarySearch(11, sortedSequence)).toBe(true);
  });

  test('should not find 0', () => {
    expect(binarySearch(0, sortedSequence)).toBe(false);
  });
});
