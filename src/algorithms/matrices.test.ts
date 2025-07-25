import { expect } from "chai";
import { sum, sumDiagonal, sumAntiDiagonal, sumFrame } from "./matrices.js";

describe("Matrix Operations", function () {
  const matrix = [
    [7, 3, 1, 0],
    [9, 6, 4, 5],
    [1, 9, 5, 4],
    [6, 8, 2, 3],
  ];

  // this test is for testing purposes of the coverage workflow
  it("should have the same number of rows and columns", () => {
    expect(matrix.length).to.equal(matrix[0].length);
  });

  it("sum", () => {
    expect(sum(matrix)).equal(73);
  });

  it("sumDiagonal", () => {
    expect(sumDiagonal(matrix)).equal(21);
  });

  it("sumAntiDiagonal", () => {
    expect(sumAntiDiagonal(matrix)).equal(19);
  });

  it("sumFrame", () => {
    expect(sumFrame(matrix)).equal(49);
  });
});
