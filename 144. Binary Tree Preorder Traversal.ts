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
// Memory Usage: 51.76 MB, less than 26.92%
function preorderTraversal(root: TreeNode | null): number[] {
    if (!root) return [];

    return [
        root.val,
        ...preorderTraversal(root.left),
        ...preorderTraversal(root.right)
    ];
};