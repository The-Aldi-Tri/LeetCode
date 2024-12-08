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
// Runtime: 2 ms, faster than 50%
// Memory Usage: 56.26 MB, less than 22.28%
function isBalanced(root: TreeNode | null): boolean {
    if (!root) return true;
    if (!root.left && !root.right) return true;

    function getHeight(node: TreeNode | null): number {
        if (!node) return 0;
        return Math.max(getHeight(node.left), getHeight(node.right)) + 1;
    }

    return Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right);
};