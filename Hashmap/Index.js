/**
 * @param {number[]} nums
 * @return {number}
 */
var minJumps = function (nums) {
  const n = nums.length;

  // edge case
  if (n === 1) return 0;

  // ---------------- PRIME CHECK ----------------
  function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) {
        return false;
      }
    }

    return true;
  }

  // ---------------- BUILD PRIME -> INDICES MAP ----------------

  // Example:
  // 2 => [indices having numbers divisible by 2]
  // 3 => [indices having numbers divisible by 3]

  const teleportMap = new Map();

  for (let i = 0; i < n; i++) {
    const value = nums[i];

    // find all prime factors
    let temp = value;

    for (let p = 2; p * p <= temp; p++) {
      if (temp % p === 0) {
        if (!teleportMap.has(p)) {
          teleportMap.set(p, []);
        }

        teleportMap.get(p).push(i);

        while (temp % p === 0) {
          temp /= p;
        }
      }
    }

    // remaining prime
    if (temp > 1) {
      if (!teleportMap.has(temp)) {
        teleportMap.set(temp, []);
      }

      teleportMap.get(temp).push(i);
    }
  }

  // ---------------- BFS ----------------

  const queue = [[0, 0]]; // [index, jumps]
  const visited = new Array(n).fill(false);

  visited[0] = true;

  // avoid reusing same prime teleport repeatedly
  const usedPrime = new Set();

  while (queue.length > 0) {
    const [index, jumps] = queue.shift();

    // reached end
    if (index === n - 1) {
      return jumps;
    }

    // ---------------- ADJACENT MOVES ----------------

    const left = index - 1;
    const right = index + 1;

    if (left >= 0 && !visited[left]) {
      visited[left] = true;
      queue.push([left, jumps + 1]);
    }

    if (right < n && !visited[right]) {
      visited[right] = true;
      queue.push([right, jumps + 1]);
    }

    // ---------------- PRIME TELEPORT ----------------

    const currentValue = nums[index];

    if (isPrime(currentValue) && !usedPrime.has(currentValue)) {
      usedPrime.add(currentValue);

      const nextIndices = teleportMap.get(currentValue) || [];

      for (let nextIndex of nextIndices) {
        if (!visited[nextIndex]) {
          visited[nextIndex] = true;
          queue.push([nextIndex, jumps + 1]);
        }
      }
    }
  }

  return -1;
};

// ---------------- TEST ----------------

console.log(minJumps([1, 2, 4, 6])); // 2
console.log(minJumps([2, 3, 4, 7, 9])); // 2
console.log(minJumps([4, 6, 5, 8])); // 3
