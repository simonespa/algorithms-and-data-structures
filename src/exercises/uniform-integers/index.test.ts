import { getUniformIntegerCountInInterval } from '.';

const parameters = [
  {
    start: 75,
    end: 300,
    expected: 5,
  },
  {
    start: 11,
    end: 99,
    expected: 9,
  },
  {
    start: 999999999999,
    end: 999999999999,
    expected: 1,
  },
  {
    start: 2,
    end: 8,
    expected: 7,
  },
  {
    start: 7,
    end: 11,
    expected: 4,
  },
  {
    start: 2,
    end: 2,
    expected: 1,
  },
  {
    start: 10,
    end: 11,
    expected: 1,
  },
  {
    start: 55,
    end: 11,
    expected: 0,
  },
  {
    start: 99,
    end: 459,
    expected: 5,
  },
  {
    start: 79,
    end: 311,
    expected: 4,
  },
  {
    start: 0,
    end: 1,
    expected: 0,
  },
  {
    start: -3,
    end: 0,
    expected: 0,
  },
  {
    start: 3.2,
    end: 11,
    isException: true,
  },
];

test.each(parameters)(
  'rotationalCipher("$start", $end) => $expected',
  ({ start, end, isException, expected }) => {
    if (isException) {
      expect(() => getUniformIntegerCountInInterval(start, end)).toThrow(
        'The two numbers in input must be integers',
      );
    } else {
      expect(getUniformIntegerCountInInterval(start, end)).toBe(expected);
    }
  },
);
