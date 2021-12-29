import mergeSort from 'src/algorithms/sorting/merge-sort';
import SortingOrder from 'src/util/SortingOrder';

describe('src/algorithms/sorting/merge-sort', () => {
  test('mergeSort ascending', () => {
    const input = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    expect(mergeSort(input, SortingOrder.Ascending)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  test('mergeSort descending', () => {
    const input = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    expect(mergeSort(input, SortingOrder.Descending)).toEqual(input);
  });
});
