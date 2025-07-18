import Queue from "./Queue.ts";

export default class QueueArray<T> implements Queue<T> {
  protected queue: Array<T>;

  constructor(collection: Array<T> = []) {
    this.queue = [...collection]; // clone
  }

  enqueue(item: T): void {
    this.queue.push(item);
  }

  dequeue(): T | undefined {
    return this.queue.shift() as T;
  }

  peek(): T {
    return this.queue[0];
  }

  size(): number {
    return this.queue.length;
  }

  isEmpty(): boolean {
    return this.queue.length === 0;
  }

  contains(item: T): boolean {
    return this.queue.includes(item);
  }

  clear(): void {
    this.queue.splice(0);
  }
}
