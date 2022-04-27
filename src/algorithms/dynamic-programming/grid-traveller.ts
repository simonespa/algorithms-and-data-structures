/**
 *
 * @param rows the number of rows of the grid
 * @param columns the number of columns of the grid
 * @param buffer the buffer used for memoisation
 * @returns how many ways there are to travel on a n by m grid
 */
export default function gridTraveller(rows: number, columns: number, buffer: object = {}): number {
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
