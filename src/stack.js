const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {

  constructor() {
    this.stack = [];
    this.length = 0;
  }
  push(element) {
    this.length += 1;
    this.stack[this.length] = element;
  }

  pop() {
    let element = this.stack[this.length];
    delete this.stack[this.length];
    this.length -= 1;
    return element;
  }

  peek() {
    return this.stack[this.length];
  }
}

module.exports = {
  Stack
};
