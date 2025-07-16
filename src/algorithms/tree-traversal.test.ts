import { expect } from 'chai';
import {
  recursivePreOrderTraversal,
  iterativePreOrderTraversal,
  iterativePreOrderTraversalRightChildOnly,
  recursiveInOrderTraversal,
  iterativeInOrderTraversal,
  iterativeInOrderTraversalWithDoubleWhile,
  recursivePostOrderTraversal,
  iterativePostOrderTraversal,
  breadthFirstTraversal,
} from '@src/algorithms/tree-traversal.ts';
import BinaryTree from '@src/data-structures/BinaryTree.ts';

/*
  Given the following rooted tree

            1
           / \
          /   \
         2     3
        /     / \
       /     /   \
      4     5     6
           / \
          /   \
         7     8

  use DFS and BFS to traverse it
*/

describe('Tree Traversal Algorithms', () => {
  const preOrder = [1, 2, 4, 3, 5, 7, 8, 6];
  const inOrder = [4, 2, 1, 7, 5, 8, 3, 6];
  const postOrder = [4, 2, 7, 8, 5, 6, 3, 1];
  const bfs = [1, 2, 3, 4, 5, 6, 7, 8];

  const tree: BinaryTree<number> = new BinaryTree(1);

  tree.leftChild = new BinaryTree(2);
  tree.rightChild = new BinaryTree(3);

  tree.leftChild.leftChild = new BinaryTree(4);

  tree.rightChild.leftChild = new BinaryTree(5);
  tree.rightChild.rightChild = new BinaryTree(6);

  tree.rightChild.leftChild.leftChild = new BinaryTree(7);
  tree.rightChild.leftChild.rightChild = new BinaryTree(8);

  describe('Depth-first Approach', () => {
    describe('Pre-order Traversal', () => {
      describe('Recursive Algorithm', () => {
        test('recursivePreOrderTraversal', () => {
          expect(recursivePreOrderTraversal(tree)).equal(preOrder);
        });
      });

      describe('Iterative Algorithm', () => {
        test('iterativePreOrderTraversal', () => {
          expect(iterativePreOrderTraversal(tree)).equal(preOrder);
        });

        test('iterativePreOrderTraversalRightChildOnly', () => {
          expect(iterativePreOrderTraversalRightChildOnly(tree)).equal(preOrder);
        });
      });
    });

    describe('In-order Traversal', () => {
      describe('Recursive Algorithm', () => {
        test('recursiveInOrderTraversal', () => {
          expect(recursiveInOrderTraversal(tree)).equal(inOrder);
        });
      });

      describe('Iterative Algorithm', () => {
        test('iterativeInOrderTraversal', () => {
          expect(iterativeInOrderTraversal(tree)).equal(inOrder);
        });

        test('iterativeInOrderTraversalWithDoubleWhile', () => {
          expect(iterativeInOrderTraversalWithDoubleWhile(tree)).equal(inOrder);
        });
      });
    });

    describe('Post-order Traversal', () => {
      describe('Recursive Algorithm', () => {
        test('recursivePostOrderTraversal', () => {
          expect(recursivePostOrderTraversal(tree)).equal(postOrder);
        });
      });

      describe('Iterative Algorithm', () => {
        test('iterativePostOrderTraversal', () => {
          expect(iterativePostOrderTraversal(tree)).equal(postOrder);
        });
      });
    });
  });

  describe('Breadth-first traversal', () => {
    test('breadthFirstTraversal', () => {
      expect(breadthFirstTraversal(tree)).equal(bfs);
    });
  });
});
