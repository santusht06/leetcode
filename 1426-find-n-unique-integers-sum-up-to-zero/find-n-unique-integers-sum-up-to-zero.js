var sumZero = function(n) {
    let ans = [];
    let start = Math.floor(n / 2);
    if (n % 2 !== 0) {
        ans.push(0);
    }
    for (let i = 1; i <= start; i++) {
        ans.push(i);
        ans.push(-i);
    }
    return ans;
};