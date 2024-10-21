/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {

    if (root === null && targetSum == 0) return false

    const pathsum = (node, sum) => {

        if (node && node.left === null && node.right === null && sum + node.val === targetSum ) {
            return true
        }
        if (node === null) return false
        return pathsum(node.left, sum + node.val) || pathsum(node.right, sum + node.val)
    }

    return pathsum(root, 0)
};