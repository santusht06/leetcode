var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false;
    let need = new Array(26).fill(0);
    let window = new Array(26).fill(0);
    for (let i = 0; i < s1.length; i++) {
        need[s1.charCodeAt(i) - 97]++;
        window[s2.charCodeAt(i) - 97]++;
    }
    let matches = 0;
    for (let i = 0; i < 26; i++) {
        if (need[i] === window[i]) matches++;
    }
    let left = 0;
    for (let right = s1.length; right < s2.length; right++) {
        if (matches === 26) return true;
        let rightChar = s2.charCodeAt(right) - 97;
        window[rightChar]++;
        if (window[rightChar] === need[rightChar]) {
            matches++;
        } else if (window[rightChar] === need[rightChar] + 1) {
            matches--;
        }
        let leftChar = s2.charCodeAt(left) - 97;
        window[leftChar]--;
        if (window[leftChar] === need[leftChar]) {
            matches++;
        } else if (window[leftChar] === need[leftChar] - 1) {
            matches--;
        }
        left++;
    }
    return matches === 26;
};