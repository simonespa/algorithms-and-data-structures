import { expect } from 'chai';
import { majority } from '@src/exercises/majority-elements/index.ts';

describe('Majority Elements Exercise', () => {
  it('majority()', () => {
    expect(majority([1, 2, 2, 2, 3])).equal(2);
  });

  it('majority() with empty array', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    expect(majority([])).to.be.undefined;
  });

  it('majority() with no majority element', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    expect(majority([1, 2, 3, 4])).to.be.undefined;
  });

  it('majority() with single element', () => {
    expect(majority([1])).equal(1);
  });

  it('majority() with all same elements', () => {
    expect(majority([2, 2, 2, 2])).equal(2);
  });
});
