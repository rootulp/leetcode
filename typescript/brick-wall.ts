function leastBricks(wall: number[][]): number {
    const wallWidth = sum(wall[0]);
    // console.log(`wallWidth ${wallWidth}`);

    let bricksIntersected = [];
    for (let i = 1; i < wallWidth; i++) {
        bricksIntersected.push(bricksIntersectedBy(wall, i));
    }

    // console.log(`bricksIntersected: ${bricksIntersected}`);
    return Math.min(...bricksIntersected)
};

function bricksIntersectedBy(wall: number[][], index: number): number {
    let sum = 0;
    for (let row = 0; row < wall.length; row += 1) {
        if (doesIntersectRow(wall[row], index)) {
            sum += 1;
        }
    }
    return sum;
}

function doesIntersectRow(row: number[], index: number): boolean {
    const edges = getEdges(row)
    // console.log(`row: ${row}, edges: ${edges}`)
    return !edges.includes(index);
}

function getEdges(row: number[]): number[] {
    let edges = []
    for (let i = 0; i < row.length; i++) {
        const currentWallWidth = sum(row.slice(0, i))
        edges.push(currentWallWidth + row[i])
    }
    return edges;
}

function sum(array: number[]): number {
    if (array.length === 0 ) {
        return 0;
    }
    return array.reduce((x, y) => x + y);
}
