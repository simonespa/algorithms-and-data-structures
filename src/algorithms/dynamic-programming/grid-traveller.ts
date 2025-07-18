/**
 * Return the number of ways there are to travel a N x M grid,
 * where N is the number of rows and M is the number of columns.
 *
 * This algorithm is implemented recursively with memoisation and de-duplication
 * of keys in the buffer.
 *
 * The brute-force implementation has the following complexity:
 * - Time O(2^(n+m))
 * - Space O(n+m)
 *
 * The memoised and de-duped version has the following complexity:
 * - Time O(n+m)
 * - Space O(n+m)
 *
 * Where
 * - 2 is the number of time the function is recursively called each time (branching factor)
 * - "n" is the number of rows of the grid
 * - "m" is the number of columns of the grid
 * - "n+m" is the maximum number of steps we descend in tree in the worst case scenario (tree height)
 *
 * @param rows the number of rows of the grid
 * @param columns the number of columns of the grid
 * @param buffer the object used for memoisation
 * @returns the total number of ways to travel on a N by M grid
 */
export default function gridTraveller(
  rows: number,
  columns: number,
  buffer: object = {},
): number {
  const key = getKey(rows, columns);
  if (key in buffer) return buffer[key];
  if (rows <= 0 || columns <= 0) return 0;
  if (rows === 1 || columns === 1) return 1;

  buffer[key] =
    // travels down in the grid (decrement the row)
    gridTraveller(rows - 1, columns, buffer) +
    // travels right in the grid (decrement the column)
    gridTraveller(rows, columns - 1, buffer);

  return buffer[key];
}

/**
 * Return a key built out of the input parameters.
 *
 * This snippet creates a key to de-dupe the entries in the buffer.
 *
 * The key uses a separator to prevent collisions. Without separator
 * we may have this situation "789" where it is unclear whether
 * n = 7 and m = 89 or n = 78 and m = 9
 *
 * Given (n = 7, m = 3) and (n = 3, m = 7) have the same result,
 * the ksy is also normalised with the first element before the
 * separator being less or equal than the second element.
 *
 * @param rows the number of rows of the grid
 * @param columns the number of columns of the grid
 * @returns a key to be used in the buffer object
 */
function getKey(rows: number, columns: number) {
  if (columns < rows) {
    return `${columns}-${rows}`;
  }

  return `${rows}-${columns}`;
}
