// Accepted
// Runtime: 1 ms, faster than 80.61%
// Memory Usage: 53.69 MB, less than 59.21%
// function titleToNumber(columnTitle: string): number {
//     let number = 0
//     for (let index = columnTitle.length - 1; index >= 0; index--) {
//         number += (columnTitle.charCodeAt(index) - 64) * Math.pow(26, columnTitle.length - 1 - index)
//     }
//     return number
// };

// Accepted
// Runtime: 0 ms, faster than 100%
// Memory Usage: 53.71 MB, less than 50.00%
function titleToNumber(columnTitle: string): number {
    let number = 0
    for (let i = columnTitle.length - 1, j = 0; i >= 0; i--, j++) {
        number += (columnTitle.charCodeAt(i) - 64) * Math.pow(26, j)
    }
    return number
};