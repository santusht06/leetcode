var longestSubsequence = function(arr, difference) {
    let map = new Map();
    let best = 0;
    for (let x of arr) {
        let prev = map.get(x - difference) || 0;
        let curr = prev + 1;
        map.set(x, curr);
        if (curr > best) {
            best = curr;
        }
    }
    return best;
};