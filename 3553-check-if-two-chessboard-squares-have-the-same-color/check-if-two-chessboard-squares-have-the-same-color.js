var checkTwoChessboards = function(coordinate1, coordinate2) {
    const getColor = (coord) => {
        const col = coord.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
        const row = Number(coord[1]);
        return (col + row) % 2;
    };
    
    return getColor(coordinate1) === getColor(coordinate2);
};