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
var averageOfLevels = function(root) {
    
    if (root == null) return []

let res = []
let q = [root]

while (q.length > 0) {

    let len = q.length;
    let nodes = []
    let i = 0;
    let val = 0
    while(i < len) {

        let node = q.shift()
        if (node.left)
            q.push(node.left)

        if (node.right)
            q.push(node.right)

        val += node.val
        i++
    }

    res.push(val / len)
}

return res

};