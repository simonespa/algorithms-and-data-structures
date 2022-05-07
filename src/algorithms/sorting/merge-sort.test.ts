import mergeSort from 'src/algorithms/sorting/merge-sort';
import SortingOrder from 'src/util/SortingOrder';

const parameters = [
  {
    input: null,
    sortingOrder: SortingOrder.Ascending,
    expected: null,
  },
  {
    input: [],
    sortingOrder: SortingOrder.Ascending,
    expected: [],
  },
  {
    input: [],
    sortingOrder: SortingOrder.Descending,
    expected: [],
  },
  {
    input: [3],
    sortingOrder: SortingOrder.Ascending,
    expected: [3],
  },
  {
    input: [9],
    sortingOrder: SortingOrder.Descending,
    expected: [9],
  },
  {
    input: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5],
    sortingOrder: SortingOrder.Ascending,
    expected: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    input: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    sortingOrder: SortingOrder.Descending,
    expected: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5],
  },
  {
    input: [7, 7, 7, 7, 7, 1],
    sortingOrder: SortingOrder.Ascending,
    expected: [1, 7, 7, 7, 7, 7],
  },
];

test.each(parameters)('mergeSort($input, $sortingOrder)', ({ input, sortingOrder, expected }) => {
  expect(mergeSort(input, sortingOrder)).toEqual(expected);
});
