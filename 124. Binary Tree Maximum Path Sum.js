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
var maxPathSum = function (root) {

    let max = Number.MIN_SAFE_INTEGER;
    const maxPath = (node) => {

        if (node == null) return 0

        let leftMax = Math.max(maxPath(node.left), 0)
        let rightMax = Math.max(maxPath(node.right), 0)
        max = Math.max(max, node.val + leftMax + rightMax)
        return Math.max(node.val + leftMax, node.val + rightMax);
    }

    maxPath(root)

    return max

};