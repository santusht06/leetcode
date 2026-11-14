var incremovableSubarrayCount = function(nums) {
    let n = nums.length;
    let ans = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let ok = true;
            let last = -1;
            for (let k = 0; k < n; k++) {
                if (k >= i && k <= j) continue;
                if (nums[k] <= last) {
                    ok = false;
                    break;
                }
                last = nums[k];
            }
            if (ok) {
                ans++;
            }
        }
    }
    return ans;
};