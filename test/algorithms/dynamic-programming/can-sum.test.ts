import canSum from 'src/algorithms/dynamic-programming/can-sum';

describe('when target sum can be calculated', () => {
  const numbers: Array<number> = [1, 2, 3];
  const targetSum: number = 5;

  test('brute force implementation', () => {
    const output = canSum({ numbers, targetSum });
    expect(output).toEqual(true);
  });

  test('memoised implementation', () => {
    const output = canSum({ numbers, targetSum, memoised: true });
    expect(output).toEqual(true);
  });
});

describe('when no target sum can be calculated', () => {
  const numbers: Array<number> = [2, 4, 6];
  const targetSum: number = 7;

  test('brute force implementation', () => {
    const output = canSum({ numbers, targetSum });
    expect(output).toEqual(false);
  });

  test('memoised implementation', () => {
    const output = canSum({ numbers, targetSum, memoised: true });
    expect(output).toEqual(false);
  });
});
