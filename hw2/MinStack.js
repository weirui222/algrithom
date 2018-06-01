// Design a Data Structure MinStack that supports all the stack operations like
// push(), pop(), isEmpty(), isFull() and an additional operation getMin() which
// should return minimum element from the MinStack. All these operations of
// MinStack must be O(1). To implement MinStack, you should only use standard Stack
// data structure and no other data structure like arrays, list, .. etc.
// It's ok if your space complexity is O(n)

function Stack(size) {
    this.arr = [];
    this.size = size;
};

Stack.prototype = {
  constructor: Stack,
  push: function(data) {
    if(this.isFull()){
      throw new Error("Stack is full");
    }
    this.arr.push(data);
  },
  pop: function() {
    return this.arr.pop();
  },
  peek: function() {
    return this.arr[this.arr.length -1];
  },
  isEmpty: function() {
    return this.arr.length === 0;
  },
  isFull: function() {
    return this.size === this.arr.length ;
  }
};

// let stack = new Stack(3);
// stack.push(5);
// console.log(stack.peek(),stack.isEmpty(), stack.isFull());
// stack.push(3);
// console.log(stack.peek(),stack.isEmpty(), stack.isFull());
// stack.push(1);
// console.log(stack.peek(),stack.isEmpty(), stack.isFull());
// stack.push(3);
// let value = stack.pop();
// console.log(value,stack.isEmpty(), stack.isFull());

function MinStack(size) {
  this.stackData = new Stack(size);
  this.stackMin = new Stack(size);
}

MinStack.prototype = {
  constructor: MinStack,
  push: function(data) {
    this.stackData.push(data);
    let peek;
    if(!this.stackMin.isEmpty()) {
      peek = this.stackMin.peek();
    } else {
      peek = Infinity;
    };
    if (data < peek) {
      this.stackMin.push(data);
    } else {
      this.stackMin.push(peek);
    }
  },
  pop: function() {
    this.stackMin.pop();
    return this.stackData.pop();
  },
  isEmpty: function() {
    return this.stackData.isEmpty();
  },
  isFull: function() {
    return this.stackData.isFull();
  },
  getMin: function() {
    return this.stackMin.peek();
  }
};

module.exports = {
  Stack: Stack,
  MinStack: MinStack
};
// let stack = new MinStack(3);
// stack.push(5);
// console.log(stack.getMin(), stack.isEmpty(), stack.isFull());
// stack.push(3);
// console.log(stack.getMin(),stack.isEmpty(), stack.isFull());
// stack.push(10);
