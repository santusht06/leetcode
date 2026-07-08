/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumAndMultiply = function (s, queries) {
    const MOD = 1000000007n;

    const digits = [];
    const pos = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== '0') {
            digits.push(s.charCodeAt(i) - 48);
            pos.push(i);
        }
    }

    const m = digits.length;

    const prefSum = new Array(m + 1).fill(0);
    const prefHash = new Array(m + 1).fill(0n);
    const pow10 = new Array(m + 1).fill(1n);

    for (let i = 0; i < m; i++) {
        prefSum[i + 1] = prefSum[i] + digits[i];
        prefHash[i + 1] = (prefHash[i] * 10n + BigInt(digits[i])) % MOD;
        pow10[i + 1] = (pow10[i] * 10n) % MOD;
    }

    function lowerBound(arr, target) {
        let l = 0, r = arr.length;
        while (l < r) {
            const mid = (l + r) >> 1;
            if (arr[mid] < target) l = mid + 1;
            else r = mid;
        }
        return l;
    }

    function upperBound(arr, target) {
        let l = 0, r = arr.length;
        while (l < r) {
            const mid = (l + r) >> 1;
            if (arr[mid] <= target) l = mid + 1;
            else r = mid;
        }
        return l;
    }

    const ans = [];

    for (const [l, r] of queries) {

        const L = lowerBound(pos, l);
        const R = upperBound(pos, r) - 1;

        if (L > R) {
            ans.push(0);
            continue;
        }

        const len = R - L + 1;

        const sum = BigInt(prefSum[R + 1] - prefSum[L]);

        const number =
            (prefHash[R + 1]
            - (prefHash[L] * pow10[len]) % MOD
            + MOD) % MOD;

        ans.push(Number((number * sum) % MOD));
    }

    return ans;
};