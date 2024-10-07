/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    let carry = 0;
    let resNode = new ListNode()
    let curr = resNode, prev = null;
    while(l1 != null || l2 != null) {

        let one = l1 != null? l1.val: 0
        let two = l2 != null? l2.val: 0

        let res = one + two + carry
        let added = res % 10
        carry = Math.floor(res / 10)
        curr.val = added
        curr.next = null;


        if (prev != null) {
            prev.next = curr
        }
        
        prev = curr
        curr = new ListNode()
        l1 = l1?.next
        l2 = l2?.next
    }

    if (carry > 0) {
        prev.next = new ListNode(carry, null)
    }

    return resNode
};