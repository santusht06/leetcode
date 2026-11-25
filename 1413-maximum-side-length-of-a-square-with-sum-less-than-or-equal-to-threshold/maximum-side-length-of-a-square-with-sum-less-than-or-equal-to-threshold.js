var maxSideLength = function(mat, threshold) {
    let rows = mat.length;
    let cols = mat[0].length;
    let sum = Array.from({ length: rows + 1 }, () => Array(cols + 1).fill(0));
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            sum[i + 1][j + 1] = mat[i][j] + sum[i][j + 1] + sum[i + 1][j] - sum[i][j];
        }
    }
    let getSum = function(r1, c1, r2, c2) {
        return sum[r2 + 1][c2 + 1] - sum[r1][c2 + 1] - sum[r2 + 1][c1] + sum[r1][c1];
    };
    let low = 0;
    let high = Math.min(rows, cols);
    let best = 0;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (mid === 0) {
            low = mid + 1;
            continue;
        }
        let found = false;
        for (let i = 0; i <= rows - mid; i++) {
            for (let j = 0; j <= cols - mid; j++) {
                if (getSum(i, j, i + mid - 1, j + mid - 1) <= threshold) {
                    found = true;
                    break;
                }
            }
            if (found) break;
        }
        if (found) {
            best = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return best;
};