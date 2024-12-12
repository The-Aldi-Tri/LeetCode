// Accepted
// Runtime: 11 ms, faster than 33.95%
// Memory Usage: 59.07 MB, less than 5.11%
// function singleNumber(nums: number[]): number {
//     const map = new Map<number, number>([...new Set(nums)].map(num => [num, 2]));

//     for (const num of nums) {
//         if (map.has(num)) {
//             map.set(num, map.get(num)! - 1);
//         }
//     }

//     for (const key of map.keys()) {
//         if (map.get(key) === 1) {
//             return key
//         }
//     }
// }

// Accepted
// Runtime: 6 ms, faster than 47.86%
// Memory Usage: 52.34 MB, less than 19.58%
function singleNumber(nums: number[]): number {
    const map = new Map<number, null>();

    for (const num of nums) {
        if (map.has(num)) {
            map.delete(num);
        } else {
            map.set(num, null);
        }
    }
    return [...map.keys()][0];
}

// Accepted
// Runtime: 0 ms, faster than 100%
// Memory Usage: 56.08 MB, less than 83.24%
// function singleNumber(nums: number[]): number {
//     return nums.reduce((prev, val) => prev ^ val, 0) // XOR bitwise operation
// };