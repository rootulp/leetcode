// Definition for singly-linked list.
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

function appendToList(head: ListNode, nodeToAppend: ListNode): ListNode {
    let current = head;
    while (current.next != null) {
        current = current.next;
    }
    current.next = nodeToAppend
    return head;
}
