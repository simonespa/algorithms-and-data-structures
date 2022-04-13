function init(A) {
  const tokens = `${A}`.split('');
  return {
    digit: Number(tokens[0]),
    numberPositions: tokens.length
  }
}
/**
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
function getUniformIntegerCountInInterval(A, B) {
  // if A and B are less than or equal to 9
  if (B <= 9) {
    return B - A + 1;
  }

  // if only A is less than 10 add the diff in the counter
  let counter = 0
  const diff = 10 - A;

  if (diff > 0) {
    counter = diff;
  }

  // build the first unifor number picking the left-most digit
  let { digit, numberPositions } = init(A);
  let number = `${digit}`.repeat(numberPositions);

  // if this number is less than A select the next uniform number
  if (Number(number) < A) {
    if (digit === 9) {
      digit = 1;
      numberPositions++
    } else {
      digit++
    }
  }

  // while the number is less or equal to B
  while (Number(number) <= B) {
    // increase the counter
    counter++;

    // find the next uniform number
    if (digit === 9) {
      digit = 1;
      numberPositions++
    } else {
      digit++
    }

    number = `${digit}`.repeat(numberPositions);
  }


  return counter;
}
