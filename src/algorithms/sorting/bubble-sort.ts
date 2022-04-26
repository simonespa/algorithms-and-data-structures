import SortingOrder from 'src/util/SortingOrder';

export function bubbleSort(input: number[], sortingOrder: SortingOrder) {
  if (input.length <= 1) return;

  for (let i = 0; i < input.length - 1; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (
        (sortingOrder === SortingOrder.Ascending && input[i] > input[j]) ||
        (sortingOrder === SortingOrder.Descending && input[i] < input[j])
      ) {
        const temp = input[j];
        input[j] = input[i];
        input[i] = temp;
      }
    }
  }
}

// 5 3 10 11 7 9
// 3 5 10 11 7 9
// 3 5 10 11 7 9
// 3 5 10 11 7 9
// 3 5 10 7 11 9
// 3 5 10 7 9 11
// 3 5 10 7 9 11
// 3 5 10 7 9 11
// 3 5 7 10 9 11
// 3 5 7 9 10 11

export function sort(input: number[], sortingOrder: SortingOrder) {
  if (input.length <= 1) return;

  let swap = true;
  let j = 1;

  while (swap) {
    let atLeastOneSwap = false;

    for (let i = 0; i < input.length - j; i++) {
      if (
        (sortingOrder === SortingOrder.Ascending && input[i] > input[i + 1]) ||
        (sortingOrder === SortingOrder.Descending && input[i] < input[i + 1])
      ) {
        const temp = input[i + 1];
        input[i + 1] = input[i];
        input[i] = temp;
        atLeastOneSwap = true;
      }
      console.log(input);
    }

    if (!atLeastOneSwap) {
      swap = false;
    } else {
      j++;
    }
  }
}
