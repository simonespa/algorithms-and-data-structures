function swap(array: string[], i: number, j: number): string[] {
  const clone = [...array]
  const temp = clone[i]
  clone[i] = clone[j]
  clone[j] = temp
  return clone
}

function countMatchingPairs(s: string[], t: string[]): number {
  let counter = 0;
  for (let index = 0; index < s.length; index++) {
    if (s[index] == t[index]) {
      counter += 1
    }
  }
  return counter
}

function count(a: string[], b: string[], i: number, j: number) {
  let counter = 0;
  for (let index = 0; index < a.length; index++) {
    if (index === i && a[i] === b[j]) {
      counter += 1;
    } else if (index === j && a[j] === b[i]) {
      counter += 1;
    } else if (a[index] === b[index]) {
      counter += 1
    }
  }
  
  return counter
}

function cubicPairMatching(a: string[], b: string[]): number {
  let maxMatchingPairs = 0

  for (let i = 0; i < a.length - 1; i++) {
    for (let j = i + 1; j < a.length; j++) {
      const swappedA = swap(a, i, j)
      const matchingPairs = countMatchingPairs(swappedA, b)
      if (matchingPairs > maxMatchingPairs) {
        maxMatchingPairs = matchingPairs;
      }
    }
  }

  return maxMatchingPairs;
}

function tokenize(s: string, t: string): { a: string[], b: string[] } {
  return {
    a: s.split(''),
    b: t.split('')
  }
}

function matchingPairs(s: string, t: string) {
  const { a, b } = tokenize(s, t);

  return cubicPairMatching(a, b);
}

const a = 'axmda'
const b = 'azmad'
console.log(matchingPairs(a, b))
