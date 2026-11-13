var reconstructQueue = function(people) {
    people.sort((a, b) => {
        if (b[0] !== a[0]) {
            return b[0] - a[0];
        }
        return a[1] - b[1];
    });
    let res = [];
    for (let i = 0; i < people.length; i++) {
        let curr = people[i];
        res.splice(curr[1], 0, curr);
    }
    return res;
};