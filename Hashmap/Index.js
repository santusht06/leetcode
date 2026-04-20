/**
 * @param {number[][]} mat
 * @return {number}
 */
var minFlips = function (mat) {
  let m = mat.length,
    n = mat[0].length;

  // convert matrix to bitmask
  const getMask = (mat) => {
    let mask = 0;
    let pos = 0;
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (mat[i][j] === 1) {
          mask |= 1 << pos;
        }
        pos++;
      }
    }
    return mask;
  };

  let start = getMask(mat);
  if (start === 0) return 0;

  let visited = new Set();
  let queue = [[start, 0]];

  visited.add(start);

  // directions (self + 4 neighbors)
  let dirs = [
    [0, 0],
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  while (queue.length) {
    let [state, steps] = queue.shift();

    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        let next = state;

        for (let [dx, dy] of dirs) {
          let x = i + dx;
          let y = j + dy;

          if (x >= 0 && x < m && y >= 0 && y < n) {
            let pos = x * n + y;
            next ^= 1 << pos; // flip bit
          }
        }

        if (next === 0) return steps + 1;

        if (!visited.has(next)) {
          visited.add(next);
          queue.push([next, steps + 1]);
        }
      }
    }
  }

  return -1;
};
