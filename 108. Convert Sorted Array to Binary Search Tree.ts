/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

// Accepted
// Runtime: 2 ms, faster than 68.20%
// Memory Usage: 54.38 MB, less than 28.57%
function sortedArrayToBST(nums: number[]): TreeNode | null {
    if (nums.length === 0) return null

    const centerIndex = Math.floor(nums.length / 2)
    return new TreeNode(nums[centerIndex],
        sortedArrayToBST(nums.slice(0, centerIndex)),
        sortedArrayToBST(nums.slice(centerIndex + 1))
    )
};