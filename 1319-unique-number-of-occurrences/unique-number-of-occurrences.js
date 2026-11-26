var uniqueOccurrences = function(arr) {
    let counts = new Map();
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        counts.set(val, (counts.get(val) || 0) + 1);
    }
    let seen = new Set();
    for (let freq of counts.values()) {
        if (seen.has(freq)) {
            return false;
        }
        seen.add(freq);
    }
    return true;
};