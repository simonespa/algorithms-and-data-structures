import { lengthOfLongestSubstring } from 'src/exercises/longest-substring';

const parameters = [
  // {
  //   input: '',
  //   expected: 0,
  // },
  // {
  //   input: 'a',
  //   expected: 1,
  // },
  {
    input: 'aa',
    expected: 1,
  }
];

test.each(parameters)('lengthOfLongestSubstring', ({ input, expected }) => {
  expect(lengthOfLongestSubstring(input)).toBe(expected);
});
