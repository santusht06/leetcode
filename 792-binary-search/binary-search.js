var search = function(nums, target) {
    function binary(left, right) {
        if (left > right) return -1;

        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) return mid;

        if (target < nums[mid]) {
            return binary(left, mid - 1);
        }

        return binary(mid + 1, right);
    }

    return binary(0, nums.length - 1);
};