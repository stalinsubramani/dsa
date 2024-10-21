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
 */
var BSTIterator = function (root) {

    this.current = root;
    this.stack = []

    while (this.current != null) {
        this.stack.push(this.current)
        this.current = this.current.left
    }
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {

    let top = this.stack.pop()
    let curr = top.right
    while (curr != null) {
        this.stack.push(curr)
        curr = curr.left
    }
    return top.val
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
    return this.stack.length > 0
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */