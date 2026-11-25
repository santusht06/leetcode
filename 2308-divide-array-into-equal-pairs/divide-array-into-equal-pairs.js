var divideArray = function(nums) {
    let counts = {};
    for (let i = 0; i < nums.length; i++) {
        let val = nums[i];
        counts[val] = (counts[val] || 0) + 1;
    }
    for (let key in counts) {
        if (counts[key] % 2 !== 0) {
            return false;
        }
    }
    return true;
};