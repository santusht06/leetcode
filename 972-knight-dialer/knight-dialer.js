var knightDialer = function(n) {
    const MOD = 1000000007;
    let jumps = [
        [4, 6],
        [6, 8],
        [7, 9],
        [4, 8],
        [0, 3, 9],
        [],
        [0, 1, 7],
        [2, 6],
        [1, 3],
        [2, 4]
    ];
    let dp = new Array(10).fill(1);
    for (let step = 2; step <= n; step++) {
        let next = new Array(10).fill(0);
        for (let i = 0; i < 10; i++) {
            for (let neighbor of jumps[i]) {
                next[i] = (next[i] + dp[neighbor]) % MOD;
            }
        }
        dp = next;
    }
    let total = 0;
    for (let i = 0; i < 10; i++) {
        total = (total + dp[i]) % MOD;
    }
    return total;
};