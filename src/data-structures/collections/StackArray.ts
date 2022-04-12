import Stack from './Stack';

export default class StackArray<T> implements Stack<T> {
  private stack: Array<T>;

  constructor(collection: Array<T> = []) {
    this.stack = [...collection]; // clone
  }

  push(item: T): void {
    this.stack.push(item);
  }

  pop(): T {
    return this.stack.pop();
  }

  peek(): T {
    return this.stack[this.stack.length - 1];
  }

  size(): number {
    return this.stack.length;
  }

  isEmpty(): boolean {
    return this.stack.length === 0;
  }

  contains(item: T): boolean {
    return this.stack.includes(item);
  }

  clear(): void {
    this.stack.splice(0);
  }
}
