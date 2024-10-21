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
 * @return {boolean}
 */
var isValidBST = function (root) {

    const valid = (node, low, high) => {

        if (node == null) return true

        if (node.val <= low || node.val >= high) {
            return false
        }

        return (valid(node.left, low, node.val) && valid(node.right, node.val, high))
    }


    return valid(root, -Infinity, Infinity)


};