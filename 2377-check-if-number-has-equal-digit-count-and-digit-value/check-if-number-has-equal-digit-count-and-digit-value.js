var digitCount = function (num) {
  let map = new Map();

  for (let n of num) {
    map.set(n, (map.get(n) || 0) + 1);
  }

  for (let i = 0; i < num.length; i++) {
    if (Number(num[i]) !== (map.get(String(i)) || 0)) {
      return false;
    }
  }
  return true;
};

num = "5210010007";

console.log(digitCount(num));
