const unsortedSequence = [11, 3, 10, 9, 1, 23, 12, 7, 113, 39, 2, 948, 5, 82, 49, 33];

function linearSearch(target: number, sequence: number[]): boolean {
  for (let element of sequence) {
    if (element === target) return true;
  }

  return false;
}

linearSearch(11, unsortedSequence);
linearSearch(33, unsortedSequence);
linearSearch(0, unsortedSequence);


const sortedSequence = [1, 2, 3, 5, 7, 9, 10, 11, 12, 23, 33, 39, 49, 82, 113, 948];

function binarySearch(target: number, sequence: number[]): boolean {
  let start = 0;
  let end = sequence.length - 1;

  while (start !== end) {
    let middle = Math.trunc((start + end) / 2);

    if (target < sequence[middle]) {
      end = middle - 1;
    } else {
      start = middle
    }
  }

  return target === sequence[end];
}

binarySearch(11, sortedSequence);
binarySearch(33, sortedSequence);
binarySearch(0, sortedSequence);
