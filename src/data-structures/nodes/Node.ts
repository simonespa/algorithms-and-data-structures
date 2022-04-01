export default class Node<T> {
  private value: T;
  private visited: boolean = false;
  private parent: Node<T> | null = null;
  private children: Array<Node<T>> = [];

  constructor(value: T) {
    this.value = value;
  }

  public addChild(child: Node<T>): Node<T> {
    this.children.push(child);
    child.setParent(this);
    return this;
  }

  public addChildren(children: Array<Node<T>>): void {
    this.children.push(...children);
    for (let child of children) {
      child.setParent(this);
    }
  }

  public getChildren(): Array<Node<T>> {
    return [...this.children] as Array<Node<T>>;
  }

  public setParent(parent: Node<T>) {
    this.parent = parent;
  }

  public getParent(): Node<T> {
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
    return this.children.length === 0;
  }

  public isRootNode(): boolean {
    return this.parent === null;
  }
}
