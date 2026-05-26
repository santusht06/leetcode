var countNegatives = function (grid) {
  let count = 0;

  grid = grid.flat();

  grid.forEach((element) => {
    if (element < 0) {
      count++;
    }
  });

  return count;
};

grid = [
  [4, 3, 2, -1],
  [3, 2, 1, -1],
  [1, 1, -1, -2],
  [-1, -1, -2, -3],
];

console.log(countNegatives(grid));
