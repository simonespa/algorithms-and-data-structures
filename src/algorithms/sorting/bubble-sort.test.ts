import SortingOrder from 'src/util/SortingOrder';
import { bubbleSort, sort } from './bubble-sort';

const params = [
  {
    label: 'Reverse ordering for Ascending',
    input: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    sortingOrder: SortingOrder.Ascending,
    expected: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    label: 'Reverse ordering for Descending',
    input: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    sortingOrder: SortingOrder.Descending,
    expected: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
  },
  {
    label: 'Same Ascending order',
    input: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    sortingOrder: SortingOrder.Ascending,
    expected: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    label: 'Same Descending order',
    input: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    sortingOrder: SortingOrder.Descending,
    expected: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
  },
  {
    label: 'Randomly sorted with duplicates for Ascending',
    input: [15, 2, 4, 1, 7, 22, 5, -3, 9, -4, 5, 49, 993, 1, 10, 1, 111, 9, 2],
    sortingOrder: SortingOrder.Ascending,
    expected: [],
  },
  {
    label: 'Randomly sorted with duplicates for Descending',
    input: [15, 2, 4, 1, 7, 22, 5, -3, 9, -4, 5, 49, 993, 1, 10, 1, 111, 9, 2],
    sortingOrder: SortingOrder.Descending,
    expected: [],
  },
  {
    label: 'Only one element for Ascending',
    input: [7],
    sortingOrder: SortingOrder.Ascending,
    expected: [7],
  },
  {
    label: 'Only one element for Descending',
    input: [7],
    sortingOrder: SortingOrder.Descending,
    expected: [7],
  },
  {
    label: 'Empty array for Ascending',
    input: [],
    sortingOrder: SortingOrder.Ascending,
    expected: [],
  },
  {
    label: 'Empty array for Descending',
    input: [],
    sortingOrder: SortingOrder.Descending,
    expected: [],
  },
];

test.each(params)('bubbleSort - $label', ({ input, sortingOrder, expected }) => {
  bubbleSort(input, sortingOrder);
  expect(input).toEqual(expected);
});

test.each(params)('sort - $label', ({ input, sortingOrder, expected }) => {
  sort(input, sortingOrder);
  expect(input).toEqual(expected);
});
