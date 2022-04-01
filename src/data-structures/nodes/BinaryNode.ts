export default class BinaryNode<T> {
  private value: T;
  private visited: boolean = false;
  private parent: BinaryNode<T> | null = null;
  private leftChild: BinaryNode<T> | null = null;
  private rightChild: BinaryNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }

  public setParent(parent: BinaryNode<T>) {
    this.parent = parent;
  }

  public getParent(): BinaryNode<T> {
    return this.parent;
  }

  public getValue(): T {
    this.visited = true;
    return this.value;
  }

  public isVisited(): boolean {
    return this.visited;
  }

  public isLeafNode(): boolean {
    return this.leftChild === null && this.rightChild === null;
  }

  public isRootNode(): boolean {
    return this.parent === null;
  }

  public setLeftChild(leftChild: BinaryNode<T> | null): void {
    this.leftChild = leftChild;
    leftChild.setParent(this);
  }

  public setRightChild(rightChild: BinaryNode<T> | null): void {
    this.rightChild = rightChild;
    rightChild.setParent(this);
  }

  public getLeftChild(): BinaryNode<T> | null {
    return this.leftChild;
  }

  public getRightChild(): BinaryNode<T> | null {
    return this.rightChild;
  }
}
