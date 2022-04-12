export function linearSearch(target: number, sequence: number[]): boolean {
  for (let element of sequence) {
    if (element === target) return true;
  }

  return false;
}

export function binarySearch(target: number, sequence: number[]): boolean {
  let start = 0;
  let end = sequence.length - 1;

  while (start !== end) {
    let middle = Math.trunc((start + end) / 2);

    if (target < sequence[middle]) {
      end = middle - 1;
    } else {
      start = middle;
    }
  }

  return target === sequence[end];
}
