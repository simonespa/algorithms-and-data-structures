/**
 * 1. Scan the array wih two pointers
 * 2. Use a set to remember unique characters
 */

export function lengthOfLongestSubstring(s: string): number {
  if (s.length <= 1) return s.length;

  if (s.length === 2) {
    if (s[0] === s[1]) return 2;

    return 1;
  }

  let maxLength = 0

  for (let start = 0; start < s.length; start++) {
    const set = new Set<string>();
    set.add(s[start]);

    for (let stop = start + 1; stop < s.length; stop ++) {
      if (set.has(s[stop])) break
    }

    if (set.size > maxLength) {
      maxLength = set.size;
    }
  }

  return maxLength;
}
