const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.parentNode = null;
  }

  root() {
    return this.parentNode;
  }

  add(data) {
  
    const addData = (tree, value) => {
      if (!tree) {
        return new Node(value);
      } else if (value > tree.data) {
        tree.right = addData(tree.right, value);
      } else if (value < tree.data) {
        tree.left = addData(tree.left, value);
      } else {
        return tree;
      }
      return tree;
    }

    this.parentNode = addData(this.parentNode, data);
  }

  has(data) {
    
    return this.find(data) ? true : false
  }

  find(data) {

    const findData = (tree, value) => {
      if (!tree) {
        return null;
      }
      if (value > tree.data) {
        return findData(tree.right, value);
      } else if (value < tree.data) {
        return findData(tree.left, value)
      } else if (value === tree.data) {
        return tree;
      }
      return null;
    }

    return findData(this.parentNode, data);
  }

  remove(data) {
    
    const removeNode = (tree, value) => {
      if (!tree) {
        return null;
      }
      if (value > tree.data) {
        tree.right = removeNode(tree.right, value);
        return tree;
      } else if (value < tree.data) {
        tree.left = removeNode(tree.left, value);
        return tree;
      } else {
        if (!tree.right) {
          tree = tree.left;
          return tree;
        } else if (!tree.left) {
          tree = tree.right;
          return tree;
        } else if (!tree.right && !tree.left) {
          return null;
        } else if(!!tree.right && !!tree.left) {

          let minValueRight = tree.right;

          while (minValueRight.left) {
            minValueRight = minValueRight.left;
          }

          tree.data = minValueRight.data;
          tree.right = removeNode(tree.right, minValueRight.data);

          return tree;
        }

        return null;
      }
    }

    this.parentNode = removeNode(this.parentNode, data);
  }

  values() {
    const result = [];

    const getValues = (tree) => {
      if (!tree) {
        return null;
      }
      result.push(tree.data);
      if (!tree.right) {
        getValues(tree.left);
        return tree;
      }
      if (!tree.left) {
        getValues(tree.right);
        return tree;
      }
      if (tree.right && tree.left) {
        getValues(tree.right);
        getValues(tree.left);
        return tree;
      }
    };
    
    getValues(this.parentNode);
    return result;
  }

  min() {

    return Math.min(...this.values());
  }

  max() {

    return Math.max(...this.values());
  }
};

module.exports = {
  BinarySearchTree
};