import {
  recursivePreOrderTraversal,
  iterativePreOrderTraversal,
  iterativePreOrderTraversalRightChildOnly,
  recursiveInOrderTraversal,
  iterativeInOrderTraversal,
  recursivePostOrderTraversal,
  iterativePostOrderTraversal,
  recursiveBreadthFirstTraversal,
  iterativeBreadthFirstTraversal,
} from 'src/algorithms/tree-traversal';
import BinaryTree from 'src/data-structures/BinaryTree';


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


const tree: BinaryTree<number> = new BinaryTree(1);

tree.leftChild = new BinaryTree(2);
tree.rightChild = new BinaryTree(3);

tree.leftChild.leftChild = new BinaryTree(4);

tree.rightChild.leftChild = new BinaryTree(5);
tree.rightChild.rightChild = new BinaryTree(6);

tree.rightChild.leftChild.leftChild = new BinaryTree(7);
tree.rightChild.leftChild.rightChild = new BinaryTree(8);

const preOrder = [1, 2, 4, 3, 5, 7, 8, 6];
const inOrder = [4, 2, 1, 7, 5, 8, 3, 6];
const postOrder = [4, 2, 7, 8, 5, 6, 3, 1];
const bfs = [1]

describe('Depth-first traversal', () => {
  describe('Pre-order Traversal', () => {
    describe('Recursive Algorithm', () => {
      test('recursivePreOrderTraversal', () => {
        expect(recursivePreOrderTraversal(tree)).toEqual(preOrder)
      });
    });

    describe('Iterative Algorithm', () => {
      test('iterativePreOrderTraversal', () => {
        expect(iterativePreOrderTraversal(tree)).toEqual(preOrder)
      });

      test('iterativePreOrderTraversalRightChildOnly', () => {
        expect(iterativePreOrderTraversalRightChildOnly(tree)).toEqual(preOrder)
      });
    });
  });

  describe('In-order Traversal', () => {
    describe('Recursive Algorithm', () => {
      test('recursiveInOrderTraversal', () => {
        expect(recursiveInOrderTraversal(tree)).toEqual(inOrder)
      });
    });

    describe('Iterative Algorithm', () => {
      test('iterativeInOrderTraversal', () => {
        expect(iterativeInOrderTraversal(tree)).toEqual(inOrder)
      });
    });
  });

  describe('Post-order Traversal', () => {
    describe('Recursive Algorithm', () => {
      test('recursivePostOrderTraversal', () => {
        expect(recursivePostOrderTraversal(tree)).toEqual(postOrder)
      });
    });

    describe('Iterative Algorithm', () => {
      test('iterativePostOrderTraversal', () => {
        expect(iterativePostOrderTraversal(tree)).toEqual(postOrder)
      });
    });
  });
});

describe('Breadth-first traversal', () => {
  describe('Recursive Algorithm', () => {
    test('recursiveBreadthFirstTraversal', () => {
      expect(recursiveBreadthFirstTraversal(tree)).toEqual(bfs)
    });
  });

  describe('Iterative Algorithm', () => {
    test('iterativeBreadthFirstTraversal', () => {
      expect(iterativeBreadthFirstTraversal(tree)).toEqual(bfs)
    });
  });
});
