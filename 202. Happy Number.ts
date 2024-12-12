// Accepted
// Runtime: 2 ms, faster than 66.35%
// Memory Usage: 52.26 MB, less than 38.27%
// function isHappy(n: number): boolean {
//     const seenNumbers = new Map<number, number>()

//     while (true) {
//         let sum = 0
//         for (const num of n.toString()) {
//             sum += Math.pow(parseInt(num), 2)
//         }

//         if (sum === 1) return true

//         if (seenNumbers.get(sum)) {
//             return false
//         } else {
//             seenNumbers.set(sum, 1)
//             n = sum
//         }
//     }
// };

// Accepted
// Runtime: 0 ms, faster than 100%
// Memory Usage: 52.27 MB, less than 38.27%
function isHappy(n: number): boolean {
    if (n < 10) {
        return n == 1 || n == 7
    } else {
        let sum = 0
        for (const num of n.toString()) {
            sum += Math.pow(Number(num), 2)
        }
        return isHappy(sum)
    }
};