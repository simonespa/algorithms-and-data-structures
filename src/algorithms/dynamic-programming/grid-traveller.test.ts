import { expect } from 'chai';
import gridTraveller from './grid-traveller.ts';

describe('gridTraveller', () => {
  const tests = [
    { rows: 0, columns: 0, expected: 0 },
    { rows: 0, columns: 1, expected: 0 },
    { rows: 1, columns: 0, expected: 0 },
    { rows: 1, columns: 1, expected: 1 },
    { rows: 1, columns: 2, expected: 1 },
    { rows: 2, columns: 1, expected: 1 },
    { rows: 2, columns: 2, expected: 2 },
    { rows: 2, columns: 3, expected: 3 },
    { rows: 3, columns: 2, expected: 3 },
    { rows: 3, columns: 3, expected: 6 },
    { rows: 3, columns: 4, expected: 10 },
    { rows: 4, columns: 3, expected: 10 },
    { rows: 4, columns: 4, expected: 20 },
    { rows: 4, columns: 5, expected: 35 },
    { rows: 5, columns: 4, expected: 35 },
    { rows: 5, columns: 5, expected: 70 },
    { rows: 5, columns: 6, expected: 126 },
    { rows: 6, columns: 5, expected: 126 },
    { rows: 6, columns: 6, expected: 252 },
    { rows: 6, columns: 7, expected: 462 },
    { rows: 7, columns: 6, expected: 462 },
    { rows: 7, columns: 7, expected: 924 },
    { rows: 7, columns: 8, expected: 1716 },
    { rows: 8, columns: 7, expected: 1716 },
    { rows: 8, columns: 8, expected: 3432 },
    { rows: 8, columns: 9, expected: 6435 },
    { rows: 9, columns: 8, expected: 6435 },
    { rows: 9, columns: 9, expected: 12870 },
    { rows: 9, columns: 10, expected: 24310 },
    { rows: 10, columns: 9, expected: 24310 },
    { rows: 10, columns: 10, expected: 48620 },
    { rows: 20, columns: 20, expected: 35345263800 },
    { rows: 30, columns: 30, expected: 30067266499541040 },
    { rows: 40, columns: 40, expected: 2.7217014869199036e22 },
    { rows: 50, columns: 50, expected: 2.5477612258980867e28 },
    { rows: 60, columns: 60, expected: 2.4356699707654625e34 },
    { rows: 70, columns: 70, expected: 2.362398517571512e40 },
    { rows: 80, columns: 80, expected: 2.3156006494021195e46 },
    { rows: 90, columns: 90, expected: 2.288017424736007e52 },
    { rows: 100, columns: 100, expected: 2.2750883079422938e58 },
  ];

  tests.forEach(({ rows, columns, expected }) => {
    it(`gridTraveller(${rows}, ${columns}) should return ${expected}`, () => {
      expect(gridTraveller(rows, columns)).to.equal(expected);
    });
  });
});
