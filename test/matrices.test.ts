import { expect } from "chai";

import { sum, sumDiagonal, sumAntiDiagonal, sumFrame } from "@src/algorithms/matrices.ts";

describe("Matrix Operations", () => {
  const matrix = [
    [7, 3, 1, 0],
    [9, 6, 4, 5],
    [1, 9, 5, 4],
    [6, 8, 2, 3],
  ];

  it("should calculate the sum of all elements", () => {
    expect(sum(matrix)).to.equal(73);
  });

  it("should calculate the sum of the main diagonal", () => {
    expect(sumDiagonal(matrix)).to.equal(21);
  });

  it("should calculate the sum of the anti-diagonal", () => {
    expect(sumAntiDiagonal(matrix)).to.equal(19);
  });

  it("should calculate the sum of the frame (border elements)", () => {
    expect(sumFrame(matrix)).to.equal(49);
  });
});
