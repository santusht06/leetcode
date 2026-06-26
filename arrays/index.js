class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  createNode(value) {
    this.root = this.insertNode(this.root, value);
  }

  insertNode(node, value) {
    if (node == null) {
      return new Node(value);
    }

    if (value < node.value) {
      node.left = this.insertNode(node.left, value);
    } else {
      node.right = this.insertNode(node.right, value);
    }

    return node;
  }
}

const T1 = new Tree();

T1.createNode(10);
T1.createNode(5);
T1.createNode(20);
T1.createNode(15);
T1.createNode(70);

console.log(T1);
