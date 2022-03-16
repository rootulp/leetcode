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
    return addWithCarry(l1, l2, 0)
};

function addWithCarry(l1: ListNode | null, l2: ListNode | null, carry: number): ListNode | null {
    const v1 = l1?.val ?? 0;
    const v2 = l2?.val ?? 0;
    const sum = v1 + v2 + carry;
    const val = sum % 10;
    const nextCarry = Math.floor(sum / 10)

    if (l1 || l2 || carry) {
        return new ListNode(
            val,
            addWithCarry(l1?.next ?? null, l2?.next ?? null, nextCarry),
        )
    }
    return null;
}
