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
// Runtime: 71 ms, faster than 5.35%
// Memory Usage: 53.70 MB, less than 74.45%
// function maxDepth(root: TreeNode | null): number {
//     if (!root) return 0
//     return traverse(root, 0)
// };

// function traverse(node: TreeNode | null, maxDepth: number): number {
//     if (!node) return maxDepth
//     maxDepth++
//     return Math.max(traverse(node.left, maxDepth), traverse(node.right, maxDepth))
// }

// Accepted
// Runtime: 0 ms, faster than 100%
// Memory Usage: 53.61 MB, less than 81.95%
function maxDepth(root: TreeNode | null): number {
    if (!root) return 0
    let left = maxDepth(root?.left) + 1;
    let right = maxDepth(root?.right) + 1;
    return Math.max(left, right);
};