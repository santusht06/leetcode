/**
 * @param {number} num
 * @return {boolean}
 */
var completePrime = function (num) {
    function isPrime(n) {
        if (n < 2) return false;
        if (n === 2) return true;
        if (n % 2 === 0) return false;

        for (let i = 3; i * i <= n; i += 2) {
            if (n % i === 0) return false;
        }

        return true;
    }

    const s = num.toString();

   
    for (let i = 1; i <= s.length; i++) {
        const prefix = Number(s.slice(0, i));
        if (!isPrime(prefix)) return false;
    }


    for (let i = 0; i < s.length; i++) {
        const suffix = Number(s.slice(i));
        if (!isPrime(suffix)) return false;
    }

    return true;
};