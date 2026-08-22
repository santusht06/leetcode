var maximumWealth = function (accounts) {
  let ans = [];

  accounts.forEach((el) => {
    ans.push(el.reduce((acc, curr) => acc + curr, 0));
  });

  return Math.max(...ans);
};

accounts = [
  [2, 8, 7],
  [7, 1, 3],
  [1, 9, 5],
];

console.log(maximumWealth(accounts));
