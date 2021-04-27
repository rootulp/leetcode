function furthestBuilding(heights: number[], bricks: number, ladders: number): number {
    const traverseBuildings = new TraverseBuildings(heights);
    return traverseBuildings.getFurthestBuilding(bricks, ladders, 0);
};


class TraverseBuildings {

    private readonly heights: number[];

    constructor(heights: number[]) {
        this.heights = heights;
    }

    public  getFurthestBuilding(bricks: number, ladders: number, position: number): number {
        // console.log(`bricks: ${bricks}, ladders: ${ladders}, position ${position}`);
        if (position === this.heights.length - 1) {
            return position
        }
        if (this.heights[position] >= this.heights[position + 1]) {
            return this.getFurthestBuilding(bricks, ladders, position + 1);
        }

        const bricksNeeded = this.heights[position + 1] - this.heights[position];
        const canUseBricks = bricks >= bricksNeeded;
        const canUseLadders = ladders > 0;
        if (!canUseBricks && !canUseLadders ) {
            return position;
        }

        let advanceWithBricks = 0;
        let advanceWithLadder = 0;
        if (canUseBricks) {
            advanceWithBricks = this.getFurthestBuilding(bricks - bricksNeeded, ladders, position + 1);
        }
        if (canUseLadders) {
            advanceWithLadder = this.getFurthestBuilding(bricks, ladders - 1, position + 1);
        }

        return Math.max(advanceWithBricks, advanceWithLadder);
    }
}
