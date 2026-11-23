var projectionArea = function(grid) {
    let n = grid.length;
    let ans = 0;
    for (let i = 0; i < n; i++) {
        let maxRow = 0;
        let maxCol = 0;
        for (let j = 0; j < n; j++) {
            if (grid[i][j] > 0) {
                ans++;
            }
            if (grid[i][j] > maxRow) {
                maxRow = grid[i][j];
            }
            if (grid[j][i] > maxCol) {
                maxCol = grid[j][i];
            }
        }
        ans += maxRow + maxCol;
    }
    return ans;
};