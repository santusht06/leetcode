var maximumSaleItems = function(items, budget) {
    let n = items.length;
    let enriched = items.map((item, idx) => {
        let f = item[0];
        let p = item[1];
        let count = 0;
        for (let j = 0; j < n; j++) {
            if (j !== idx && items[j][0] % f === 0) {
                count++;
            }
        }
        return { f, p, count, idx };
    });
    let dp = new Array(budget + 1).fill(0);
    for (let item of enriched) {
        let cost = item.p;
        let gain = 1 + item.count;
        let nextDp = [...dp];
        for (let b = cost; b <= budget; b++) {
            if (dp[b - cost] !== 0 || b - cost === 0) {
                nextDp[b] = Math.max(nextDp[b], dp[b - cost] + gain);
            }
        }
        for (let b = cost; b <= budget; b++) {
            if (nextDp[b - cost] !== 0 || b - cost === 0) {
                nextDp[b] = Math.max(nextDp[b], nextDp[b - cost] + 1);
            }
        }
        dp = nextDp;
    }
    let ans = 0;
    for (let b = 0; b <= budget; b++) {
        ans = Math.max(ans, dp[b]);
    }
    return ans;
};