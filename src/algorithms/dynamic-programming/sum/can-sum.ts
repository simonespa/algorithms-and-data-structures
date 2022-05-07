/**
 * Return true if the target sum can be constructed using the numbers
 * from the array. False otherwise.
 *
 * The numbers of the array can be used more than once.
 *
 * All input numbers are non-negative.
 *
 * The brute-force implementation has the following complexity:
 * - Time complexity: O(n^m)
 * - Space complexity: O(m)
 *
 * The memoised version has the following complexity:
 * - Time complexity: O(n * m)
 * - Space complexity: O(m)
 *
 * Where
 * - "n" is the size of the array of numbers (branching factor)
 * - "m" is the target sum (height of the tree)
 *
 * @param targetSum the number to construct summing the numbers from the arrays
 * @param numbers the array of numbers
 * @param buffer the object used for memoisation
 * @returns true if the target sun can be constructed
 */
export default function canSum(targetSum: number, numbers: number[], buffer: object = {}): boolean {
  if (targetSum in buffer) return buffer[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (const number of numbers) {
    if (canSum(targetSum - number, numbers, buffer)) {
      buffer[targetSum] = true;
      return buffer[targetSum];
    }
  }

  buffer[targetSum] = false;
  return buffer[targetSum];
}
