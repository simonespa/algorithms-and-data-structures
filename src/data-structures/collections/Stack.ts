import Collection from "./Collection.ts";

/**
 * The {@code Stack} interface represents a last-in-first-out
 * (LIFO) stack of items. The usual {@code push} and {@code pop} operations are provided,
 * as well as a method to {@code peek} at the top item on the stack.
 */
export default interface Stack<T> extends Collection<T> {
  /**
   * Pushes an item at the top of the stack.
   * @param {T} item the item to be pushed onto this stack.
   */
  push(item: T): void;

  /**
   * Removes the item at the top of the stack and returns it.
   * Returns a null pointer if the stack is empty.
   * @returns {T | undefined} the item or undefined.
   */
  pop(): T | undefined;

  /**
   * Returns the item at the top of the stack without removing it.
   * @returns {T | undefined} the item or undefined.
   */
  peek(): T | undefined;
}
