var canMakePaliQueries = function (s, queries) {
  let n = s.length;
  let prefix = new Array(n + 1).fill(0);

  // build prefix bitmask
  for (let i = 0; i < n; i++) {
    let bit = 1 << (s[i].charCodeAt(0) - 97);
    prefix[i + 1] = prefix[i] ^ bit;
  }

  let result = [];

  for (let [l, r, k] of queries) {
    let mask = prefix[r + 1] ^ prefix[l];

    // count number of 1s (odd chars)
    let odd = 0;
    while (mask) {
      mask &= mask - 1; // remove lowest set bit
      odd++;
    }

    result.push(Math.floor(odd / 2) <= k);
  }

  return result;
};
