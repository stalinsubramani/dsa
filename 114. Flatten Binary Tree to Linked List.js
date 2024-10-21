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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {


    let flatten = (node) => {

        if (node == null) return null

        let left = flatten(node.left)
        let right = flatten(node.right)

        if (left) {
            left.right = node.right
            node.right = node.left
            node.left = null
        }

        if (right != null) return right
        if (left != null) return left

        return node;

    }

    flatten(root)

    return root
};