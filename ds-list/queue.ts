export type Node<T> = {
  data: T;
  priority: number;
};

export class PriorityQueue<T = unknown> {
  nodes: Node<T>[] = [];

  /**
   * Adds a value to the queue with given priority.
   * Higher priority values are dequeued first.
   * If priority already exists, first one in is dequeued first.
   */
  enqueue(data: T, priority: number): void {
    let added = false;
    for (let i = 0; i < this.nodes.length; i++) {
      if (priority > this.nodes[i].priority) {
        this.nodes.splice(i, 0, { data, priority });
        added = true;
        break;
      }
    }
    if (!added) {
      this.nodes.push({ data, priority });
    }
  }

  /**
   * Removes and returns highest priority value in the queue.
   * Returns `undefined` if queue is empty.
   */
  dequeue(): T | undefined {
    if (!this.nodes) {
      return undefined;
    }
    return this.nodes.shift()?.data;
  }

  /**
   * Returns highest priority value in the queue without removing it.
   * Returns `undefined` if queue is empty.
   */
  peek(): T | undefined {
    if (this.nodes.length === 0) {
      return undefined;
    }
    return this.nodes[0].data;
  }
}
