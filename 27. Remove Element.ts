// Accepted
// Runtime: 0 ms, faster than 100%
// Memory Usage: 51.02 MB, less than 95.23%
function removeElement(nums: number[], val: number): number {
    if (nums.length === 0) return 0;

    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++
        }
    }

    return k;
};