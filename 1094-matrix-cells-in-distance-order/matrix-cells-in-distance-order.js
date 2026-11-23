var allCellsDistOrder = function(rows, cols, rCenter, cCenter) {
    let list = [];
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            list.push([i, j]);
        }
    }
    list.sort((a, b) => {
        let distA = Math.abs(a[0] - rCenter) + Math.abs(a[1] - cCenter);
        let distB = Math.abs(b[0] - rCenter) + Math.abs(b[1] - cCenter);
        return distA - distB;
    });
    return list;
};