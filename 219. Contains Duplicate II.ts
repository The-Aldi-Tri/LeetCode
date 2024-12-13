// Accepted
// Runtime: 18 ms, faster than 69.31%
// Memory Usage: 71.30 MB, less than 30.82%
function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const map = new Map<number, number>()

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            if (Math.abs(map.get(nums[i])! - i) <= k) {
                return true
            }
        }

        map.set(nums[i], i)
    }

    return false
};