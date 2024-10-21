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
var isSymmetric = function(root) {

    const check = (left, right) => {

        if (left == null &&  right == null) return true
        if (left == null || right == null) return false

        if (left.val == right.val) {

            return check(left.left, right.right) && check(left.right, right.left)
        }

        return false
    }

    return check(root.left, root.right)
    
};