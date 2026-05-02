var binaryTreePaths = function (root) {
  let result = [];

  function dfs(node, path) {
    if (!node) return;

    // add current node to path
    path += node.val;

    // if leaf → store result
    if (!node.left && !node.right) {
      result.push(path);
      return;
    }

    // continue DFS
    path += "->";
    dfs(node.left, path);
    dfs(node.right, path);
  }

  dfs(root, "");
  return result;
};
