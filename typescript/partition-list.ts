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
    let nodesLessThanX = null;
    const tip = head;
    let current = head;
    while (current.next != null) {
        console.log(`current.next != null`)
        console.log(`nodesLessThanX: ${JSON.stringify(nodesLessThanX)}`)
        if (current.next.val < x ) {
            if (nodesLessThanX == null) {
                nodesLessThanX = current.next;
            } else {
                let lastNodeLessThanX = nodesLessThanX;
                while (lastNodeLessThanX.next != null) {
                    console.log(`lastNodeLessThanX.next != null`)
                    lastNodeLessThanX = lastNodeLessThanX.next
                }
                lastNodeLessThanX.next = current.next;
                lastNodeLessThanX.next.next = null;
            }
            current.next = current.next.next;
        }
        current = current.next;
    }
    console.log(`current: ${JSON.stringify(current)}`)
    console.log(`nodesLessThanX: ${JSON.stringify(nodesLessThanX)}`)
    return new ListNode(3);
};

const test = new ListNode(1, new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(5, new ListNode(2))))))
const result = partition(test, 3)
console.log(`result: ${JSON.stringify(result)}`)
