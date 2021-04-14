//   Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


function partition(head: ListNode | null, x: number): ListNode | null {
    return new ListNode(3);
};

const test = new ListNode(2, new ListNode(1))
const result = partition(test, 2)
console.log(`result: ${JSON.stringify(result)}`)
