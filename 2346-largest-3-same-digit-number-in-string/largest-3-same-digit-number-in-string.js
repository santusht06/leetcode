/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function (num) {
  let ans = "";

  for (let i = 0; i < num.length - 2; i++) {
    if (num[i] === num[i + 1] && num[i] === num[i + 2]) {
      const curr = num.slice(i, i + 3);

      console.log(curr);

      if (curr > ans) {
        ans = curr;
      }
    }
  }

  return ans;
};

num = "6777133339";

largestGoodInteger(num);
