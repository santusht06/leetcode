var maxSumDistinctTriplet = function (x, y) {
  const map = new Map();

  // Step 1: store max y for each x
  for (let i = 0; i < x.length; i++) {
    if (!map.has(x[i])) {
      map.set(x[i], y[i]);
    } else {
      map.set(x[i], Math.max(map.get(x[i]), y[i]));
    }
  }

  // Step 2: get all values
  const values = Array.from(map.values());

  // Step 3: need at least 3 distinct x
  if (values.length < 3) return -1;

  // Step 4: find top 3 largest values
  values.sort((a, b) => b - a);

  return values[0] + values[1] + values[2];
};
