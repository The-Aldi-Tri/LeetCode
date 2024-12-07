// Accepted
// Runtime: 57 ms, faster than 13.32%
// Memory Usage: 53.97 MB, less than 14.37%
// function removeDuplicates(nums: number[]): number {
//     if (nums.length === 0) return 0;

//     let k = 1;
//     for (let i = 0; i < nums.length - 1; i++) {
//         if (nums[i] === nums[i + 1]) {
//             nums.splice(i, 1);
//             i--;
//         }
//     }

//     return k;
// };


// Accepted
// Runtime: 1 ms, faster than 68.86%
// Memory Usage: 53.23 MB, less than 42.66%
function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) return 0;

    let k = 1;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] !== nums[i + 1]) {
            nums[k] = nums[i + 1];
            k++;
        }
    }

    return k;
};