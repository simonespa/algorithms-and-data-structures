import { isPalindrome } from 'src/exercises/palindrome';

const parameters = [
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

test.each(parameters)('isPalindrome', ({ input, output }) => {
  expect(isPalindrome(input)).toBe(output);
});
