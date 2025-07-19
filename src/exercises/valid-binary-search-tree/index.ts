import BinaryTree from "@src/data-structures/BinaryTree.ts";

export function isValidBST(
  node: BinaryTree<number> | null,
  left: BinaryTree<number> | null = null,
  right: BinaryTree<number> | null = null,
): boolean {
  // Base case: a null subtree is a valid BST
  if (node === null) return true;

  // if the left node exists then its value
  // should be less than the parent's value
  if (
    left !== null &&
    node.value !== null &&
    left.value !== null &&
    node.value <= left.value
  )
    return false;

  // if right node exist then its value
  // should be greater than the parent's value
  if (
    right !== null &&
    node.value !== null &&
    right.value !== null &&
    node.value >= right.value
  )
    return false;

  // check recursively for every node.
  return (
    isValidBST(node.leftChild, left, node) &&
    isValidBST(node.rightChild, node, right)
  );
}
