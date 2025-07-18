import { expect } from "chai";
import howSum from "./how-sum.ts";

describe("howSum", function () {
  const tests = [
    { targetSum: 10, numbers: [5, 7, 3, 2, 1], expected: [5, 5] },
    { targetSum: 3, numbers: [1, 3], expected: [1, 1, 1] },
    { targetSum: 3, numbers: [3, 1], expected: [3] },
    { targetSum: 7, numbers: [2, 4, 6], expected: null },
    { targetSum: 0, numbers: [3, 8, 9], expected: [] },
    { targetSum: -1, numbers: [5, 10, 22], expected: null },
    { targetSum: 11, numbers: [], expected: null },
  ];

  tests.forEach(({ targetSum, numbers, expected }) => {
    it(`${targetSum} and [${numbers}] should return [${expected}]`, function () {
      expect(howSum(targetSum, numbers)).to.deep.equal(expected);
    });
  });
});
