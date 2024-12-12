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
// Runtime: 1 ms, faster than 48.16%
// Memory Usage: 56.99 MB, less than 56.35%
function removeElements(head: ListNode | null, val: number): ListNode | null {
    if (!head) return null
    if (head.val == val) return removeElements(head.next, val)
    head.next = removeElements(head.next, val)
    return head
};