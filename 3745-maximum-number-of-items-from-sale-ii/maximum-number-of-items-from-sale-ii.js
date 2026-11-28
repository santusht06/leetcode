var maximumSaleItems = function(items, budget) {
    const n = items.length;
    let minP = Infinity;
    for (let i = 0; i < n; i++) {
        if (items[i][1] < minP) minP = items[i][1];
    }
    
    let maxFactor = 0;
    for (let i = 0; i < n; i++) {
        if (items[i][0] > maxFactor) maxFactor = items[i][0];
    }
    
    const count = new Int32Array(maxFactor + 1);
    for (let i = 0; i < n; i++) {
        count[items[i][0]]++;
    }
    
    const mult = new Int32Array(maxFactor + 1);
    for (let f = 1; f <= maxFactor; f++) {
        for (let k = f; k <= maxFactor; k += f) {
            mult[f] += count[k];
        }
    }
    
    const offers = [];
    const threshold = 2 * minP;
    for (let i = 0; i < n; i++) {
        const f = items[i][0];
        const p = items[i][1];
        const m = mult[f] - 1;
        if (m > 0 && p < threshold) {
            offers.push([p, m]);
        }
    }
    
    offers.sort((a, b) => a[0] - b[0]);
    
    let rem = budget;
    let ans = 0;
    for (let i = 0; i < offers.length; i++) {
        const p = offers[i][0];
        const m = offers[i][1];
        if (rem < p) break;
        const take = Math.min(m, Math.floor(rem / p));
        ans += take * 2;
        rem -= take * p;
    }
    
    ans += Math.floor(rem / minP);
    return ans;
};