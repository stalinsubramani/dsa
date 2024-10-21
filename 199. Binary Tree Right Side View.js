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
 * @return {number[]}
 */
var rightSideView = function(root) {

    if (root == null) return [];
    let q = [root]
    let res = []

    while(q.length > 0) {

        let len = q.length;
        let node = null
        for (let i = 0; i < len; i++) {

            node = q.shift()
            if (node.left != null)
                q.push(node.left)
            if (node.right != null)
                q.push(node.right)
        }
        res.push(node.val)

    }

    return res
};