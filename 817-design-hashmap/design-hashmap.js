var MyHashMap = function () {
    this.Hashmap = [];
};

MyHashMap.prototype.put = function(key, value) {
    for (let pair of this.Hashmap) {
        if (pair[0] === key) {
            pair[1] = value;
            return;
        }
    }

    this.Hashmap.push([key, value]);
};

MyHashMap.prototype.get = function(key) {
    for (let pair of this.Hashmap) {
        if (pair[0] === key) {
            return pair[1];
        }
    }

    return -1;
};

MyHashMap.prototype.remove = function(key) {
    for (let i = 0; i < this.Hashmap.length; i++) {
        if (this.Hashmap[i][0] === key) {
            this.Hashmap.splice(i, 1);
            return;
        }
    }
};