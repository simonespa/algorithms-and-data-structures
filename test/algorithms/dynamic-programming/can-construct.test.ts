import canConstruct from 'src/algorithms/dynamic-programming/can-construct';

describe('when the string can be constructed', () => {
  const word = 'algorithms';
  const substrings = ['hms', 'al', 'rit', 'go'];

  test('brute force implementation', () => {
    const output = canConstruct({ word, substrings });
    expect(output).toBe(true);
  });

  test('memoised implementation', () => {
    const output = canConstruct({ word, substrings, memoised: true });
    expect(output).toBe(true);
  });
});

describe('when the string can not be constructed', () => {
  const word = 'algorithms';
  const substrings = ['hm', 'al', 'rit', 'g'];

  test('brute force implementation', () => {
    const output = canConstruct({ word, substrings });
    expect(output).toBe(false);
  });

  test('memoised implementation', () => {
    const output = canConstruct({ word, substrings, memoised: true });
    expect(output).toBe(false);
  });
});
