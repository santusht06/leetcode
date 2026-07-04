var sumOfEncryptedInt = function (nums) {
  return nums.reduce((sum, num) => sum + encrypt(num), 0);
};

function encrypt(num) {
  const digits = String(num).split("");
  const maxDigit = Math.max(...digits);

  return Number(String(maxDigit).repeat(digits.length));
}