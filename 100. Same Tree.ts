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
// Memory Usage: 51.81 MB, less than 32.13%
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    // Base case: if both trees are null, they are the same
    if (!p && !q) return true;

    // If one of the trees is null and the other is not, they are not the same
    if (!p || !q) return false;

    // If the values of the nodes are different, the trees are not the same
    if (p.val !== q.val) return false;

    // Recursively check the left and right subtrees
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};