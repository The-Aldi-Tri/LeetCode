// Accepted
// Runtime: 3 ms, faster than 5.53%
// Memory Usage: 52.02 MB, less than 14.01%
function hammingWeight(n: number): number {
    const bit = n.toString(2)
    let result = 0

    for (let i = 0; i < bit.length; i++) {
        if (bit[i] == "1") {
            result++
        }
    }

    return result
};

// Accepted
// Runtime: 0 ms, faster than 100%
// Memory Usage: 52.21 MB, less than 7.86%
// Bitwise operation
// function hammingWeight(n: number): number {
//     let count = 0
//     while (n !== 0) {
//         if (n & 1) {
//             count++
//         }
//         n = n >>> 1
//     }
//     return count
// };