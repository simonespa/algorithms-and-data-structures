/**
 * Return an array containing the shortest combination of the elements taken
 * from the array of numbers to add up to the target sum.
 *
 * The elements from the array of numbers can be used more than once.
 *
 * if there is a tie for the shortest combination, you may return any shortest combination.
 *
 * If no combination exists that adds up to the target sum, null is returned.
 *
 * The brute-force implementation has the following complexity:
 * - Time complexity: O(m * n^m)
 * - Space complexity: O(m)
 *
 * The memoised version has the following complexity:
 * - Time complexity: O(n * m^2)
 * - Space complexity: O(m^2)
 *
 * Where
 * - "n" is the size of the array of numbers (branching factor)
 * - "m" is the target sum (height of the tree)
 *
 * @param targetSum the number to construct summing the numbers from the arrays
 * @param numbers the array of numbers
 * @param buffer the object used for memoisation
 * @returns
 */
export default function shortestSum(
  targetSum: number,
  numbers: number[],
  buffer: object = {}
): number[] | null {
  if (targetSum in buffer) return buffer[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let min: null | number[] = null;

  for (const number of numbers) {
    const bestSumResult = shortestSum(targetSum - number, numbers, buffer);
    if (bestSumResult !== null) {
      const result = [...bestSumResult, number];
      if (min === null || result.length < min.length) {
        min = result;
      }
    }
  }

  buffer[targetSum] = min;
  return min;
}
