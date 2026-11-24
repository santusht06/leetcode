var minCostClimbingStairs = function(cost) {
    let a = cost[0];
    let b = cost[1];
    for (let i = 2; i < cost.length; i++) {
        let curr = cost[i] + Math.min(a, b);
        a = b;
        b = curr;
    }
    return Math.min(a, b);
};