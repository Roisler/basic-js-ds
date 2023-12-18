const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  const arr = [];

  const getValue = (list, n) => {
    if (!list) {
      return;
    }
    if (list.value && list.value !== n) {
      arr.push(list.value);
    }
    if (list.next) {
      return getValue(list.next, n);
    }
  };

  getValue(l, k);

  const createNewList = (values, i) => {
    if (i >= values.length) {
      return null;
    }
    const newList = new ListNode(values[i]);
    newList.next = createNewList(values, i + 1);
    return newList;
  }

  return createNewList(arr, 0);
};

module.exports = {
  removeKFromList
};
