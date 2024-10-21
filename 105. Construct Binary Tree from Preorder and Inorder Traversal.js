/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {

    let pi = 0

    let map = new Map()
    for (let i = 0; i < inorder.length; i++) {
        map.set(inorder[i], i)
    }

    const construct = (l, r) => {

        if (l > r) return null;
        let node = new TreeNode(preorder[pi])
        let index = map.get(preorder[pi])
        pi++

        node.left = construct(l, index - 1)
        node.right = construct(index + 1, r)
        return node
    }

    return construct(0, preorder.length - 1)

};