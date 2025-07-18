/**
 * In case B > 9, the end of the interval is not a single-digit, but A can still be.
 *
 * In that case, we want to calculate 10 - A
 *
 * If the difference is negative or equal to zero, it means that also A isn't a single-digit number
 * and we initialise the counter with 0.
 *
 * If the difference is a positive number, A is a single-digit number and we want to calculate how many
 * of them there are between A and 9 and initialise the counter with this.
 *
 * @param A the beginning of the interval
 * @returns the counter
 */
function initTheCounter(A: number): number {
  const diff = 10 - A;

  return diff > 0 ? diff : 0;
}

/**
 * Returns the first uniform number that is greater than or equal to A.
 *
 * @param A the initial number of the interval
 * @returns the first uniform number N >= A
 */
function findTheFirstUniformInteger(A: number) {
  const tokens = `${A}`.split("");

  // gets the left-most digit of the number and the number of digits the number is composed of
  let leftMostDigit = Number(tokens[0]);
  const numberOfDigits = tokens.length;

  // builds the uniform integer
  let uniformInteger = `${leftMostDigit}`.repeat(numberOfDigits);

  // if this number is less than A, pick the next uniform number

  if (Number(uniformInteger) < A) {
    // we don't need to check for the case where leftMostDigit === 9
    // because any uniform integer with a left-most digit equal to 9 will never be
    // strictly less than A

    leftMostDigit += 1;

    uniformInteger = `${leftMostDigit}`.repeat(numberOfDigits);
  }

  return { uniformInteger, leftMostDigit, numberOfDigits };
}

/**
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
export function getUniformIntegerCountInInterval(A: number, B: number) {
  /*
   * Input check
   */

  if (!Number.isInteger(A) || !Number.isInteger(B))
    throw new Error("The two numbers in input must be integers");

  if (A > B || A <= 0) return 0;

  /*
   * Given 1 <= A <= B
   *
   * if B <= 9 then A <= 9
   *
   * This means that both ends of the intrval are single-digit numbers
   * and we can return the difference + 1 as a result
   */

  if (B <= 9) {
    return B - A + 1;
  }

  let counter = initTheCounter(A);

  let startInterval = A;

  if (counter > 0) {
    startInterval = 10;
  }

  let { uniformInteger, leftMostDigit, numberOfDigits } =
    findTheFirstUniformInteger(startInterval);

  // while the number is less or equal to B
  while (Number(uniformInteger) <= B) {
    // increase the counter
    counter += 1;

    // find the next uniform number
    if (leftMostDigit === 9) {
      leftMostDigit = 1;
      numberOfDigits += 1;
    } else {
      leftMostDigit += 1;
    }

    uniformInteger = `${leftMostDigit}`.repeat(numberOfDigits);
  }

  return counter;
}
