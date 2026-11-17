var hasSpecialSubstring = function(s, k) {
    let n = s.length;
    for (let i = 0; i <= n - k; i++) {
        let ok = true;
        let c = s[i];
        for (let j = 0; j < k; j++) {
            if (s[i + j] !== c) {
                ok = false;
                break;
            }
        }
        if (!ok) continue;
        if (i > 0 && s[i - 1] === c) continue;
        if (i + k < n && s[i + k] === c) continue;
        return true;
    }
    return false;
};