var findSecondMinimumValue = function(root) {
    let min1 = root.val;
    let min2 = -1;
    function dfs(node) {
        if (!node) return;
        if (node.val > min1) {
            if (min2 === -1 || node.val < min2) {
                min2 = node.val;
            }
        }
        dfs(node.left);
        dfs(node.right);
    }
    dfs(root);
    return min2;
};