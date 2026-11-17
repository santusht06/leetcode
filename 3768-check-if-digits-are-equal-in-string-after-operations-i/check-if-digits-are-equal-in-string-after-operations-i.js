var hasSameDigits = function(s) {
    let arr = s.split('').map(Number);
    while (arr.length > 2) {
        let nextArr = [];
        for (let i = 0; i < arr.length - 1; i++) {
            nextArr.push((arr[i] + arr[i + 1]) % 10);
        }
        arr = nextArr;
    }
    return arr[0] === arr[1];
};