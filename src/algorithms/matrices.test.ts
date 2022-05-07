import { sum, sumDiagonal, sumAntiDiagonal, sumFrame } from 'src/algorithms/matrices';

const matrix = [
  [7, 3, 1, 0],
  [9, 6, 4, 5],
  [1, 9, 5, 4],
  [6, 8, 2, 3],
];

test('sum', () => {
  expect(sum(matrix)).toBe(73);
});

test('sumDiagonal', () => {
  expect(sumDiagonal(matrix)).toBe(21);
});

test('sumAntiDiagonal', () => {
  expect(sumAntiDiagonal(matrix)).toBe(19);
});

test('sumFrame', () => {
  expect(sumFrame(matrix)).toBe(49);
});
