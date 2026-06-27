/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
    const ans = [];

    for (let row = 0; row < matrix.length; row++) {
        let minCol = 0;

        for (let col = 1; col < matrix[0].length; col++) {
            if (matrix[row][col] < matrix[row][minCol]) {
                minCol = col;
            }
        }

        let isLucky = true;

        for (let r = 0; r < matrix.length; r++) {
            if (matrix[r][minCol] > matrix[row][minCol]) {
                isLucky = false;
                break;
            }
        }

        if (isLucky) {
            ans.push(matrix[row][minCol]);
        }
    }

    return ans;
};