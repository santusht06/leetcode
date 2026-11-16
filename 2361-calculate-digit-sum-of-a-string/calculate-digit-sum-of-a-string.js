var digitSum = function(s, k) {
    while (s.length > k) {
        let nextStr = "";
        for (let i = 0; i < s.length; i += k) {
            let chunk = s.slice(i, i + k);
            let sum = 0;
            for (let j = 0; j < chunk.length; j++) {
                sum += Number(chunk[j]);
            }
            nextStr += sum;
        }
        s = nextStr;
    }
    return s;
};