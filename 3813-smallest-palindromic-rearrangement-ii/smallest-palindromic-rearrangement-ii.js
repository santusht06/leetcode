/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var smallestPalindrome = function(s, k) {
    const MAX_K = 1000001;
    
    // Frequency map of characters in 's'
    const freq = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        freq[s.charCodeAt(i) - 97]++;
    }

    // Prepare left half character counts and middle character (if any)
    const half = new Array(26).fill(0);
    let halfLen = 0;
    let midChar = "";

    for (let i = 0; i < 26; i++) {
        half[i] = Math.floor(freq[i] / 2);
        halfLen += half[i];
        if (freq[i] % 2 !== 0) {
            midChar = String.fromCharCode(97 + i);
        }
    }

    // Helper: Compute unique permutations given character frequencies in `counts`
    function countWays(counts) {
        let total = 0;
        for (let c of counts) total += c;

        let res = 1;
        for (let count of counts) {
            if (count === 0) continue;
            // Calculate nCr(total, count) safely
            for (let i = 1; i <= count; i++) {
                res = (res * (total - count + i)) / i;
                if (res >= MAX_K) return MAX_K; // Cap to avoid large number operations
            }
            total -= count;
        }
        return res;
    }

    // If total possible palindromes is less than k, return empty string
    if (countWays(half) < k) return "";

    let leftHalf = "";

    // Construct the left half char by char
    for (let pos = 0; pos < halfLen; pos++) {
        for (let ch = 0; ch < 26; ch++) {
            if (half[ch] === 0) continue;

            // Tentatively pick character
            half[ch]--;
            const ways = countWays(half);

            if (ways >= k) {
                leftHalf += String.fromCharCode(97 + ch);
                break; // Kept this choice
            } else {
                k -= ways;      // Skip this prefix group
                half[ch]++;    // Backtrack
            }
        }
    }

    // Mirror left half to get right half
    const rightHalf = leftHalf.split("").reverse().join("");

    return leftHalf + midChar + rightHalf;
};