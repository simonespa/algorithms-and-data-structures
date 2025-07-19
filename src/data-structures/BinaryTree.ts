export default class BinaryTree<T> {
  value: T | null = null;
  leftChild: BinaryTree<T> | null = null;
  rightChild: BinaryTree<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}
