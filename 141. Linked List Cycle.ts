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
// Runtime: 77 ms, faster than 29.46%
// Memory Usage: 56.46 MB, less than 5.80%
function hasCycle(head: ListNode | null): boolean {
    const map = new Map<ListNode, number>();

    let pos = -1;
    let i = 0;

    while (head) {
        if (map.has(head)) {
            pos = map.get(head)!
            return true;
        }
        map.set(head, i);
        head = head.next;
        i++;
    }

    return false;
};

// Accepted
// Runtime: 74 ms, faster than 43.39%
// Memory Usage: 54.14 MB, less than 57.38%
// function hasCycle(head: ListNode | null): boolean {
//     let slow: ListNode | null = head;
//     let fast: ListNode | null = head;

//     while (fast != null && fast.next != null) {
//         slow = slow!.next;
//         fast = fast.next.next;

//         if (slow === fast) {
//             return true;
//         }
//     }

//     return false;
// };

// Accepted (Destructive because changing LinkedList value)
// Runtime: 71 ms, faster than 57.56%
// Memory Usage: 54.47 MB, less than 40.89%
// function hasCycle(head: ListNode | null): boolean {
//     while (head) {
//         if ((head.val as any) === "X") {
//             return true
//         }
//         head.val = ("X" as any)
//         head = head.next
//     }
//     return false
// };