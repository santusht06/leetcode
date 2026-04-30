var countPairs = function (nums, low, high) {
  class TrieNode {
    constructor() {
      this.children = [null, null];
      this.count = 0;
    }
  }

  class Trie {
    constructor() {
      this.root = new TrieNode();
    }

    insert(num) {
      let node = this.root;
      for (let i = 14; i >= 0; i--) {
        let bit = (num >> i) & 1;
        if (!node.children[bit]) {
          node.children[bit] = new TrieNode();
        }
        node = node.children[bit];
        node.count++;
      }
    }

    countLessThan(num, limit) {
      let node = this.root;
      let res = 0;

      for (let i = 14; i >= 0; i--) {
        if (!node) break;

        let bit = (num >> i) & 1;
        let limBit = (limit >> i) & 1;

        if (limBit === 1) {
          if (node.children[bit]) {
            res += node.children[bit].count;
          }
          node = node.children[bit ^ 1];
        } else {
          node = node.children[bit];
        }
      }

      return res;
    }
  }

  const solve = (limit) => {
    let trie = new Trie();
    let count = 0;

    for (let num of nums) {
      count += trie.countLessThan(num, limit);
      trie.insert(num);
    }

    return count;
  };

  return solve(high + 1) - solve(low);
};
