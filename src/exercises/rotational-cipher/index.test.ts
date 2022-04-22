import { rotationalCipher } from '.';

const parameters = [
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

test.each(parameters)('rotationalCipher("$input", $rotationFactor)', (props) => {
  const { input, rotationFactor, expected } = props;
  expect(rotationalCipher(input, rotationFactor)).toBe(expected);
});
