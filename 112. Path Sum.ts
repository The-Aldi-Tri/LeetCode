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
// Runtime: 1 ms, faster than 55.79%
// Memory Usage: 55.01 MB, less than 12.52%
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (!root) return false;
    if (root.left && root.right) return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
    if (root.left && !root.right) return hasPathSum(root.left, targetSum - root.val)
    if (!root.left && root.right) return hasPathSum(root.right, targetSum - root.val);
    return targetSum - root.val === 0;
};