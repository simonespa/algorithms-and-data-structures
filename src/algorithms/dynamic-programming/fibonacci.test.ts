import fibonacci from './fibonacci';

const parameters = [
  { n: -1, expected: 0 },
  { n: 0, expected: 0 },
  { n: 1, expected: 1 },
  { n: 2, expected: 1 },
  { n: 3, expected: 2 },
  { n: 4, expected: 3 },
  { n: 5, expected: 5 },
  { n: 6, expected: 8 },
  { n: 7, expected: 13 },
  { n: 8, expected: 21 },
  { n: 9, expected: 34 },
  { n: 10, expected: 55 },
  { n: 20, expected: 6765 },
  { n: 30, expected: 832040 },
  { n: 40, expected: 102334155 },
  { n: 50, expected: 12586269025 },
  { n: 60, expected: 1548008755920 },
  { n: 70, expected: 190392490709135 },
  { n: 80, expected: 23416728348467684 },
  { n: 90, expected: 2880067194370816000 },
  { n: 100, expected: 354224848179262000000 },
];

test.each(parameters)('fibonacci($n) = $expected', ({ n, expected }) => {
  expect(fibonacci(n)).toBe(expected);
});
