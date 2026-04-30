var countIslands = function (grid, k) {
  const m = grid.length;
  const n = grid[0].length;

  let visited = Array.from({ length: m }, () => Array(n).fill(false));

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  function dfs(r, c) {
    let stack = [[r, c]];
    visited[r][c] = true;
    let sum = 0;

    while (stack.length) {
      let [x, y] = stack.pop();
      sum += grid[x][y];

      for (let [dx, dy] of directions) {
        let nx = x + dx;
        let ny = y + dy;

        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < m &&
          ny < n &&
          grid[nx][ny] > 0 &&
          !visited[nx][ny]
        ) {
          visited[nx][ny] = true;
          stack.push([nx, ny]);
        }
      }
    }

    return sum;
  }

  let count = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] > 0 && !visited[i][j]) {
        let islandSum = dfs(i, j);

        if (islandSum % k === 0) {
          count++;
        }
      }
    }
  }

  return count;
};
