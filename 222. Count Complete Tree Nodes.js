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
var countNodes = function (root) {

    if (root == null) return 0

    let getHeight = (node) => {

        let height = 0

        while(node != null) {
            height++
            node = node.left
        }

        return height
    }

    let leftLevel = getHeight(root.left)
    let rightLevel = getHeight(root.right)

    if (leftLevel == rightLevel) {

        return  (1 << leftLevel) + countNodes(root.right)
    }
    else {

        return (1 << rightLevel) + countNodes(root.left)
    }
 
};