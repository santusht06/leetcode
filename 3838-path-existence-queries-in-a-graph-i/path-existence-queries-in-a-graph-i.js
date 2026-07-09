/**
 * @param {number} n
 * @param {number[]} nums
 * @param {number} maxDiff
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var pathExistenceQueries = function (n, nums, maxDiff, queries) {
    const component = new Array(n);

    let id = 0;
    component[0] = id;

    for (let i = 1; i < n; i++) {
        if (nums[i] - nums[i - 1] > maxDiff) {
            id++;
        }
        component[i] = id;
    }

    const ans = [];

    for (const [u, v] of queries) {
        ans.push(component[u] === component[v]);
    }

    return ans;
};