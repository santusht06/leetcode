var nextGreaterElement = function(n) {
    let digits = String(n).split('').map(Number);
    let i = digits.length - 2;
    while (i >= 0 && digits[i] >= digits[i + 1]) {
        i--;
    }
    if (i < 0) return -1;
    let j = digits.length - 1;
    while (digits[j] <= digits[i]) {
        j--;
    }
    let temp = digits[i];
    digits[i] = digits[j];
    digits[j] = temp;
    let left = i + 1;
    let right = digits.length - 1;
    while (left < right) {
        let t = digits[left];
        digits[left] = digits[right];
        digits[right] = t;
        left++;
        right--;
    }
    let ans = Number(digits.join(''));
    let limit = 2147483647;
    if (ans > limit) return -1;
    return ans;
};