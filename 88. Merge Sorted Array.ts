/**
 Do not return anything, modify nums1 in-place instead.
 */

// Accepted
// Runtime: 0 ms, faster than 100%
// Memory Usage: 51.63 MB, less than 45.57%
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i = 0;
    let j = 0;
    let k = 0;

    const temp = nums1.slice(0, m)

    while (i < m || j < n) {
        if (i < m && j < n) {
            if (temp[i] <= nums2[j]) {
                nums1[k] = temp[i]
                i++
            } else {
                nums1[k] = nums2[j]
                j++
            }
        } else if (i < m) {
            nums1[k] = temp[i]
            i++
        } else if (j < n) {
            nums1[k] = nums2[j]
            j++
        }

        k++
    }
};

// Accepted
// Runtime: 0 ms, faster than 100%
// Memory Usage: 51.93 MB, less than 15.23%
// function merge(nums1: number[], m: number, nums2: number[], n: number): void {
//     for (let i = m, j = 0; j < n; i++, j++) {
//         nums1[i] = nums2[j]
//     }

//     nums1.sort((a, b) => a - b);
// };