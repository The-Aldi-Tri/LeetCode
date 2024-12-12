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
// Runtime: 71 ms, faster than 95.41%
// Memory Usage: 59.38 MB, less than 57.25%
function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    let pointerA = headA
    let pointerB = headB

    while (pointerA != pointerB) {
        pointerA = pointerA ? pointerA.next : headB
        pointerB = pointerB ? pointerB.next : headA
    }

    return pointerA
};

// Accepted
// Runtime: 81 ms, faster than 65.95%
// Memory Usage: 61.76 MB, less than 5.07%
// function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
//     const stackA: ListNode[] = []
//     const stackB: ListNode[] = []

//     while (headA != null) {
//         stackA.push(headA)
//         headA = headA.next
//     }
//     while (headB != null) {
//         stackB.push(headB)
//         headB = headB.next
//     }

//     let intersectNode: ListNode | null = null

//     while (stackA.length != 0 && stackB.length != 0) {
//         const nodeA = stackA.pop()
//         const nodeB = stackB.pop()

//         if (nodeA == nodeB) {
//             intersectNode = nodeA!
//         }
//         else { break }
//     }

//     return intersectNode
// };