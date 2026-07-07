/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function (tiles) {
    const freq = {};

    for (const ch of tiles) {
        freq[ch] = (freq[ch] || 0) + 1;
    }

    function dfs() {
        let count = 0;

        for (const ch in freq) {
            if (freq[ch] === 0) continue;

            count++;          
            freq[ch]--;

            count += dfs();

            freq[ch]++;       
        }

        return count;
    }

    return dfs();
};