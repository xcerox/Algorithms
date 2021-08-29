// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    printStepsUsingFor(n);
}

function printStepsUsingFor(n) {
    let stair;
    for (let row = 0; row < n; row++) {
        stair = '';

        for (let column = 0; column < n; column++) {
            stair += column <= row ? '#': ' ';
        }

        console.log(stair);
    }
}

function printStepsUsingRecursion(n, row = 0, stair = '') {
    if (n != row) {
        if (n == stair.length){
            console.log(stair);
            printStepsUsingRecursion(n, ++row, '');
        } else {
            stair += stair.length <= row ? '#': ' ';
            printStepsUsingRecursion(n, row, stair);
        }
    }
}

module.exports = steps;
