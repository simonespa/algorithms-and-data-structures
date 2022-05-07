export function linearSearch(target: number, sequence: number[]): boolean {
  for (const element of sequence) {
    if (element === target) return true;
  }

  return false;
}

/**
 * Searches the target number within the sequence.
 *
 * @param target the target number to search
 * @param sequence the sequence of number (must be sorted)
 * @returns true if the target number has been found in the sequence
 */
export function binarySearch(target: number, sequence: number[]): boolean {
  let start = 0;
  let end = sequence.length - 1;

  while (start !== end) {
    const middle = Math.trunc((start + end) / 2);

    if (target < sequence[middle]) {
      end = middle - 1;
    } else {
      start = middle;
    }
  }

  return target === sequence[end];
}
