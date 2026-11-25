var smallestUniqueSubarray = function(nums) {
    let n = nums.length;
    let low = 1;
    let high = n;
    let ans = n;
    let check = function(len) {
        let counts = new Map();
        let hash1 = 0n;
        let hash2 = 0n;
        let mod1 = 1000000007n;
        let mod2 = 1000000009n;
        let p1 = 1n;
        let p2 = 1n;
        let base1 = 131n;
        let base2 = 137n;
        for (let i = 0; i < len; i++) {
            let val = BigInt(nums[i]);
            hash1 = (hash1 * base1 + val) % mod1;
            hash2 = (hash2 * base2 + val) % mod2;
            if (i > 0) {
                p1 = (p1 * base1) % mod1;
                p2 = (p2 * base2) % mod2;
            }
        }
        let key = hash1.toString() + "_" + hash2.toString();
        counts.set(key, 1);
        for (let i = len; i < n; i++) {
            let outVal = BigInt(nums[i - len]);
            let inVal = BigInt(nums[i]);
            hash1 = (hash1 - outVal * p1 % mod1 + mod1) % mod1;
            hash1 = (hash1 * base1 + inVal) % mod1;
            hash2 = (hash2 - outVal * p2 % mod2 + mod2) % mod2;
            hash2 = (hash2 * base2 + inVal) % mod2;
            key = hash1.toString() + "_" + hash2.toString();
            counts.set(key, (counts.get(key) || 0) + 1);
        }
        for (let [k, v] of counts) {
            if (v === 1) return true;
        }
        return false;
    };
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (check(mid)) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return ans;
};