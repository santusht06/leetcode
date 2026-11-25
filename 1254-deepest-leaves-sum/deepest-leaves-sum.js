var deepestLeavesSum = function(root) {
    let queue = [root];
    let sum = 0;
    while (queue.length > 0) {
        sum = 0;
        let nextQueue = [];
        for (let i = 0; i < queue.length; i++) {
            let node = queue[i];
            sum += node.val;
            if (node.left) nextQueue.push(node.left);
            if (node.right) nextQueue.push(node.right);
        }
        queue = nextQueue;
    }
    return sum;
};