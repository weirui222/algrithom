const {Stack} = require('./MinStack');

test('stack push', () => {
  let stack = new Stack();
  stack.push(3);
  expect(stack.peek()).toBe(3);
  expect(stack.isEmpty()).toBe(false);
  expect(stack.isFull()).toBe(false);
});
