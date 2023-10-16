export function isPalindrome(input: string): boolean {
  if (input.length === 0 || input.length === 1) return true

  let i = 0;
  let j = input.length - 1;

  while (i < j) {
    if (input[i] !== input[j]) return false

    i++;
    j--;
  }

  return true;
}
