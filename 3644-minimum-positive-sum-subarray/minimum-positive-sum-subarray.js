var minimumSumSubarray = function(nums, l, r) {
    let ans = Infinity;
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        let curr = 0;
        for (let j = i; j < n; j++) {
            curr += nums[j];
            let len = j - i + 1;
            if (len >= l && len <= r) {
                if (curr > 0) {
                    ans = Math.min(ans, curr);
                }
            }
            if (len > r) {
                break;
            }
        }
    }
    return ans === Infinity ? -1 : ans;
};