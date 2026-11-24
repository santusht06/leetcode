var countBinarySubstrings = function(s) {
    let ans = 0;
    let prev = 0;
    let curr = 1;
    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            curr++;
        } else {
            ans += Math.min(prev, curr);
            prev = curr;
            curr = 1;
        }
    }
    ans += Math.min(prev, curr);
    return ans;
};