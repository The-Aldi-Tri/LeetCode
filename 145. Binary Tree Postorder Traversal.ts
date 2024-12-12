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
// Runtime: 1 ms, faster than 10.39%
// Memory Usage: 51.90 MB, less than 11.86%
function postorderTraversal(root: TreeNode | null): number[] {
    if (!root) return [];

    return [
        ...postorderTraversal(root.left),
        ...postorderTraversal(root.right),
        root.val
    ];
};

// Accepted
// Runtime: 0 ms, faster than 100%
// Memory Usage: 51.44 MB, less than 65.25%
// function postorderTraversal(root) {
//     const result = [];
//     const stack = [root];

//     while (stack.length) {
//         const node = stack.pop();

//         if (node) {
//             result.unshift(node.val);

//             // It is important that we stack the left first, then the right 
//             stack.push(node.left, node.right);
//         }
//     }

//     // And at the end we reverse the array (it remains as it is in the preorder solution)
//     return result;
// };