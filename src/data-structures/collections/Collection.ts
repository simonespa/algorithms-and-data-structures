/**
 * The root interface in the <i>collection hierarchy</i>. A collection
 * represents a group of objects, known as its <i>items</i>. Some
 * collections allow duplicate elements and others do not. Some are ordered
 * and others unordered.
 */
export default interface Collection<T> {
  /**
     * Returns the number of items in this collection.
     *
     * @return the number of items in this collection
     */
  size(): number;

  /**
   * Returns {@code true} if this collection contains no items.
   *
   * @return {@code true} if this collection contains no items
   */
  isEmpty(): boolean;

  /**
   * Returns {@code true} if this collection contains the specified item.
   *
   * @param item the item to search in the collection
   * @returns {@code true} if this collection contains the specified item
   */
  contains(item: T): boolean;

  /**
   * Removes all of the elements from this collection.
   * The collection will be empty after this method returns.
   */
  clear(): void;
}
