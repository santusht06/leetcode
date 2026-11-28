var findClosestNumber = function(nums) {
    let best = nums[0];
    for (let i = 1; i < nums.length; i++) {
        let curr = nums[i];
        let bestDist = Math.abs(best);
        let currDist = Math.abs(curr);
        if (currDist < bestDist) {
            best = curr;
        } else if (currDist === bestDist && curr > best) {
            best = curr;
        }
    }
    return best;
};