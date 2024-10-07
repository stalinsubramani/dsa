/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {

    let l = 1, r = 1
    let list = head, ptr1 = null, prt2 = null, lptr = null;
    let prev = null
    //travese to left counter
    while (list != null && l != left) {
        l++
        prev = list
        list = list.next
    }

    r = l
    r++

    ptr1 = lptr = list
    ptr2 = list.next
    list = list.next

    while (r <= right) {

        let temp = ptr2.next
        ptr2.next = ptr1
        ptr1 = ptr2
        ptr2 = temp
        r++
    }

    lptr.next = ptr2;
    if (prev != null)
        prev.next = ptr1

    if (left == 1) return ptr1 
    return head
};