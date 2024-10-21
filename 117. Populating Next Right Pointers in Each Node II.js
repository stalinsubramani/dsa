/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function (root) {


    if (root == null) return null
    let q = [root]

    while (q.length != 0) {

        let len = q.length;
        let i = 0;
        let prev = null

        for (let i = 0; i < len; i++) {

            let curr = q.shift()
            if (curr.left)
                q.push(curr.left)
            if (curr.right)
                q.push(curr.right)

            if (prev != null) {
                prev.next = curr
            }

            prev = curr
        }

        prev.next = null
    }

    return root
};