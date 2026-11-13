var categorizeBox = function(length, width, height, mass) {
    let isBulky = false;
    if (length >= 10000 || width >= 10000 || height >= 10000 || (BigInt(length) * BigInt(width) * BigInt(height)) >= 1000000000n) {
        isBulky = true;
    }
    let isHeavy = mass >= 100;
    if (isBulky && isHeavy) {
        return "Both";
    }
    if (!isBulky && !isHeavy) {
        return "Neither";
    }
    if (isBulky) {
        return "Bulky";
    }
    return "Heavy";
};