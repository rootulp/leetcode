function furthestBuilding(heights: number[], bricks: number, ladders: number): number {
    const traverseBuildings = new TraverseBuildings(heights);
    return traverseBuildings.getFurthestBuilding({bricks, ladders, position: 0});
};

interface State {
    bricks: number,
    ladders: number,
    position: number
}


class TraverseBuildings {

    private readonly heights: number[];
    private seen: Map<State, number> = new Map();

    constructor(heights: number[]) {
        this.heights = heights;
    }

    public getFurthestBuilding(state: State): number {
        const { bricks, ladders, position } = state;
        // console.log(`bricks: ${bricks}, ladders: ${ladders}, position ${position}`);

        if (this.seen.has(state)) {
            return this.seen.get(state);
        }
        if (position === this.heights.length - 1) {
            return position
        }
        if (this.heights[position] >= this.heights[position + 1]) {
            return this.getFurthestBuilding({bricks, ladders, position: position + 1});
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
            advanceWithBricks = this.getFurthestBuilding({bricks: bricks - bricksNeeded, ladders, position: position + 1});
        }
        if (canUseLadders) {
            advanceWithLadder = this.getFurthestBuilding({bricks, ladders: ladders - 1, position: position + 1});
        }

        const furthestBuilding = Math.max(advanceWithBricks, advanceWithLadder);
        this.seen.set(state, furthestBuilding);

        return furthestBuilding;
    }
}
