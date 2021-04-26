function furthestBuilding(heights: number[], bricks: number, ladders: number): number {
    return getFurthestBuilding(heights, bricks, ladders, 0);
};

function getFurthestBuilding(heights: number[], bricks: number, ladders: number, position: number): number {
    // console.log(`bricks: ${bricks}, ladders: ${ladders}, position ${position}`);
    if (position === heights.length - 1) {
        return position
    }
    if (heights[position] >= heights[position + 1]) {
        return getFurthestBuilding(heights, bricks, ladders, position + 1);
    }

    const bricksNeeded = heights[position + 1] - heights[position];
    const canUseBricks = bricks >= bricksNeeded;
    const canUseLadders = ladders > 0;
    if (!canUseBricks && !canUseLadders ) {
        return position;
    }

    let advanceWithBricks = 0;
    let advanceWithLadder = 0;
    if (canUseBricks) {
        advanceWithBricks = getFurthestBuilding(heights, bricks - bricksNeeded, ladders, position + 1);
    }
    if (canUseLadders) {
        advanceWithLadder = getFurthestBuilding(heights, bricks, ladders - 1, position + 1);
    }

    return Math.max(advanceWithBricks, advanceWithLadder);
}
