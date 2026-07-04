/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    while (root !== null) {
        if (root.val === val) return root;

        if (val < root.val) {
            root = root.left;
        } else {
            root = root.right;
        }
    }

    return null;
};