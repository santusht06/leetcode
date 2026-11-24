var maxLength = function(nums) {
    let best = 0;
    let n = nums.length;
    function gcd(a, b) {
        while (b) {
            let t = b;
            b = a % b;
            a = t;
        }
        return a;
    }
    function lcm(a, b) {
        return (a * b) / gcd(a, b);
    }
    for (let i = 0; i < n; i++) {
        let p = nums[i];
        let g = nums[i];
        let l = nums[i];
        for (let j = i; j < n; j++) {
            if (i !== j) {
                p *= nums[j];
                g = gcd(g, nums[j]);
                l = lcm(l, nums[j]);
            }
            if (p > 1e18) break;
            if (p === g * l) {
                best = Math.max(best, j - i + 1);
            }
        }
    }
    return best;
};