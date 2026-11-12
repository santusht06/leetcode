var longestMonotonicSubarray = function(nums) {
    if (nums.length === 0) return 0;
    let maxLen = 1;
    let inc = 1;
    let dec = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            inc++;
            dec = 1;
        } else if (nums[i] < nums[i - 1]) {
            dec++;
            inc = 1;
        } else {
            inc = 1;
            dec = 1;
        }
        maxLen = Math.max(maxLen, inc, dec);
    }
    return maxLen;
};