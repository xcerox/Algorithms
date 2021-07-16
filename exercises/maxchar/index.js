// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const charsCounted = {};
    let maxChar = "", maxCount = 0;

    for (const char of str) {
        charsCounted[char] = charsCounted[char] + 1 || 1;
    }

    for (const key in charsCounted) {
        if (charsCounted[key] > maxCount) {
            maxChar = key;
            maxCount = charsCounted[key];
        }
    }

    return maxChar;
}

module.exports = maxChar;
