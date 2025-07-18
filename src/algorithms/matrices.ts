/**
 * The assumptions is that the matrices are N x M (either square or rectangular)
 * The matrices cannot have rows with different sizes.
 */

export function sum(matrix: number[][]): number {
  let sum = 0;
  console.log(matrix);

  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      sum += matrix[i][j];
    }
  }

  return sum;
}

function getShortestLength(matrix: number[][]): number {
  const rows = matrix.length;
  const columns = matrix[0].length;

  if (rows < columns) return rows;

  return columns;
}

export function sumDiagonal(matrix: number[][]): number {
  let sum = 0;
  let index = 0;

  const shortestLength = getShortestLength(matrix);

  while (index < shortestLength) {
    sum += matrix[index][index];
    index += 1;
  }

  return sum;
}

export function sumAntiDiagonal(matrix: number[][]): number {
  let sum = 0;
  let index = 0;

  const shortestLength = getShortestLength(matrix);

  while (index < shortestLength) {
    sum += matrix[index][matrix.length - 1 - index];
    index += 1;
  }

  return sum;
}

export function sumFrame(matrix: number[][]): number {
  let sum = 0;

  const numberOfRows = matrix.length;
  const numberOfColumns = matrix[0].length; // assuming every row has the same size

  // scann horizontally: top + bottom
  for (let index = 0; index < numberOfColumns; index += 1) {
    sum += matrix[0][index] + matrix[numberOfRows - 1][index];
  }

  // scan vertically: left + right
  for (let index = 1; index < numberOfRows - 1; index += 1) {
    sum += matrix[index][0] + matrix[index][numberOfColumns - 1];
  }

  return sum;
}
