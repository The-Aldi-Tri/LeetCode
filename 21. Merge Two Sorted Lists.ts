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
// Runtime: 4 ms, faster than 8.57%
// Memory Usage: 53.22 MB, less than 15.05%
// function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
//     let head = new ListNode(0);
//     let current = head;

//     while (list1 || list2) {
//         if (list1 && list2) {
//             if (list1.val < list2.val) {
//                 current.next = new ListNode(list1.val);
//                 list1 = list1.next;
//             } else {
//                 current.next = new ListNode(list2.val);
//                 list2 = list2.next;
//             }
//         } else if (list1) {
//             current.next = new ListNode(list1.val);
//             list1 = list1.next;
//         } else if (list2) {
//             current.next = new ListNode(list2.val);
//             list2 = list2.next;
//         }
//         current = current.next!;
//     }

//     return head.next;
// }

// Accepted
// Runtime: 0 ms, faster than 100%
// Memory Usage: 52.67 MB, less than 61.95%
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (!list1) return list2;
    if (!list2) return list1;

    let merged: ListNode;
    if (list1.val < list2.val) {
        merged = new ListNode(list1.val);
        merged.next = mergeTwoLists(list1.next, list2);
    } else {
        merged = new ListNode(list2.val);
        merged.next = mergeTwoLists(list1, list2.next);
    }
    return merged;
}