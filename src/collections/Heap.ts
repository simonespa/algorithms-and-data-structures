enum HeapType { MIN, MAX };

abstract class Comparable<X> {
  private value: X;

  constructor(value: X) {
    this.value = value;
  }

  public getValue(): X {
    return this.value;
  }

  /**
   * Return true if this object value is strictly greater than the specified item's value.
   *
   * @param item the "comparable" object.
   */
  public abstract gt(item: Comparable<X>): boolean;
  /**
   * Return true if this object value is strictly less than the specified item's value.
   *
   * @param item the "comparable" object.
   */
  public abstract lt(item: Comparable<X>): boolean;
}

class TheNumber extends Comparable<number> {
  gt(item: Comparable<number>): boolean {
    return this.getValue() > item.getValue();
  }

  lt(item: Comparable<number>): boolean {
    return this.getValue() < item.getValue();
  }
}

class Person extends Comparable<number> {
  private name: string;

  constructor(name: string, age: number = 0) {
    super(age);
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }

  public gt(item: Comparable<number>): boolean {
    return this.getValue() > item.getValue();
  }

  public lt(item: Comparable<number>): boolean {
    return this.getValue() < item.getValue();
  }
}

class Heap<T extends Comparable<X>, X> {
  private heap: Array<T>;
  private heapType: HeapType;

  constructor(heap: Array<T> = [], heapType: HeapType = HeapType.MAX) {
    this.heap = heap;
    this.heapType = heapType;
  }

  public get(): Comparable<X> {
    if (this.heap.length === 0) return undefined;

    let mu = this.heap[0];
    for (let i = 1; i < this.heap.length; i++) {
      if (this.heapType === HeapType.MAX && this.heap[i].gt(mu)) {
        mu = this.heap[i];
      }

      if (this.heapType === HeapType.MIN && this.heap[i].lt(mu)) {
        mu = this.heap[i];
      }
    }

    return mu;
  }
}

// const a = new TheNumber(3);
// const b = new TheNumber(11);

// const h: Heap<TheNumber, number> = new Heap([a, b], HeapType.MAX);
// console.log(h.get());

const a = new Person('Simone', 38);
const b = new Person('Lalla', 40);

const h: Heap<Person, number> = new Heap([a, b], HeapType.MAX);
console.log((h.get() as Person).getName());
