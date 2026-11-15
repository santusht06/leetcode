var numOfSubarrays = function(arr) {
    let MOD = 1000000007;
    let odd = 0;
    let even = 1;
    let sum = 0;
    let ans = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (sum % 2 === 1) {
            ans = (ans + even) % MOD;
            odd++;
        } else {
            ans = (ans + odd) % MOD;
            even++;
        }
    }
    return ans;
};