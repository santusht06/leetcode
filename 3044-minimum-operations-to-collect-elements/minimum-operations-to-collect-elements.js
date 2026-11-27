var minOperations = function(nums, k) {
    let seen = new Set();
    let ops = 0;
    for (let i = nums.length - 1; i >= 0; i--) {
        ops++;
        let val = nums[i];
        if (val <= k) {
            seen.add(val);
            if (seen.size === k) {
                return ops;
            }
        }
    }
    return ops;
};