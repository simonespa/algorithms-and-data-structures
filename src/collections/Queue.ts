import Collection from 'src/collections/Collection';

/**
 * The {@code Queue} interface represents a first-in-first-out
 * (FIFO) queue of items.
 */
export default interface Queue<T> extends Collection<T> {
  /**
   * Add the specified item into the queue.
   *
   * @param item the item to add in the queue
   */
  enqueue(item: T): void;

  /**
   * Retrieves and removes the head of the queue.
   * @returns the head of the queue
   */
  dequeue(): T | undefined;

  /**
   * Returns the item at the top of the queue without removing it.
   * @returns {T | undefined} the item or undefined.
   */
   peek(): T | undefined;
}
