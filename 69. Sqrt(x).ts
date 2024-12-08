// Accepted
// Runtime: 25 ms, faster than 19.09%
// Memory Usage: 53.84 MB, less than 24.81%
// function mySqrt(x: number): number {
//     if (x === 0) return 0

//     let i = 1
//     while (i * i <= x) {
//         i++
//     }

//     return (i - 1)
// };

// Accepted
// Runtime: 1 ms, faster than 81.98%
// Memory Usage: 53.96 MB, less than 16.35%
function mySqrt(x: number): number {
    let low = 0;
    let high = x;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2)

        if (mid * mid <= x) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }

    return high
};