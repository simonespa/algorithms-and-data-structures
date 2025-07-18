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
        it('recursivePreOrderTraversal', () => {
          expect(recursivePreOrderTraversal(tree)).to.deep.equal(preOrder);
        });
      });

      describe('Iterative Algorithm', () => {
        it('iterativePreOrderTraversal', () => {
          expect(iterativePreOrderTraversal(tree)).to.deep.equal(preOrder);
        });

        it('iterativePreOrderTraversalRightChildOnly', () => {
          expect(iterativePreOrderTraversalRightChildOnly(tree)).to.deep.equal(preOrder);
        });
      });
    });

    describe('In-order Traversal', () => {
      describe('Recursive Algorithm', () => {
        it('recursiveInOrderTraversal', () => {
          expect(recursiveInOrderTraversal(tree)).to.deep.equal(inOrder);
        });
      });

      describe('Iterative Algorithm', () => {
        it('iterativeInOrderTraversal', () => {
          expect(iterativeInOrderTraversal(tree)).to.deep.equal(inOrder);
        });

        it('iterativeInOrderTraversalWithDoubleWhile', () => {
          expect(iterativeInOrderTraversalWithDoubleWhile(tree)).to.deep.equal(inOrder);
        });
      });
    });

    describe('Post-order Traversal', () => {
      describe('Recursive Algorithm', () => {
        it('recursivePostOrderTraversal', () => {
          expect(recursivePostOrderTraversal(tree)).to.deep.equal(postOrder);
        });
      });

      describe('Iterative Algorithm', () => {
        it('iterativePostOrderTraversal', () => {
          expect(iterativePostOrderTraversal(tree)).to.deep.equal(postOrder);
        });
      });
    });
  });

  describe('Breadth-first traversal', () => {
    it('breadthFirstTraversal', () => {
      expect(breadthFirstTraversal(tree)).to.deep.equal(bfs);
    });
  });
});
