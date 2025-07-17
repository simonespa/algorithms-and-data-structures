import { expect } from 'chai';
import { rotationalCipher } from '@src/exercises/rotational-cipher/index.ts';

describe('Rotational Cipher Exercise', () => {
  const tests = [
    {
      input: 'All-convoYs-9-be:Alert1.',
      rotationFactor: 4,
      expected: 'Epp-gsrzsCw-3-fi:Epivx5.',
    },
    {
      input: 'abcdZXYzxy-999.@',
      rotationFactor: 200,
      expected: 'stuvRPQrpq-999.@',
    },
  ];

  tests.forEach(({ input, rotationFactor, expected }) => {
    it(`rotationalCipher("${input}", ${rotationFactor}) should return "${expected}"`, () => {
      expect(rotationalCipher(input, rotationFactor)).to.equal(expected);
    });
  });
});
