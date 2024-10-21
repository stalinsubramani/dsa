/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {

    let inorder = (p, q) => {

        if (p == null && q == null) return true
        if (p == null || q == null) return false

        if (p.val == q.val) {
            return (inorder(p.left, q.left) && inorder(p.right, q.right))
        }

        return false
    }

    return inorder(p, q)
    
};