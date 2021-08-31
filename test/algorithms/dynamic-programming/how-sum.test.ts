import howSum from '../../../src/algorithms/dynamic-programming/how-sum';

const parameters = [
  {targetSum: 10, numbers: [5, 7, 3, 2, 1], expected: [5, 5]},
  {targetSum: 3, numbers: [1, 3], expected: [1, 1, 1]},
  {targetSum: 3, numbers: [3, 1], expected: [3]},
  {targetSum: 7, numbers: [2, 4, 6], expected: null},
  {targetSum: 0, numbers: [3, 8, 9], expected: []},
  {targetSum: -1, numbers: [5, 10, 22], expected: null},
  {targetSum: 11, numbers: [], expected: null}
];

describe('[src/algorithms/dynamic-programming/how-sum]', () => {
  test.each(parameters)('howSum($targetSum, $numbers) must be $expected', ({ targetSum, numbers, expected }) => {
    const output = howSum({ targetSum, numbers });
    expect(output).toEqual(expected);
  });

  test('test howSum with memoisation', () => {
    const targetSum = 9999;
    const numbers: Array<number> = [2, 4];
    const output = howSum({ targetSum, numbers, memoised: true});
    expect(output).toEqual(null);
  });
});
