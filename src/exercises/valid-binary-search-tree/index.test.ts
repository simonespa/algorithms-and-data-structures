import { isValidBST } from 'src/exercises/valid-binary-search-tree';
import BinaryTree from 'src/data-structures/BinaryTree';

const root1 = new BinaryTree<number>(4);
root1.leftChild = new BinaryTree<number>(2);
root1.rightChild = new BinaryTree<number>(5);
root1.leftChild.leftChild = new BinaryTree<number>(1);
root1.leftChild.rightChild = new BinaryTree<number>(3);

const parameters = [
  {
    tree: null,
    expected: true,
  },
  {
    tree: root1,
    expected: true,
  },
];

test.each(parameters)('isValidBST', ({ tree, expected }) => {
  expect(isValidBST(tree)).toBe(expected);
});
