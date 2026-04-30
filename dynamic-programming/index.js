function getDepth(x) {
  let depth = 0;

  while (x !== 1) {
    x = popcount(x);
    depth++;
  }

  return depth;
}

function popcount(x) {
  let count = 0n;
  x = BigInt(x);

  while (x > 0n) {
    count += x & 1n;
    x >>= 1n;
  }

  return Number(count);
}
