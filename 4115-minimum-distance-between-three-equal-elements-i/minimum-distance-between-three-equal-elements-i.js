/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDistance = function (nums) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) {
            map.set(nums[i], []);
        }
        map.get(nums[i]).push(i);
    }

    let ans = Infinity;

    for (const indices of map.values()) {
        if (indices.length < 3) continue;

        for (let i = 0; i + 2 < indices.length; i++) {
            ans = Math.min(
                ans,
                2 * (indices[i + 2] - indices[i])
            );
        }
    }

    return ans === Infinity ? -1 : ans;
};