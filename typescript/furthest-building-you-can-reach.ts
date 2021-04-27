function furthestBuilding(heights: number[], bricks: number, ladders: number): number {
    const traverseBuildings = new TraverseBuilding(heights, bricks, ladders);
    return traverseBuildings.getFurthestBuilding();
};

class TraverseBuilding {
    constructor(private readonly heights: number[],
                private readonly bricks: number,
                private readonly ladders: number) {}

    public getFurthestBuilding(): number {
        const minHeap = new MinHeap();
        let bricksUsed: number = 0;

        for (let position = 0; position < this.heights.length; position += 1) {
            if (this.heights[position] >= this.heights[position + 1]) {
                continue;
            }
            const jump = this.heights[position + 1] - this.heights[position];

            minHeap.push(jump);
            if (minHeap.length() <= this.ladders) {
                continue;
            } else {
                const smallestJump = minHeap.removeMin()
                bricksUsed += smallestJump;
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
    private heap;

    constructor() {
        this.heap = [null]
    }

    public length(): number {
        return this.heap.length - 1;
    }

    public getMin(): number {
        return this.heap[1]
    }

    public push(node: number) {
        this.heap.push(node)

        if (this.heap.length > 1) {
            let current = this.heap.length - 1
            while (current > 1 && this.heap[Math.floor(current/2)] > this.heap[current]) {
                [this.heap[Math.floor(current/2)], this.heap[current]] = [this.heap[current], this.heap[Math.floor(current/2)]]
                current = Math.floor(current/2)
            }
        }
    }

    public removeMin(): number {
        let smallest = this.heap[1]
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
        } else if (this.heap.length === 2) {
            this.heap.splice(1, 1)
        } else {
            return null
        }
        return smallest
    }
}
