import { expect } from "chai";
import shortestSum from "./shortest-sum.ts";

describe("shortestSum", function () {
  const tests = [
    { targetSum: 8, numbers: [2, 3, 5], expected: [5, 3] },
    { targetSum: 10, numbers: [6, 2, 7, 3, 1, 9], expected: [3, 7] },
    { targetSum: 3, numbers: [1, 3], expected: [3] },
    { targetSum: 3, numbers: [3, 1], expected: [3] },
    { targetSum: 7, numbers: [2, 4, 6], expected: null },
    { targetSum: 0, numbers: [3, 8, 9], expected: [] },
    { targetSum: -1, numbers: [5, 10, 22], expected: null },
    { targetSum: 11, numbers: [], expected: null },
  ];

  tests.forEach(({ targetSum, numbers, expected }) => {
    it(`${targetSum} and [${numbers}] should return [${expected}]`, function () {
      expect(shortestSum(targetSum, numbers)).to.deep.equal(expected);
    });
  });
});
