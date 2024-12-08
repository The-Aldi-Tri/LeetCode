//Definition for a binary tree node.
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

// Accepted
// Runtime: 0 ms, faster than 100%
// Memory Usage: 51.48 MB, less than 67.46%
function inorderTraversal(root: TreeNode | null): number[] {
    if (!root) return [];

    const result: number[] = []

    function traverseInOrder(node: TreeNode) {
        if (node.left) traverseInOrder(node.left)
        result.push(node.val)
        if (node.right) traverseInOrder(node.right)
    }

    traverseInOrder(root)

    return result
};