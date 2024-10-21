/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {

    const bst = (l, r, node) => {

        if (l > r) return null

        let mid = Math.floor((r - l) / 2) + l
        node.val = nums[mid]

        node.left = bst(l, mid - 1, new TreeNode())
        node.right = bst(mid + 1, r, new TreeNode())

        return node
    }

    return bst(0, nums.length - 1,  new TreeNode())
    
};