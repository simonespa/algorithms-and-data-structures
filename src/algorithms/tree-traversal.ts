import BinaryTree from "@src/data-structures/BinaryTree.ts";

/**
 * Depth-First traversal (DFS)
 */

/* Pre-Order Traversal */

export function recursivePreOrderTraversal<T>(node: BinaryTree<T> | null): T[] {
  if (node === null) return [];

  const result: T[] = [];

  if (node.value !== null && node.value !== undefined) {
    result.push(node.value);
  }
  result.push(...recursivePreOrderTraversal(node.leftChild));
  result.push(...recursivePreOrderTraversal(node.rightChild));

  return result;
}

/**
 * Time Complexity: O(N)
 * Auxiliary Space: O(N), where N is the total number of nodes in the tree.
 */
export function iterativePreOrderTraversal<T>(node: BinaryTree<T> | null): T[] {
  const result: T[] = [];

  if (node === null) return result;

  const stack: BinaryTree<T>[] = [node];

  while (stack.length > 0) {
    const currentNode = stack.pop();
    if (!currentNode) continue;

    if (currentNode.value !== null && currentNode.value !== undefined) {
      result.push(currentNode.value);
    }
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
 * Time Complexity: O(N)
 * Auxiliary Space: O(H), where H is the height of the tree.
 */
export function iterativePreOrderTraversalRightChildOnly<T>(
  node: BinaryTree<T> | null,
): T[] {
  const result: T[] = [];

  if (node === null) return result;

  const stack: BinaryTree<T>[] = [node];
  let currentNode: BinaryTree<T> | null = node;

  while (stack.length > 0) {
    // if the current node exists, print it and push its right child
    // to the stack before moving to its left child
    if (currentNode !== null) {
      if (currentNode.value !== null && currentNode.value !== undefined) {
        result.push(currentNode.value);
      }
      // push the right child
      if (currentNode.rightChild !== null) stack.push(currentNode.rightChild);
      // point to the left child
      currentNode = currentNode.leftChild;
    } else {
      // if the current node is null, pop a node from the stack
      // and set it as the current one
      currentNode = stack.pop() ?? null;
    }
  }

  return result;
}

/* In-Order Traversal */

export function recursiveInOrderTraversal<T>(node: BinaryTree<T> | null): T[] {
  if (node === null) return [];

  const result: T[] = [];

  result.push(...recursiveInOrderTraversal(node.leftChild));
  if (node.value !== null && node.value !== undefined) {
    result.push(node.value);
  }
  result.push(...recursiveInOrderTraversal(node.rightChild));

  return result;
}

export function iterativeInOrderTraversal<T>(node: BinaryTree<T> | null): T[] {
  const result: T[] = [];

  if (node === null) return result;

  const stack: BinaryTree<T>[] = [];
  let currentNode: BinaryTree<T> | null = node;

  while (stack.length > 0 || currentNode !== null) {
    if (currentNode !== null) {
      stack.push(currentNode);
      currentNode = currentNode.leftChild;
    } else {
      currentNode = stack.pop() ?? null;
      if (currentNode) {
        if (currentNode.value !== null && currentNode.value !== undefined) {
          result.push(currentNode.value);
        }
        currentNode = currentNode.rightChild;
      }
    }
  }

  return result;
}

export function iterativeInOrderTraversalWithDoubleWhile<T>(
  node: BinaryTree<T> | null,
): T[] {
  const result: T[] = [];

  if (node === null) return result;

  const stack: BinaryTree<T>[] = [];
  let currentNode: BinaryTree<T> | null = node;

  while (stack.length > 0 || currentNode !== null) {
    // Reach the left most Node of the subtree
    while (currentNode !== null) {
      stack.push(currentNode);
      currentNode = currentNode.leftChild;
    }

    currentNode = stack.pop() ?? null;
    if (currentNode) {
      if (currentNode.value !== null && currentNode.value !== undefined) {
        result.push(currentNode.value);
      }
      currentNode = currentNode.rightChild;
    }
  }

  return result;
}

/* Post-order Traversal */

export function recursivePostOrderTraversal<T>(
  node: BinaryTree<T> | null,
): T[] {
  if (node === null) return [];

  const result: T[] = [];

  result.push(...recursivePostOrderTraversal(node.leftChild));
  result.push(...recursivePostOrderTraversal(node.rightChild));
  if (node.value !== null && node.value !== undefined) {
    result.push(node.value);
  }

  return result;
}

/**
 * It starts from the root node every time the left-most and right-most nodes have
 * been visited.
 */
export function iterativePostOrderTraversal<T>(
  node: BinaryTree<T> | null,
): T[] {
  const result: T[] = [];

  if (node === null) return result;

  const visited = new Set<BinaryTree<T>>();
  let current: BinaryTree<T> | null = node;

  while (current !== null && !visited.has(current)) {
    if (current.leftChild !== null && !visited.has(current.leftChild)) {
      current = current.leftChild;
    } else if (
      current.rightChild !== null &&
      !visited.has(current.rightChild)
    ) {
      current = current.rightChild;
    } else {
      if (current.value !== null && current.value !== undefined) {
        result.push(current.value);
      }
      visited.add(current);
      current = node;
    }
  }

  return result;
}

/**
 * Breadth-first traversal (DFS)
 */

export function breadthFirstTraversal<T>(node: BinaryTree<T> | null): T[] {
  const result: T[] = [];

  if (node === null) return result;

  const queue: BinaryTree<T>[] = [node];

  while (queue.length > 0) {
    const current = queue.shift();
    if (!current) continue;

    if (current.value !== null && current.value !== undefined) {
      result.push(current.value);
    }

    if (current.leftChild !== null) {
      queue.push(current.leftChild);
    }
    if (current.rightChild !== null) {
      queue.push(current.rightChild);
    }
  }

  return result;
}
