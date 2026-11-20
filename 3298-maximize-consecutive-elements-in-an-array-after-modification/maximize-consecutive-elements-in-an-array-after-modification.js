var maxSelectedElements = function(nums) {
    nums.sort((a, b) => a - b);
    let map = new Map();
    let ans = 0;
    for (let i = 0; i < nums.length; i++) {
        let x = nums[i];
        let c1 = (map.get(x - 1) || 0) + 1;
        let c2 = (map.get(x) || 0) + 1;
        map.set(x, Math.max(map.get(x) || 0, c1));
        map.set(x + 1, Math.max(map.get(x + 1) || 0, c2));
        ans = Math.max(ans, map.get(x), map.get(x + 1));
    }
    return ans;
};