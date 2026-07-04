var sumOfEncryptedInt = function (nums) {
  let result = [];

  for (let n of nums) {
    result.push(encrypt(n));
  }

  return result.reduce((acc, crr) => acc + crr, 0);
};

nums = [10, 21, 31];
function encrypt(Num) {
  let res = String(Num).split("");

  const newArray = new Array(res.length).fill(Math.max(...res));

  return Number(newArray.map(String).join(""));
}

console.log(sumOfEncryptedInt(nums));
