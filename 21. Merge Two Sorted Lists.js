/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {


    let head = new ListNode()
    let prev = head
    while (list1 != null && list2 != null) {

        let node = new ListNode(list1.val)
        prev.next = node
        prev = node
        if (list1.val < list2.val) {
            node.val = list1.val
            list1 = list1.next

        }
        else {
            node.val = list2.val
            list2 = list2.next

        }

    }

    while (list1 != null) {
        let node = new ListNode(list1.val)
        prev.next = node
        prev = node
        list1 = list1.next
    }

    while (list2 != null) {
        let node = new ListNode(list2.val)
        prev.next = node
        prev = node
        list2 = list2.next
    }

    return head.next
};