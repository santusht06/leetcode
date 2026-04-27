/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkValidGrid = function (grid) {
  let n = grid.length;

  // step → position
  let pos = new Array(n * n);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      pos[grid[i][j]] = [i, j];
    }
  }

  // must start at top-left
  if (pos[0][0] !== 0 || pos[0][1] !== 0) return false;

  // check moves
  for (let k = 1; k < n * n; k++) {
    let [r1, c1] = pos[k - 1];
    let [r2, c2] = pos[k];

    let dr = Math.abs(r1 - r2);
    let dc = Math.abs(c1 - c2);

    if (!((dr === 2 && dc === 1) || (dr === 1 && dc === 2))) {
      return false;
    }
  }

  return true;
};
