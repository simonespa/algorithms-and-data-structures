export function majority(nums: number[]): number | null {
  const n = nums.length;
  const map = new Map();

  for (const num of nums) {
    let counter = map.get(num);

    if (counter === undefined) {
      counter = 1;
    } else {
      counter++;
    }

    if (counter >= n / 2) return num;

    map.set(num, counter);
  }

  return null;
}
