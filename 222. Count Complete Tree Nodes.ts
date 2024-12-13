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
// Runtime: 0 ms, faster than 100%
// Memory Usage: 68.24 MB, less than 88.17%
const countNodes = (root: TreeNode | null): number => {
    if (!root) return 0;
    return countNodes(root.left) + countNodes(root.right) + 1;
};