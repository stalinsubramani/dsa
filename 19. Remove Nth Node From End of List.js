/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {

    let prev = null
    let p1 = head
    let p2 = head

    let i = 1;

    while (i < n) {
        p1 = p1.next
        i++
    }

    while ( p1.next != null ) {

        p1 = p1.next
        prev = p2
        p2 = p2.next
    }

    if (prev == null) {
        head = head.next;
    }
    else {
        prev.next = p2.next
    }

    return head
    
};