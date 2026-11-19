var canPlaceFlowers = function(flowerbed, n) {
    let i = 0;
    while (i < flowerbed.length && n > 0) {
        if (flowerbed[i] === 0) {
            let emptyLeft = (i === 0) || (flowerbed[i - 1] === 0);
            let emptyRight = (i === flowerbed.length - 1) || (flowerbed[i + 1] === 0);
            if (emptyLeft && emptyRight) {
                flowerbed[i] = 1;
                n--;
                i++;
            }
        }
        i++;
    }
    return n <= 0;
};