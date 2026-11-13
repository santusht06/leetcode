var Solution = function(nums) {
    this.map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let val = nums[i];
        if (!this.map.has(val)) {
            this.map.set(val, []);
        }
        this.map.get(val).push(i);
    }
};
Solution.prototype.pick = function(target) {
    let list = this.map.get(target);
    let idx = Math.floor(Math.random() * list.length);
    return list[idx];
};