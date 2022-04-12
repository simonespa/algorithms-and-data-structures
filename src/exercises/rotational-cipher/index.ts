// Add any extra import statements you may need here
const letters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
const index = {
  a: '0',
  b: '1',
  c: '2',
  d: '3',
  e: '4',
  f: '5',
  g: '6',
  h: '7',
  i: '8',
  j: '9',
  k: '10',
  l: '11',
  m: '12',
  n: '13',
  o: '14',
  p: '15',
  q: '16',
  r: '17',
  s: '18',
  t: '19',
  u: '20',
  v: '21',
  w: '22',
  x: '23',
  y: '24',
  z: '25',
};

// Add any helper functions you may need here
function encrypt(char, rotationFactor) {
  // to make sure all upper and lower case letters are taken into account
  const lowerCaseChar = char.toLowerCase();
  const entry = index[lowerCaseChar];

  // it is a letter because an entry has been found in the index
  if (typeof entry === 'string') {
    // shift the index module 26 (the size of the alphabet)
    const shiftedIndex = (Number(entry) + rotationFactor) % 26;
    const encryptedLetter = letters[shiftedIndex];
    // the original character was already lower case
    if (char === lowerCaseChar) {
      return encryptedLetter;
    }
    // the original character was upper case
    return encryptedLetter.toUpperCase();
  }

  // if it is an integer number
  if (!isNaN(char)) {
    // shift the index module 10 (the size of the numeric list)
    const shiftedIndex = (Number(char) + rotationFactor) % 10;
    return `${shiftedIndex}`;
  }

  // It is a symbol, keep it unchanged
  return char;
}

export function rotationalCipher(input, rotationFactor) {
  /**
   * We can resize the "rotationFactor" by using the modular arithmetic
   * The module is the size of the input and rotationFactor % input.length
   * gives the new rotation factor bound to the size (and reduce the constant part of the runtime complexity)
   */

  const inputArray = Array.from(input);
  const responseArray = new Array(inputArray.length);

  for (let i = 0; i < inputArray.length; i++) {
    responseArray[i] = encrypt(inputArray[i], rotationFactor);
  }

  return responseArray.join('');
}
