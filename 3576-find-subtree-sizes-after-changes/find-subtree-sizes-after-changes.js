var findSubtreeSizes = function(parent, s) {
    const n = parent.length;
    const tree = Array.from({ length: n }, () => []);
    for (let i = 1; i < n; i++) {
        tree[parent[i]].push(i);
    }
    const newParent = new Int32Array(n);
    for (let i = 0; i < n; i++) {
        newParent[i] = parent[i];
    }
    const lastSeen = new Int32Array(26).fill(-1);
    function dfsFind(curr) {
        const charCode = s.charCodeAt(curr) - 97;
        const prev = lastSeen[charCode];
        if (prev !== -1) {
            newParent[curr] = prev;
        }
        lastSeen[charCode] = curr;
        for (const kid of tree[curr]) {
            dfsFind(kid);
        }
        lastSeen[charCode] = prev;
    }
    dfsFind(0);
    const newTree = Array.from({ length: n }, () => []);
    for (let i = 1; i < n; i++) {
        newTree[newParent[i]].push(i);
    }
    const ans = new Int32Array(n);
    function dfsSize(curr) {
        let total = 1;
        for (const kid of newTree[curr]) {
            total += dfsSize(kid);
        }
        ans[curr] = total;
        return total;
    }
    dfsSize(0);
    return Array.from(ans);
};