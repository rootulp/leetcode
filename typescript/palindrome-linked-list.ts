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

 function isPalindrome(head: ListNode | null): boolean {
    const length = getLengthOfLinkedList(head)
    console.log(`Length: ${length}`)
    const midpoint = Math.floor(length / 2)
    console.log(`Midpoint: ${midpoint}`)
    const seen = []
    let current = head;
    for (let i = 0; i < midpoint; i++) {
        seen.push(current.val)
        current = current.next
    }
    console.log(`Seen: ${seen}`)

    if (length % 2 == 1) {
        console.log(`Odd length, skipping ${current.val}`)
        current = current.next
    }
    return doesRemainderOfLinkedListMatchSeen(seen, current)
};

function doesRemainderOfLinkedListMatchSeen(seen: Array<number>, current: ListNode) {
    while (current != null) {
        if (current.val != seen.pop()) {
            return false
        }
        current = current.next
    }
    if (seen.length !== 0) {
        return false
    }
    return true
}

function getLengthOfLinkedList(head: ListNode): number {
    let size = 0
    let current = head

    while (current != null) {
        size += 1
        current = current.next
    }
    return size
}
