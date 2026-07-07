/**
 * @param {string[][]} responses
 * @return {string}
 */
var findCommonResponse = function(responses) {
    const map = new Map();

    for (const day of responses) {
        const unique = new Set(day);

        for (const response of unique) {
            map.set(response, (map.get(response) || 0) + 1);
        }
    }

    let ans = "";
    let maxFreq = 0;

    for (const [response, freq] of map) {
        if (
            freq > maxFreq ||
            (freq === maxFreq && response < ans)
        ) {
            maxFreq = freq;
            ans = response;
        }
    }

    return ans;
};