import bestSum from 'src/algorithms/dynamic-programming/best-sum';

describe('when target sum can be calculated', () => {
  const numbers: Array<number> = [1, 2, 3];
  const targetSum = 5;

  test('brute force implementation', () => {
    const output = bestSum({ numbers, targetSum });
    expect(output).toHaveLength(2);
    expect(output).toEqual(expect.arrayContaining([2, 3]));
  });

  test('memoised implementation', () => {
    const output = bestSum({ numbers, targetSum, memoised: true });
    expect(output).toHaveLength(2);
    expect(output).toEqual(expect.arrayContaining([2, 3]));
  });
});

describe('when no target sum can be calculated', () => {
  const numbers: Array<number> = [2, 4, 6];
  const targetSum = 7;

  test('brute force implementation', () => {
    const output = bestSum({ numbers, targetSum });
    expect(output).toBeNull();
  });

  test('memoised implementation', () => {
    const output = bestSum({ numbers, targetSum, memoised: true });
    expect(output).toBeNull();
  });
});
