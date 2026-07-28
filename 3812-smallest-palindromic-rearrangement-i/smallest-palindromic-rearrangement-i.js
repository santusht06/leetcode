/**
 * @param {string} s
 * @return {string}
 */
var smallestPalindrome = function(s) {
    let freq = new Array(26).fill(0);

    for (let ch of s) {
        freq[ch.charCodeAt(0) - 97]++;
    }

    let left = "";
    let middle = "";

    for (let i = 0; i < 26; i++) {
        let count = freq[i];
        let ch = String.fromCharCode(i + 97);

        left += ch.repeat(Math.floor(count / 2));

        if (count % 2 === 1) {
            middle = ch;
        }
    }

    let right = left.split("").reverse().join("");

    return left + middle + right;
};