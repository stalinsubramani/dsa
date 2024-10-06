/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {

    let ptr = head
    let map = new Map()
    let c = 1

    map.set(null, null)
    while(ptr != null) {

        let node = new _Node(c++)
        map.set(ptr, node)
        ptr = ptr.next
    }

    ptr = head
    while (ptr != null) {

        let newNode = map.get(ptr)
        newNode.val = ptr.val
        newNode.next = map.get(ptr.next)
        newNode.random = map.get(ptr.random)
        ptr = ptr.next;
    }

    return map.get(head)
    
};