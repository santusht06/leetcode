var minimumChanges = function(s, k) {
    let n = s.length;
    let divisors = Array.from({ length: n + 1 }, () => []);
    for (let i = 1; i <= n; i++) {
        for (let j = 2 * i; j <= n; j += i) {
            divisors[j].push(i);
        }
    }
    let cost = Array.from({ length: n }, () => Array(n).fill(1e9));
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let len = j - i + 1;
            let divs = divisors[len];
            if (divs.length === 0) continue;
            let minChangesForSub = 1e9;
            for (let d of divs) {
                let currChanges = 0;
                for (let g = 0; g < d; g++) {
                    let groupChars = [];
                    for (let p = i + g; p <= j; p += d) {
                        groupChars.push(s[p]);
                    }
                    let left = 0, right = groupChars.length - 1;
                    while (left < right) {
                        if (groupChars[left] !== groupChars[right]) {
                            currChanges++;
                        }
                        left++;
                        right--;
                    }
                }
                if (currChanges < minChangesForSub) {
                    minChangesForSub = currChanges;
                }
            }
            cost[i][j] = minChangesForSub;
        }
    }
    let dp = Array.from({ length: k + 1 }, () => Array(n).fill(1e9));
    for (let i = 0; i < n; i++) {
        if (cost[0][i] !== 1e9) {
            dp[1][i] = cost[0][i];
        }
    }
    for (let parts = 2; parts <= k; parts++) {
        for (let i = 0; i < n; i++) {
            for (let p = 0; p < i; p++) {
                if (dp[parts - 1][p] !== 1e9 && cost[p + 1][i] !== 1e9) {
                    dp[parts][i] = Math.min(dp[parts][i], dp[parts - 1][p] + cost[p + 1][i]);
                }
            }
        }
    }
    return dp[k][n - 1];
};