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
var getMinimumDifference = function (root) {

    if (root == null) return 0
    let res = []
    const min = (node) => {

        if (node == null) {
            return null
        }

        min(node.left)
        res.push(node.val)
        min(node.right)
    }
    min(root)


    let prev = res[0]
    let minimumDiff = Number.MAX_SAFE_INTEGER;

    for (let i = 1; i < res.length; i++) {

        let diff = Math.abs(res[i] - prev)
        prev = res[i]
        minimumDiff = Math.min(minimumDiff, diff)
    }


    return minimumDiff
};