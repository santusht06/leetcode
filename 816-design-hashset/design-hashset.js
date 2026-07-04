var MyHashSet = function () {
    this.set = [];
};

MyHashSet.prototype.add = function (key) {
    if (!this.set.includes(key)) {
        this.set.push(key);
    }
};

MyHashSet.prototype.remove = function (key) {
    const index = this.set.indexOf(key);

    if (index !== -1) {
        this.set.splice(index, 1);
    }
};

MyHashSet.prototype.contains = function (key) {
    return this.set.includes(key);
};