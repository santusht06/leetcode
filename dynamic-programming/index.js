/**
 * @param {TreeNode} root
 * @param {number} start
 * @return {number}
 */
var amountOfTime = function (root, start) {
  let graph = new Map();

  // 🔹 build graph
  const build = (node, parent) => {
    if (!node) return;

    if (!graph.has(node.val)) graph.set(node.val, []);

    if (parent) {
      graph.get(node.val).push(parent.val);
      graph.get(parent.val).push(node.val);
    }

    build(node.left, node);
    build(node.right, node);
  };

  build(root, null);

  // 🔹 BFS
  let queue = [start];
  let visited = new Set([start]);
  let time = -1;

  while (queue.length) {
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let node = queue.shift();

      for (let nei of graph.get(node)) {
        if (!visited.has(nei)) {
          visited.add(nei);
          queue.push(nei);
        }
      }
    }

    time++;
  }

  return time;
};
