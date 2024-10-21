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
 * @return {number}
 */
var sumNumbers = function (root) {

    if (root == null) return 0

    const totalsum = (node, sum) => {

        if (node && node.left == null && node.right == null) {
            return sum * 10 + node.val
        }

        let leftsum = 0
        if (node && node.left != null ) {
            leftsum = totalsum(node.left, sum * 10 + node.val)
        }

        let rightsum = 0
        if (node && node.right != null) {
            rightsum = totalsum(node.right, sum * 10 + node.val)
        }

        return leftsum + rightsum

    }

    return totalsum(root, 0)

};