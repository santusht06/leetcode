var getMaximumGenerated = function(n) {
    if (n === 0) return 0;
    let arr = new Array(n + 1);
    arr[0] = 0;
    arr[1] = 1;
    let maxVal = 1;
    for (let i = 1; 2 * i <= n; i++) {
        arr[2 * i] = arr[i];
        if (arr[2 * i] > maxVal) {
            maxVal = arr[2 * i];
        }
        if (2 * i + 1 <= n) {
            arr[2 * i + 1] = arr[i] + arr[i + 1];
            if (arr[2 * i + 1] > maxVal) {
                maxVal = arr[2 * i + 1];
            }
        }
    }
    return maxVal;
};