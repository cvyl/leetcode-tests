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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const fakeHead = new ListNode(0);               // dummy head
    let current = fakeHead;                         // pointer to the current node
    let carry = 0;                                  // carry value

    while (l1 || l2 || carry) {                     // loop until l1, l2 and carry are null
        const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;    // sum of l1, l2 and carry
        l1 = l1?.next;                              // move to the next node
        l2 = l2?.next;                              // move to the next node
        carry = Math.floor(sum / 10);               // calculate the carry
        current.next = new ListNode(sum % 10);      // create a new node with the remainder of the sum
        current = current.next;                     // move to the next node
    }
    return fakeHead.next;                           // return the next node of the dummy head
};