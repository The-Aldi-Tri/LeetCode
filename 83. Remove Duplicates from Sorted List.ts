/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// Accepted
// Runtime: 0 ms, faster than 100%
// Memory Usage: 53.60 MB, less than 33.22%
function deleteDuplicates(head: ListNode | null): ListNode | null {
    let current = head

    while (current?.next) {
        if (current.val = current.next.val) {
            current.next = current.next.next
        } else {
            current = current.next
        }
    }

    return head
};