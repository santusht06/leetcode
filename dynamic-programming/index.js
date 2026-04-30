var popcountDepth = function (nums, queries) {
  const n = nums.length;

  // Fenwick Tree
  class BIT {
    constructor(n) {
      this.n = n;
      this.tree = new Array(n + 1).fill(0);
    }

    update(i, delta) {
      i++;
      while (i <= this.n) {
        this.tree[i] += delta;
        i += i & -i;
      }
    }

    query(i) {
      let sum = 0;
      i++;
      while (i > 0) {
        sum += this.tree[i];
        i -= i & -i;
      }
      return sum;
    }

    range(l, r) {
      return this.query(r) - this.query(l - 1);
    }
  }

  // popcount
  function popcount(x) {
    let count = 0n;
    x = BigInt(x);

    while (x > 0n) {
      count += x & 1n;
      x >>= 1n;
    }

    return Number(count);
  }

  // depth
  function getDepth(x) {
    let depth = 0;
    while (x !== 1) {
      x = popcount(x);
      depth++;
    }
    return depth;
  }

  // 6 BITs (depth 0..5)
  let bits = Array.from({ length: 6 }, () => new BIT(n));
  let depthArr = new Array(n);

  // initialize
  for (let i = 0; i < n; i++) {
    let d = getDepth(nums[i]);
    depthArr[i] = d;
    bits[d].update(i, 1);
  }

  let res = [];

  for (let q of queries) {
    if (q[0] === 1) {
      let [_, l, r, k] = q;

      if (k > 5) {
        res.push(0);
      } else {
        res.push(bits[k].range(l, r));
      }
    } else {
      let [_, idx, val] = q;

      let oldDepth = depthArr[idx];
      let newDepth = getDepth(val);

      bits[oldDepth].update(idx, -1);
      bits[newDepth].update(idx, 1);

      depthArr[idx] = newDepth;
      nums[idx] = val;
    }
  }

  return res;
};
