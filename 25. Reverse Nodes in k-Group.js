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
var reverseKGroup = function (head, k) {

    let count = 1;
    let p1 = head;
    let p2 = head.next;
    let start = null
    let h = null;
    let prev = null, list = head

    let total = 0;

    while (list != null) {

        total++
        list = list.next;
    }

    let rounds = Math.floor(total/k)
    let i = 0

    while (i < rounds) {

        start = p1;

        while (count < k && p2 != null) {
            let temp = p2.next
            p2.next = p1
            p1 = p2
            p2 = temp
            count++
        }

        start.next = p2;
        if (h == null) h = p1


        if (prev != null) {
            prev.next = p1
        }
        prev = start


        if (p2 == null) break;

        p1 = p2
        p2 = p2.next;
        count = 1
        i++

    }

    return h

};