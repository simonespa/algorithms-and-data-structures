import { expect } from 'chai';
import { isPalindrome } from '@src/exercises/palindrome/index.ts';

describe('Palindrome Exercise', () => {
  const tests = [
    {
      input: '',
      output: true,
    },
    {
      input: 'a',
      output: true,
    },
    {
      input: 'aa',
      output: true,
    },
    {
      input: 'ab',
      output: false,
    },
    {
      input: 'aba',
      output: true,
    },
    {
      input: 'abc',
      output: false,
    },
  ];

  tests.forEach(({ input, output }) => {
    it(`isPalindrome("${input}") should return ${output}`, () => {
      expect(isPalindrome(input)).to.equal(output);
    });
  });
});
