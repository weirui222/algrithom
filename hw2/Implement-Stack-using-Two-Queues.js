//Implement Stack using Two Queues

//Given two queues with their standard operations (enqueue, dequeue, isempty, size),
//implement a stack with its standard operations (pop, push, isempty, size).

//There should be two versions of the solution.
//Version A: The stack should be efficient when pushing an item; and
//Version B: The stack should be efficient when popping an item.

function Queue() {
    this.arr = [];
};

Queue.prototype = {
  constructor: Queue,
  enqueue: function(data) {
    this.arr.push(data);
    return this.arr;
  },
  dequeue: function() {
    return this.arr.shift();
  },
  isEmpty: function() {
    return this.arr.length === 0;
  },
  size: function() {
    return this.arr.length ;
  }
};

function Stack() {
  this.queue1 = new Queue();
  this.queue2 = new Queue();
};

Stack.prototype = {
  constructor: Stack,
  pop: function() {
    if (this.queue1.isEmpty()) {
      for(let i = 0; i < this.queue2.size() -1; i++){
        let item = this.queue2.dequeue();
        this.queue1.enqueue(item);
      }
      return this.queue2.dequeue();
    } else {
      for(let i = 0; i < this.queue1.size() -1; i++){
        let item = this.queue1.dequeue();
        this.queue2.enqueue(item);
      }
      return this.queue1.dequeue();
    }
  },
  push: function(data) {
    if (this.queue1.isEmpty()) {
      return this.queue2.enqueue(data);
    } else {
      return this.queue1.enqueue(data);
    }
  },
  isEmpty: function() {
    return (this.queue1.size() === 0) && (this.queue2.size() === 0);
  },
  size: function() {
    return this.queue1.size() > this.queue2.size()? this.queue1.size(): this.queue2.size();
  }
};


let stack = new Stack();

console.log(stack.push(5),stack.isEmpty(), stack.size());
console.log(stack.push(3),stack.isEmpty(), stack.size());
console.log(stack.pop(),stack.isEmpty(), stack.size());
