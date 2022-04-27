/**
 * Return the nth element of the Fibonacci sequence.
 *
 * This algorithm is implemented with the classical
 * recursive approach and made efficient using memoisation.
 *
 * The brute force solution has the following complexity:
 * - Time O(2^n)
 * - Space O(n)
 *
 * The memoised version has the following complexity:
 * - Time O(n)
 * - Space O(n)
 *
 * @param n the nth element in the Fibonacci sequence.
 */
export default function fibonacci(n: number, buffer: object = {}): number {
  if (n in buffer) return buffer[n];
  if (n <= 0) return 0;
  if (n <= 2) return 1;

  buffer[n] = fibonacci(n - 1, buffer) + fibonacci(n - 2, buffer);
  return buffer[n];
}
