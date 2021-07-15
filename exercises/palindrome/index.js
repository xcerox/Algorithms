// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    return isPalindromeUsingEvery(str);
}

function isPalindromeUsingreverseString(str){
    return str == str.split("").reverse().join("");
}

function isPalindromeCheckingHalf(str) {
    const count = str.length - 1;
    let isPalindrome = true;

    if (count > 1) {
        for (index = 0; index< (count + 1) / 2; ++index) {
            if (str[index] !== str[count - index]) {
                isPalindrome = false;
                break;
            }
        }
    }

    return isPalindrome
}


function isPalindromeUsingEvery(str) {
    return str.split("").every((char, index) => {
        return char == str[str.length - (index + 1)];
    });
}

module.exports = palindrome;
