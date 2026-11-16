var findLengthOfLCIS = function(nums) {
    if (!nums.length) return 0;
    let best = 1;
    let curr = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            curr++;
        } else {
            curr = 1;
        }
        if (curr > best) {
            best = curr;
        }
    }
    return best;
};