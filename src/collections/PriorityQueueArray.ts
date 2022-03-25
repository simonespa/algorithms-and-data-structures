import QueueArray from 'src/collections/QueueArray';

export default class PriorityQueueArray extends QueueArray<number> {

  constructor() {
    super([]);
  }

  enqueue(item: number): void {
    if (super.size() === 0) {
      super.enqueue(item);
    } else {
      let added = false;
      for (let i = 0; i < super.size(); i++) {
        if (item <= this.queue[i]) {
          this.queue.splice(i, 0, item);
          added = true;
          break;
        }
      }

      if (!added) {
        super.enqueue(item);
      }
    }
  }
}
