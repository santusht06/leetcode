var countEven = function (num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    let split = String(i)
      .split("")
      .map(Number)
      .reduce((acc, curr) => acc + curr, 0);

    if (split % 2 == 0) {
      count++;
    }
  }
  return count;
};

num = 4;

console.log(countEven(num));
