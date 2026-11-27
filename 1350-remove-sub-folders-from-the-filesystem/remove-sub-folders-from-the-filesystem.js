var removeSubfolders = function(folder) {
    folder.sort();
    let ans = [];
    let prev = "";
    for (let i = 0; i < folder.length; i++) {
        let curr = folder[i];
        if (prev === "" || !curr.startsWith(prev + "/")) {
            ans.push(curr);
            prev = curr;
        }
    }
    return ans;
};