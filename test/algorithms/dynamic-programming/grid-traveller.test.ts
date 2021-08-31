import gridTraveller from '../../../src/algorithms/dynamic-programming/grid-traveller';

const parameters = [
  {rows: 0, columns: 0, expected: 0},
  {rows: 0, columns: 1, expected: 0},
  {rows: 1, columns: 0, expected: 0},
  {rows: 1, columns: 1, expected: 1},
  {rows: 1, columns: 2, expected: 1},
  {rows: 2, columns: 1, expected: 1},
  {rows: 2, columns: 2, expected: 2},
  {rows: 2, columns: 3, expected: 3},
  {rows: 3, columns: 2, expected: 3},
  {rows: 3, columns: 3, expected: 6},
  {rows: 3, columns: 4, expected: 10},
  {rows: 4, columns: 3, expected: 10},
  {rows: 4, columns: 4, expected: 20}
];

describe('[src/algorithms/dynamic-programming/grid-traveller]', () => {
  test.each(parameters)('gridTraveller($rows, $columns) must be $expected', ({ rows, columns, expected }) => {
    const output = gridTraveller({ rows, columns });
    expect(output).toEqual(expected);
  });

  test('test gridTraveller(30, 30) with memoisation and deduplication', () => {
    const output = gridTraveller({ rows: 30, columns: 30, deduped: true });
    expect(output).toEqual(30067266499541040);
  });
});
