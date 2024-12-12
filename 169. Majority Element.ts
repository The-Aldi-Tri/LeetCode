// Accepted
// Runtime: 0 ms, faster than 100%
// Memory Usage: 53.97 MB, less than 56.33%
function majorityElement(nums: number[]): number {
    // Boyer–Moore majority vote algorithm

    // Finding majority candidate
    let candidate = -1
    let count = 0

    for (const num of nums) {
        if (count == 0) {
            candidate = num
            count++
        } else {
            candidate == num ? count++ : count--
        }
    }

    // Check if majority candidate occurs more than n/2 times
    // Skip if a majority element is confirmed to be present
    // count = 0
    // for (const num of nums) {
    //     candidate == num ? count++ : count--
    // }
    // candidate = count > nums.length / 2 ? candidate : -1

    return candidate
};