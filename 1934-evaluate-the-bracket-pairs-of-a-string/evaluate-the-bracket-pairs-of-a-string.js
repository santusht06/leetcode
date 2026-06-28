/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function (s, knowledge) {
    const map = new Map(knowledge);

    let ans = "";
    let i = 0;

    while (i < s.length) {
        if (s[i] !== "(") {
            ans += s[i];
            i++;
        } else {
            let j = i + 1;
            let key = "";

            while (s[j] !== ")") {
                key += s[j];
                j++;
            }

            ans += map.get(key) || "?";
            i = j + 1;
        }
    }

    return ans;
};