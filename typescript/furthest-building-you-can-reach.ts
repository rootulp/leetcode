function furthestBuilding(heights: number[], bricks: number, ladders: number): number {
    const traverseBuildings = new TraverseBuildings(heights, bricks, ladders);
    return traverseBuildings.getFurthestBuilding();
};

class TraverseBuildings {

    constructor(private readonly heights: number[], private readonly bricks: number, private readonly ladders: number) {
    }

    public getFurthestBuilding(): number {
        let largestJumps: number[] = [];
        let bricksUsed: number = 0;

        for (let position = 0; position < this.heights.length; position += 1) {
            // console.log(`bricksUsed: ${bricksUsed}, largestJumps: ${largestJumps}, position ${position}`);
            if (this.heights[position] >= this.heights[position + 1]) {
                continue;
            }
            const jump = this.heights[position + 1] - this.heights[position];

            largestJumps.push(jump);
            if (largestJumps.length <= this.ladders) {
                continue;
            } else {
                largestJumps.sort((a, b) => a - b);
                const smallestJump = largestJumps.shift()
                // console.log(`smallestJump: ${smallestJump}, largestJumps: ${largestJumps}`)
                bricksUsed += smallestJump;
                // console.log(`bricksUsed: ${bricksUsed}, largestJumps: ${largestJumps}, position ${position}, smallestJump: ${smallestJump}`);
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
