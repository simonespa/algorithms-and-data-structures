import canSum from './can-sum';

const parameters = [
  {
    targetSum: -5,
    numbers: [10, 1, 0],
    expected: false,
  },
  {
    targetSum: -1,
    numbers: [],
    expected: false,
  },
  {
    targetSum: 0,
    numbers: [3, 7, 0],
    expected: true,
  },
  {
    targetSum: 0,
    numbers: [1],
    expected: true,
  },
  {
    targetSum: 0,
    numbers: [],
    expected: true,
  },
  {
    targetSum: 55,
    numbers: [],
    expected: false,
  },
  {
    targetSum: 12,
    numbers: [2, 4, 6, 12],
    expected: true,
  },
  {
    targetSum: 12,
    numbers: [1],
    expected: true,
  },
  {
    targetSum: 12,
    numbers: [7, 11, 8],
    expected: false,
  },
  {
    targetSum: 300,
    numbers: [2, 3, 30, 5, 10],
    expected: true,
  },
];

test.each(parameters)(
  'canSum($targetSum, $numbers) = $expected',
  ({ targetSum, numbers, expected }) => {
    expect(canSum(targetSum, numbers)).toBe(expected);
  }
);
