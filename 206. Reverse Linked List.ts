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
// Runtime: 2 ms, faster than 7.43%
// Memory Usage: 52.56 MB, less than 75.61%
// function reverseList(head: ListNode | null): ListNode | null {
//     if (!head) return null

//     let reverse: ListNode | null = null
//     while (head) {
//         if (!reverse) {
//             reverse = new ListNode(head.val)
//         } else {
//             const newNode: ListNode = new ListNode(head.val, reverse)
//             reverse = newNode
//         }

//         head = head.next
//     }

//     return reverse
// };

// Accepted
// Runtime: 0 ms, faster than 100%
// Memory Usage: 53.04 MB, less than 29.93%
function reverseList(head: ListNode | null): ListNode | null {
    let reverse: ListNode | null = null;

    while (head) {
        reverse = new ListNode(head.val, reverse);
        head = head.next;
    }

    return reverse;
};

// Accepted
// Runtime: 2 ms, faster than 7.43%
// Memory Usage: 53.61 MB, less than 5.65%
// function reverseList(head: ListNode | null): ListNode | null {
//     if (!head) return null

//     function reverse(current: ListNode, previous: ListNode | null): ListNode | null {
//         const reverseCurrent = new ListNode(current.val, previous)
//         if (!current.next) return reverseCurrent
//         return reverse(current.next, reverseCurrent)
//     }

//     return reverse(head, null)
// };