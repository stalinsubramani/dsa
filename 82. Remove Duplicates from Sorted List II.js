/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {

    if (head == null) return null

    let ptr = head
    let foundDuplicate = false, prev = null
    while(ptr.next != null) {

        if (ptr.val == ptr.next.val) {
            foundDuplicate = true
            ptr.next = ptr.next.next
        }
        else {
            if (foundDuplicate) {
                ptr = ptr.next
                if (prev != null)
                    prev.next = ptr
                else {
                    head = head.next
                }
                foundDuplicate = false

            }
            else {
                prev = ptr
                ptr = ptr.next
            }
            
        }
    }

    if (foundDuplicate) {

        if (head == ptr) {
            head = head.next
        }
        else {
            prev.next = ptr.next
        }
    } 

    return head
    
};