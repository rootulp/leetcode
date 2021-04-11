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

function deepestLeavesSum(root: TreeNode | null): number {
  const maxDepth = getMaxDepth(root)
  return getSumAtDepth(root, 1, maxDepth)
};

function getMaxDepth(node: TreeNode): number {
    if (node == null) {
        return 0
    }
    return 1 + Math.max(getMaxDepth(node.left), getMaxDepth(node.right))
}

function getSumAtDepth(node: TreeNode, currentDepth: number, maxDepth: number) {
    if (node == null) {
        return 0
    }
    if (currentDepth === maxDepth) {
        return node.val
    } 
    return getSumAtDepth(node.left, currentDepth + 1, maxDepth) + 
           getSumAtDepth(node.right, currentDepth + 1, maxDepth)
}
