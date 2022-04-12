import fibonacci from 'src/algorithms/dynamic-programming/fibonacci';

const parameters = [
  { n: -1, expected: 1 },
  { n: 0, expected: 1 },
  { n: 1, expected: 1 },
  { n: 2, expected: 1 },
];

test.each(parameters)('fibonacci($n) must be $expected', ({ n, expected }) => {
  const output = fibonacci({ n });
  expect(output).toEqual(expected);
});

test('memoised implementation with fibonacci(100)', () => {
  const n = 100;
  const expected = 354224848179262000000;
  const output = fibonacci({ n, memoised: true });
  expect(output).toEqual(expected);
});
