/**
 * Scan the whole array using a double-index approach, one that points at the beginning
 * of the sliding window and the other that points at the end.
 *
 * The sliding window will be scanned at each iteration and the maximum number will be found.
 *
 * @time N! / (N - k)! * k!, where N is the size of the array and k is the size of the window
 * @param nums the input array
 * @param k the size of the window
 * @returns an array containing the maximum for each
 */
export function maxSlidingWindow(nums: number[], k: number): number[] {
  const N = nums.length;
  let a = 0;
  let b;

  if (k >= N) {
    b = N - 1;
  } else {
    b = k - 1;
  }

  const result = [];

  while (b < N) {
    let max = nums[a];
    for (let i = a + 1; i <= b; i += 1) {
      if (nums[i] > max) {
        max = nums[i];
      }
    }
    result.push(max);
    a += 1;
    b += 1;
  }

  return result;
}

// An improvement to the previous approach is to keep a reference of the position of the maximum for each sliding window.
// If the number is still in frame during the next slide, I only need to compare it with the next number
