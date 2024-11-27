//Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
  carry: number = 0
): ListNode | null {
  if (l1 || l2 || carry) {
    const nextL1 = l1 ? l1.next : null;
    const nextL2 = l2 ? l2.next : null;
    const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    return new ListNode(
      sum % 10,
      addTwoNumbers(nextL1, nextL2, Math.floor(sum / 10))
    );
  }
  return null;
}

// Slower but more readable version

// function addTwoNumbers(
//   l1: ListNode | null,
//   l2: ListNode | null
// ): ListNode | null {
//   const l1Arr: number[] = [];
//   while (l1) {
//     l1Arr.push(l1.val);
//     l1 = l1.next;
//   }

//   const l2Arr: number[] = [];
//   while (l2) {
//     l2Arr.push(l2.val);
//     l2 = l2.next;
//   }

//   const sum =
//     BigInt(l1Arr.reverse().join("")) + BigInt(l2Arr.reverse().join(""));

//   const sumArr: number[] = sum
//     .toString()
//     .split("")
//     .map((num) => parseInt(num));

//   let result: ListNode | null = null;

//   for (let i = 0; i < sumArr.length; i++) {
//     if (!result) {
//       result = new ListNode(sumArr[i]);
//     } else {
//       const newNode = new ListNode(sumArr[i], result);
//       result = newNode;
//     }
//   }

//   return result;
// }
