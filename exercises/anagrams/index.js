// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    mapA = cleanAndSortString(stringA);
    mapB = cleanAndSortString(stringB);

    return mapA == mapB;
}

function areAnagramsManual(stringA, stringB) {
    const mapA = buildCharsMap(stringA);
    const mapB = buildCharsMap(stringB);

    let isAnagram = Object.keys(mapA).length == Object.keys(mapB).length;

    if (isAnagram) {
        for (const prop in mapA) {
            if (mapA[prop] != [mapB[prop]]) {
                isAnagram = false;
                break;
            }
        }
    }

    return isAnagram;
}


function buildCharsMap(str){
    const map = {};

    buildArray(str).forEach(item => map[item] = map[item] + 1 || 1 );

    return map;
}

function buildArray(str) {
    return str.replace(/[^\w]/g, "").toLowerCase().split("");
}

function cleanAndSortString(str) {
    return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join(); 
}

module.exports = anagrams;
