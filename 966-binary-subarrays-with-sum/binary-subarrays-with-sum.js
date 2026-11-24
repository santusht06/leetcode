var numSubarraysWithSum = function(nums, goal) {
    const map = new Map();
    map.set(0, 1);
    let total = 0;
    let curr = 0;
    for (let i = 0; i < nums.length; i++) {
        curr += nums[i];
        const need = curr - goal;
        if (map.has(need)) {
            total += map.get(need);
        }
        map.set(curr, (map.get(curr) || 0) + 1);
    }
    return total;
};