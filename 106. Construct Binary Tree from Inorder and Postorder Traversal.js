/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {

    let pi = postorder.length - 1

    let map = new Map()
    for (let i = 0; i < inorder.length; i++) {
        map.set(inorder[i], i)
    }

    const construct = (l, r) => {

        if (l > r) return null;
        let node = new TreeNode(postorder[pi])
        let index = map.get(postorder[pi])
        pi--
        node.right = construct(index + 1, r)
        node.left = construct(l, index - 1)
        return node
    }

    return construct(0, postorder.length - 1)

};