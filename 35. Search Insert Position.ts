// Accepted
// Runtime: 0 ms, faster than 100%
// Memory Usage: 51.96 MB, less than 8.51%
function searchInsert(nums: number[], target: number): number {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) {
            return i;
        }
    }
    return nums.length;
};