import BinaryTree from '..//data-structures/BinaryTree';

/**
 * Depth-First traversal (DFS)
 */

/* Pre-order Traversal */

export function recursivePreOrderTraversal<T>(node: BinaryTree<T>): T[] {
  if (node === null) return [];

  const result = [];

  result.push(node.value);
  result.push(...recursivePreOrderTraversal(node.leftChild));
  result.push(...recursivePreOrderTraversal(node.rightChild));

  return result;
}

export function iterativePreOrderTraversal<T>(node: BinaryTree<T>): T[] {
  const result = [];

  if (node === null) return result;

  const stack = [node];

  while(stack.length > 0) {
    const currentNode = stack.pop();
    result.push(currentNode.value);
    // the right child must be pushed first so that the left child is processed first (LIFO order)
    if (currentNode.rightChild !== null) stack.push(currentNode.rightChild);
    if (currentNode.leftChild !== null) stack.push(currentNode.leftChild);
  }

  return result;
}

/**
 * This implementation only stores the right child of each node on the stack while iteratively pointing the current
 * node to each left child. By doing so, it halves the space required to store the nodes.
 *
 * @param node
 * @returns
 */
export function iterativePreOrderTraversalRightChildOnly<T>(node: BinaryTree<T>): T[] {
  const result = [];

  if (node === null) return result;

  const stack = [node];
  let currentNode = node;

  while(stack.length > 0) {
    // if the current node exists, print it and push its right child
    // to the stack before moving to its left child
    if (currentNode !== null) {
      result.push(currentNode.value);
      // push the right child
      if (currentNode.rightChild !== null) stack.push(currentNode.rightChild);
      // point to the left child
      currentNode = currentNode.leftChild;
    } else {
      // if the current node is null, pop a node from the stack
      // and set it as the current one
      currentNode = stack.pop();
    }
  }

  return result;
}

export function recursiveInOrderTraversal<T>(node: BinaryTree<T>): T[] {
  if (node === null) return [];

  const result = [];

  result.push(...recursiveInOrderTraversal(node.leftChild));
  result.push(node.value);
  result.push(...recursiveInOrderTraversal(node.rightChild));

  return result;
}

export function iterativeInOrderTraversal<T>(node: BinaryTree<T>): T[] {
  const result = [];

  if (node === null) return result;

  const stack = [node];

  while(stack.length > 0) {
    const currentNode = stack.pop();
    result.push(currentNode.value);
    if (currentNode.rightChild !== null) stack.push(currentNode.rightChild);
    if (currentNode.leftChild !== null) stack.push(currentNode.leftChild);
  }

  return result;
}

/* Post-order Traversal */

export function recursivePostOrderTraversal<T>(node: BinaryTree<T>): T[] {
  if (node === null) return [];

  const result = [];

  result.push(...recursivePostOrderTraversal(node.leftChild));
  result.push(...recursivePostOrderTraversal(node.rightChild));
  result.push(node.value);

  return result;
}

export function iterativePostOrderTraversal<T>(node: BinaryTree<T>): T[] {
  return [];
}

/**
 * Breadth-first traversal (DFS)
 */

export function recursiveBreadthFirstTraversal<T>(node: BinaryTree<T>): T[] {
  return [];
}

export function iterativeBreadthFirstTraversal<T>(node: BinaryTree<T>): T[] {
  return [];
}
