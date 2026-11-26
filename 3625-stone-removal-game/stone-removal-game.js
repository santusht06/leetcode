var canAliceWin = function(n) {
    let count = 10;
    let turn = 0;
    while (n >= count) {
        n -= count;
        count--;
        turn++;
    }
    return turn % 2 !== 0;
};