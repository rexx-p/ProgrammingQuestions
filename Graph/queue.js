class Queue {

    constructor() {
        this.arr = [];
    }

    enqueue(e) {
        this.arr = this.arr.concat(e);
    }

    dequeue(e) {
        return this.arr.shift();
    }
}

module.exports = Queue;