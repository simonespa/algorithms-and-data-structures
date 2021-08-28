import NumericHeap, { HeapType } from '../../src/collections/NumericHeap';

describe('NumericHeap', () => {
  test('basic', () => {
    const input = [2, 4, 7, 1, 5, 3];
    const expected = [7, 5, 3, 1, 4, 2];
    const heap = new NumericHeap(input, HeapType.MAX);
    expect(heap.toArray()).toEqual(expected);
  });
});
