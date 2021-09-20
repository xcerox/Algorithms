// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    const bucket = [];

    for (let index = 0; index < n; index++) {
        bucket.push([]);
    }
    
    let counter = 1;
    let columnStart = 0, columnEnd = n - 1, rowStart = 0, rowEnd = n - 1;

    while (columnStart <= columnEnd && rowStart <= rowEnd) {

        for (let topRow = columnStart; topRow <= columnEnd; topRow++) {
            bucket[rowStart][topRow] = counter;
            counter++;
        }

        rowStart++;

        for (let rightColumn = rowStart; rightColumn <= rowEnd; rightColumn++) {
            bucket[rightColumn][columnEnd] = counter;
            counter++;
        }
        
        columnEnd--;

        for (let bottomRow = columnEnd; bottomRow >= columnStart; bottomRow--) {
            bucket[rowEnd][bottomRow] = counter;
            counter++;
        }

        rowEnd--;

        for (let leftColumn = rowEnd; leftColumn >= rowStart; leftColumn--) {
            bucket[leftColumn][columnStart] = counter;
            counter++;
        }

        columnStart++;
    }

    return bucket;
}


module.exports = matrix;
