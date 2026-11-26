var numberOfBoomerangs = function(points) {
    let ans = 0;
    for (let i = 0; i < points.length; i++) {
        let counts = new Map();
        for (let j = 0; j < points.length; j++) {
            if (i === j) continue;
            let dx = points[i][0] - points[j][0];
            let dy = points[i][1] - points[j][1];
            let dist = dx * dx + dy * dy;
            counts.set(dist, (counts.get(dist) || 0) + 1);
        }
        for (let val of counts.values()) {
            if (val > 1) {
                ans += val * (val - 1);
            }
        }
    }
    return ans;
};