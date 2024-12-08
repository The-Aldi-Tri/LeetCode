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
// Runtime: 1 ms, faster than 41.18%
// Memory Usage: 52.29 MB, less than 51.23%
function isSymmetric(root: TreeNode | null): boolean {
    if (!root) return true; // An empty tree is symmetric

    // Helper function to check if two subtrees are mirror images
    function isMirror(t1: TreeNode | null, t2: TreeNode | null): boolean {
        if (!t1 && !t2) return true; // Both nodes are null, so they are mirrors
        if (!t1 || !t2) return false; // One is null, and the other is not, so they are not mirrors
        return (
            t1.val === t2.val && // The values must be equal
            isMirror(t1.left, t2.right) && // Left of t1 matches right of t2
            isMirror(t1.right, t2.left)    // Right of t1 matches left of t2
        );
    }

    // Start by comparing the left and right subtrees of the root
    return isMirror(root.left, root.right);
};