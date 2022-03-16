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
    const num1 = getNumber(l1)
    const num2 = getNumber(l2)
    console.log(`num1: ${num1}, num2: ${num2}`)
    const result = num1 + num2;
    console.log(`result: ${result}`)
    return linkedList(result)
};

function getNumber(current: ListNode): number {
    let result = ""
    while(current != null) {
        result = current.val.toString() + result
        current = current.next;
    }
    return parseInt(result)
}

function linkedList(num: number): ListNode {
    let head = null;
    let current = null;
    for(let char of reverseString(num.toString())) {
        const next = new ListNode(parseInt(char));
        if (head == null && current == null) {
            head = next
            current = next
        } else {
            current.next = next
            current = next

        }
    }
    return head;
}

 function reverseString(str: string): string {
     return [...str].reverse().join("");
 }
