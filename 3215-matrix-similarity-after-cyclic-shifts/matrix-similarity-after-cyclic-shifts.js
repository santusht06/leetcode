var areSimilar = function(mat, k) {
    let rows = mat.length;
    let cols = mat[0].length;
    let shift = k % cols;
    if (shift === 0) return true;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let nextCol;
            if (i % 2 === 0) {
                nextCol = (j + shift) % cols;
            } else {
                nextCol = (j - shift + cols) % cols;
            }
            if (mat[i][j] !== mat[i][nextCol]) {
                return false;
            }
        }
    }
    return true;
};