// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
   return countVowelsUsinREGEX(str);
}

function countVowelsUsinREGEX(str){
    return (str.match(/[aeiou]/gi) || []).length;
}

function countVowelsUsinArray(str){
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return str.toLowerCase().split('').filter(char => vowels.includes(char)).length;
}

module.exports = vowels;
