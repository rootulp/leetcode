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
    let valuesLessThanX = [];
    let valuesGreaterThanOrEqualToX = [];
    let current = head;
    while (current != null) {
        if (current.val < x) {
            valuesLessThanX.push(current.val);
        } else {
            valuesGreaterThanOrEqualToX.push(current.val);
        }
        current = current.next;
    }

    return generateLinkedList([...valuesLessThanX, ...valuesGreaterThanOrEqualToX])
};

function generateLinkedList(array: number[]): ListNode | null {
    let head = null;
    while (array.length != 0) {
        const nextNode = new ListNode(array.shift());
        if (head == null) {
            head = nextNode
        } else {
            appendToList(head, nextNode)
        }
    }
    return head;
}

function appendToList(head: ListNode | null, nodeToAppend: ListNode): ListNode {
    if (head == null) {
        return nodeToAppend
    }

    let current = head;
    while (current.next != null) {
        current = current.next;
    }
    current.next = nodeToAppend
    return head;
}

const test = new ListNode(1, new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(5, new ListNode(2))))))
const result = partition(test, 3)
console.log(`result: ${JSON.stringify(result)}`)
