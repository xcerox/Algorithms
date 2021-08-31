// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    printPyramidUsingRecursion(n);
}

function printPyramidUsingRecursion(n, row = 0, level = '', columns = n*2-1, midPoint = Math.floor(columns/2)) {
    if (n != row) {
        if (columns == level.length){
            console.log(level);
            printPyramidUsingRecursion(n, ++row, '', columns, midPoint);
        } else {
            level += midPoint - row <= level.length && midPoint + row >=  level.length ? '#': ' ';
            printPyramidUsingRecursion(n, row, level, columns, midPoint);
        }
    }
}

function printPyramidUsingFor(n) {
    const columns = n*2-1;
    const midPoint = Math.floor((columns/2))
    let level;
    for (let row = 0; row < n; row++) {
        level = '';
        for (let column = 0; column < columns; column++) {
            level += midPoint - row <= column && midPoint + row >= column ? '#': ' ';
        }

        console.log(level);
    }
}

module.exports = pyramid;
