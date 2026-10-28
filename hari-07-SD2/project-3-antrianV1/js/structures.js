export class Stack {
  constructor() {
    this.items = [];
  }
  push(item) {
    this.items.push(item);
  }
  pop() {
    return this.isEmpty() ? undefined : this.items.pop();
  }
  peek() {
    return this.isEmpty() ? undefined : this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  clear() {
    this.items = [];
  }
  toArray() {
    return [...this.items];
  }
}

export class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(elemen) {
        this.items.push(elemen);
    }
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items.shift();
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
    clear() {
        this.items = [];
    }
    toArray() {
        return [...this.items];
    }
}