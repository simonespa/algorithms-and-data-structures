/**
 * Return the nth element of the Fibonacci sequence.
 *
 * This algorithm is implemented with the classical
 * recursive approach and made efficient using memoisation.
 *
 * The brute-force implementation has the following complexity:
 * - Time O(2^n)
 * - Space O(n)
 *
 * The memoised version has the following complexity:
 * - Time O(n)
 * - Space O(n)
 *
 * Where
 * - 2 is the number of time the function is recursively called each time (branching factor)
 * - "n" is the index of the nth element (height of the tree)
 *
 * @param n the index of the Fibonacci sequence to return
 * @param buffer the object used for memoisation (see https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)
 * @returns the nth element of the Fibonacci sequence
 */
export default function fibonacci(
  n: number,
  buffer: Record<number, number> = {},
): number {
  if (buffer[n] !== undefined) return buffer[n];
  if (n <= 0) return 0;
  if (n <= 2) return 1;

  buffer[n] = fibonacci(n - 1, buffer) + fibonacci(n - 2, buffer);
  return buffer[n];
}
