/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {

    let leftHead = new ListNode() 
    left = leftHead
    let rightHead = new ListNode() 
    right = rightHead

    let ptr = head
    while (ptr != null) {

        if (ptr.val < x) {
            left.next = ptr;
            left = ptr
        }
        else {
            right.next = ptr;
            right = ptr

        }

        ptr = ptr.next
    }

    left.next = rightHead.next
    right.next= null

    return leftHead.next
};