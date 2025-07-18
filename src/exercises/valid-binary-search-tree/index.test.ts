import { expect } from 'chai';
import { isValidBST } from '@src/exercises/valid-binary-search-tree/index.ts';
import BinaryTree from '@src/data-structures/BinaryTree.ts';

describe('Valid Binary Search Tree Exercise', () => {
  const root1 = new BinaryTree<number>(4);
  root1.leftChild = new BinaryTree<number>(2);
  root1.rightChild = new BinaryTree<number>(5);
  root1.leftChild.leftChild = new BinaryTree<number>(1);
  root1.leftChild.rightChild = new BinaryTree<number>(3);

  const tests = [
    {
      tree: null,
      expected: true,
    },
    {
      tree: root1,
      expected: true,
    },
  ];

  tests.forEach(({ tree, expected }) => {
    it(`isValidBST(${JSON.stringify(tree)}) should return ${expected}`, () => {
      expect(isValidBST(tree)).to.equal(expected);
    });
  });
});
