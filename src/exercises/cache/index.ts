interface Cache {
  value: number;
  duration: number;
  startTime: number;
}

export class TimeLimitedCache {
  private map: Map<number, Cache>;

  constructor() {
    this.map = new Map<number, Cache>();
  }

  private isUnexpired(cache: Cache) {
    const endTime = performance.now();

    if (cache && endTime - cache.startTime < cache.duration) {
      return true;
    }

    return false;
  }

  set(key: number, value: number, duration: number): boolean {
    const cache = this.map.get(key);

    const startTime = performance.now();
    this.map.set(key, { value, duration, startTime });

    return this.isUnexpired(cache);
  }

  get(key: number): number {
    const cache = this.map.get(key);

    if (this.isUnexpired(cache)) {
      return cache.value;
    }

    return -1;
  }

  count(): number {
    let counter = 0;

    for (const cache of this.map.values()) {
      if (this.isUnexpired(cache)) {
        counter++;
      }
    }

    return counter;
  }
}
