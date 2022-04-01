import BinaryNode from '../collections/BinaryNode';

export function preOrder<T>(node: BinaryNode<T> | null, result: Array<T> = []): void {
  if (node === null || node === undefined) return;

  result.push(node.getValue());
  preOrder(node.getLeftChild(), result);
  preOrder(node.getRightChild(), result);
}

export function inOrder<T>(node: BinaryNode<T> | null, result: Array<T>): void {
  if (node === null || node === undefined) return;

  inOrder(node.getLeftChild(), result);
  result.push(node.getValue());
  inOrder(node.getRightChild(), result);
}

export function postOrder<T>(node: BinaryNode<T> | null, result: Array<T>): void {
  if (node === null || node === undefined) return;

  postOrder(node.getLeftChild(), result);
  postOrder(node.getRightChild(), result);
  result.push(node.getValue());
}
