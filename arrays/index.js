/**
 * @param {number[]} robots
 * @param {number[]} distance
 * @param {number[]} walls
 * @return {number}
 */
var maxWalls = function (robots, distance, walls) {
  let n = robots.length;

  // Store robots with distances
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push([robots[i], distance[i]]);
  }

  // Sort robots
  arr.sort((a, b) => a[0] - b[0]);

  // Sort walls
  walls.sort((a, b) => a - b);

  let destroyed = new Set();

  for (let i = 0; i < n; i++) {
    let pos = arr[i][0];
    let dist = arr[i][1];

    // Nearest robot boundaries
    let leftBlock = i > 0 ? arr[i - 1][0] : -Infinity;
    let rightBlock = i < n - 1 ? arr[i + 1][0] : Infinity;

    // Shoot left
    let leftStart = Math.max(pos - dist, leftBlock);

    // Shoot right
    let rightEnd = Math.min(pos + dist, rightBlock);

    let leftCount = 0;
    let rightCount = 0;

    // Count left walls
    for (let wall of walls) {
      if (wall >= leftStart && wall <= pos) {
        leftCount++;
      }
    }

    // Count right walls
    for (let wall of walls) {
      if (wall >= pos && wall <= rightEnd) {
        rightCount++;
      }
    }

    // Choose better direction
    if (leftCount >= rightCount) {
      for (let wall of walls) {
        if (wall >= leftStart && wall <= pos) {
          destroyed.add(wall);
        }
      }
    } else {
      for (let wall of walls) {
        if (wall >= pos && wall <= rightEnd) {
          destroyed.add(wall);
        }
      }
    }
  }

  return destroyed.size;
};
