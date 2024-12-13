// Accepted
// Runtime: 6 ms, faster than 97.94%
// Memory Usage: 65.79 MB, less than 11.94%
function containsDuplicate(nums: number[]): boolean {
    const map = new Map<number, number>()

    for (const num of nums) {
        if (map.has(num)) return true
        map.set(num, 1)
    }

    return false
};

// Accepted
// Runtime: 11 ms, faster than 76.73%
// Memory Usage: 61.50 MB, less than 90.13%
// function containsDuplicate(nums: number[]): boolean {
//     return nums.length !== new Set(nums).size
// };