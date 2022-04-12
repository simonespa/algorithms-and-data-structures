import canSum from 'src/algorithms/dynamic-programming/can-sum';

describe('when target sum can be calculated', () => {
  const numbers: Array<number> = [1, 2, 3];
  const targetSum = 5;

  test('brute force implementation', () => {
    const output = canSum({ numbers, targetSum });
    expect(output).toBe(true);
  });

  test('memoised implementation', () => {
    const output = canSum({ numbers, targetSum, memoised: true });
    expect(output).toBe(true);
  });
});

describe('when no target sum can be calculated', () => {
  const numbers: Array<number> = [2, 4, 6];
  const targetSum = 7;

  test('brute force implementation', () => {
    const output = canSum({ numbers, targetSum });
    expect(output).toBe(false);
  });

  test('memoised implementation', () => {
    const output = canSum({ numbers, targetSum, memoised: true });
    expect(output).toBe(false);
  });
});
