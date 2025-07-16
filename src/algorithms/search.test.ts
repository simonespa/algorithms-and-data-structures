import { expect } from 'chai';
import { linearSearch, binarySearch } from '@src/algorithms/search.ts';

describe('Search', () => {
  const unsortedSequence = [11, 3, 10, 9, 1, 23, 12, 7, 113, 39, 2, 948, 5, 82, 49, 33];
  const sortedSequence = [1, 2, 3, 5, 7, 9, 10, 11, 12, 23, 33, 39, 49, 82, 113, 948];

  describe('Linear Search', () => {
    test('should find 11', () => {
      expect(linearSearch(11, unsortedSequence)).equal(true);
    });

    test('should not find 0', () => {
      expect(linearSearch(0, unsortedSequence)).equal(false);
    });
  });

  describe('Binary Search', () => {
    test('should find 11', () => {
      expect(binarySearch(11, sortedSequence)).equal(true);
    });

    test('should not find 0', () => {
      expect(binarySearch(0, sortedSequence)).equal(false);
    });
  });
});
