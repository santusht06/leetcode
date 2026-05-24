var isAdditiveNumber = function (num) {
  num = num.split("").map(Number);

  for (let i = 0; i < num.length - 2; i++) {
    if (num[i] + num[i + 1] === num[i + 2]) {
      return true;
    } else {
      return false;
    }
  }
};

let num = "112358";

console.log(isAdditiveNumber(num));
