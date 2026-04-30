var canJump = function (nums) {
  let maxReach = 0;

  for (let i = 0; i < nums.length; i++) {
    // ❌ can't even reach this index
    if (i > maxReach) return false;

    // update farthest reach
    maxReach = Math.max(maxReach, i + nums[i]);

    // ✅ early success
    if (maxReach >= nums.length - 1) return true;
  }

  return true;
};
