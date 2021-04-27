function furthestBuilding(heights: number[], bricks: number, ladders: number): number {
    const traverseBuildings = new TraverseBuildings(heights, bricks, ladders);
    return traverseBuildings.getFurthestBuilding();
};

class TraverseBuildings {


    constructor(private readonly heights: number[], private readonly bricks: number, private readonly ladders: number) { }

    public getFurthestBuilding(): number {
        const minHeap = new MinHeap();
        let bricksUsed: number = 0;

        for (let position = 0; position < this.heights.length; position += 1) {
            // console.log(`bricksUsed: ${bricksUsed}, minHeap: ${minHeap.heap}, position ${position}`);
            if (this.heights[position] >= this.heights[position + 1]) {
                continue;
            }
            const jump = this.heights[position + 1] - this.heights[position];

            minHeap.insert(jump);
            if (minHeap.length() <= this.ladders) {
                continue;
            } else {
                const smallestJump = minHeap.remove()
                // console.log(`smallestJump: ${smallestJump}, minHeap: ${minHeap.heap}`)
                bricksUsed += smallestJump;
                // console.log(`bricksUsed: ${bricksUsed}, minHeap: ${minHeap.heap}, position ${position}, smallestJump: ${smallestJump}`);
                if (bricksUsed > this.bricks) {
                    return position;
                } else {
                    continue;
                }
            }
        }

        // We reached the last building
        return this.heights.length - 1;
    }
}

// Inspired by https://blog.bitsrc.io/implementing-heaps-in-javascript-c3fbf1cb2e65
class MinHeap {
    public heap;

    constructor() {
        this.heap = [null]
    }

    public getMin(): number {
        /* Accessing the min element at index 1 in the heap array */
        return this.heap[1]
    }

    public insert(node: number) {

        /* Inserting the new node at the end of the heap array */
        this.heap.push(node)

        /* Finding the correct position for the new node */

        if (this.heap.length > 1) {
            let current = this.heap.length - 1

            /* Traversing up the parent node until the current node (current) is greater than the parent (current/2)*/
            while (current > 1 && this.heap[Math.floor(current/2)] > this.heap[current]) {

                /* Swapping the two nodes by using the ES6 destructuring syntax*/
                [this.heap[Math.floor(current/2)], this.heap[current]] = [this.heap[current], this.heap[Math.floor(current/2)]]
                current = Math.floor(current/2)
            }
        }
    }

    public remove(): number {
        /* Smallest element is at the index 1 in the heap array */
        let smallest = this.heap[1]

        /* When there are more than two elements in the array, we put the right most element at the first position
            and start comparing nodes with the child nodes
        */
        if (this.heap.length > 2) {
            this.heap[1] = this.heap[this.heap.length-1]
            this.heap.splice(this.heap.length - 1)

            if (this.heap.length === 3) {
                if (this.heap[1] > this.heap[2]) {
                    [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]]
                }
                return smallest
            }

            let current = 1
            let leftChildIndex = current * 2
            let rightChildIndex = current * 2 + 1

            while (this.heap[leftChildIndex] &&
                    this.heap[rightChildIndex] &&
                    (this.heap[current] > this.heap[leftChildIndex] ||
                        this.heap[current] > this.heap[rightChildIndex])) {
                if (this.heap[leftChildIndex] < this.heap[rightChildIndex]) {
                    [this.heap[current], this.heap[leftChildIndex]] = [this.heap[leftChildIndex], this.heap[current]]
                    current = leftChildIndex
                } else {
                    [this.heap[current], this.heap[rightChildIndex]] = [this.heap[rightChildIndex], this.heap[current]]
                    current = rightChildIndex
                }

                leftChildIndex = current * 2
                rightChildIndex = current * 2 + 1
            }
        }

        /* If there are only two elements in the array, we directly splice out the first element */

        else if (this.heap.length === 2) {
            this.heap.splice(1, 1)
        } else {
            return null
        }

        return smallest
    }

    public length(): number {
        return this.heap.length - 1;
    }
}
