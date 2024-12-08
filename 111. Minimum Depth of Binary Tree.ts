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
// Runtime: 11 ms, faster than 15.57%
// Memory Usage: 84.75 MB, less than 67.80%
// function minDepth(root: TreeNode | null): number {
//     if (!root) return 0;

//     function minLeafDepth(node: TreeNode, currDepth: number = 0): number {
//         if (node.left && node.right) return Math.min(minLeafDepth(node.left, currDepth + 1), minLeafDepth(node.right, currDepth + 1));
//         if (node.left && !node.right) return minLeafDepth(node.left, currDepth + 1);
//         if (!node.left && node.right) return minLeafDepth(node.right, currDepth + 1);
//         return currDepth + 1;
//     }

//     return minLeafDepth(root);
// };

// Accepted
// Runtime: 5 ms, faster than 74.14%
// Memory Usage: 87.57 MB, less than 25.00%
function minDepth(root: TreeNode | null, currDepth: number = 0): number {
    if (!root) return currDepth;
    if (root.left && root.right) return Math.min(minDepth(root.left, currDepth + 1), minDepth(root.right, currDepth + 1));
    if (root.left && !root.right) return minDepth(root.left, currDepth + 1);
    if (!root.left && root.right) return minDepth(root.right, currDepth + 1);
    if (!root.left && !root.right) return currDepth + 1;

    return minDepth(root);
};