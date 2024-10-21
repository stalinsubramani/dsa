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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {

    if (root == null) return null

    let result = null
    let pos = 0;
    const kth = (node) => {

        if (node == null) return null;
        kth(node.left)
        pos++
        if (pos == k) {
            result = node.val
        }
        kth(node.right)
    }

    kth(root)

    return result;
};