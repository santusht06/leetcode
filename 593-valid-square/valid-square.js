var validSquare = function (p1, p2, p3, p4) {
  const points = [p1, p2, p3, p4];

  const distances = [];

  for (let i = 0; i < 4; i++) {
    for (let j = i + 1; j < 4; j++) {
      distances.push(getDistance(points[i], points[j]));
    }
  }

  distances.sort((a, b) => a - b);

  // 4 equal sides > 0 and 2 equal diagonals
  return (
    distances[0] > 0 &&
    distances[0] === distances[1] &&
    distances[1] === distances[2] &&
    distances[2] === distances[3] &&
    distances[4] === distances[5]
  );
};

function getDistance(p1, p2) {
  const dx = p2[0] - p1[0];
  const dy = p2[1] - p1[1];
  return dx * dx + dy * dy; // squared distance (better)
}