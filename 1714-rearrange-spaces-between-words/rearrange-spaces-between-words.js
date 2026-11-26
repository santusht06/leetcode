var reorderSpaces = function(text) {
    let words = text.trim().split(/\s+/);
    let totalSpaces = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === ' ') {
            totalSpaces++;
        }
    }
    if (words.length === 1) {
        let spaces = ' '.repeat(totalSpaces);
        return words[0] + spaces;
    }
    let gaps = words.length - 1;
    let spacesPerGap = Math.floor(totalSpaces / gaps);
    let extraSpaces = totalSpaces % gaps;
    let middle = ' '.repeat(spacesPerGap);
    let end = ' '.repeat(extraSpaces);
    return words.join(middle) + end;
};