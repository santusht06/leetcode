/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortByReflection = function (nums) {
    function reflect(num) {
        const binary = num.toString(2);
        const reversed = binary.split("").reverse().join("");
        return parseInt(reversed, 2);
    }

    return nums.sort((a, b) => {
        const ra = reflect(a);
        const rb = reflect(b);

        if (ra === rb) return a - b; // tie-breaker
        return ra - rb;
    });
};