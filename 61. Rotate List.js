/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {

    if (head == null) return null

    let curr = head
    let prev = head


    let totalNode = 0

    while(curr != null) {
        totalNode++
        curr = curr.next
    }

    if (totalNode <= 1) return head

    k = k % totalNode
    curr = head



    let i = 0;
    while(i < k) {

        if (curr.next == null) 
            return head
        curr = curr.next;
        i++
    }


    while(curr.next != null) {

        prev = prev.next
        curr = curr.next
    }


    curr.next = head
    head = prev.next
    prev.next = null

    return head
};