function leastBricks(wall: number[][]): number {
    // const wallWidth = sum(wall[0]);
    // console.log(`wallWidth ${wallWidth}`);
    let maxEdges = 0;

    const indexToNumEdges = new Map<Number, number>();
    for (let row = 0; row < wall.length; row += 1) {
        let index = 0;

        for (let col = 0; col < wall[row].length - 1; col += 1) {
            index += wall[row][col]
            if (!indexToNumEdges.has(index)) {
                indexToNumEdges.set(index, 0);
            }
            indexToNumEdges.set(index, indexToNumEdges.get(index) + 1);
            maxEdges = Math.max(maxEdges, indexToNumEdges.get(index))
        }
    }
    const result = wall.length - maxEdges;

    console.log(`indexToNumEdges: ${JSON.stringify([...indexToNumEdges.entries()])}`);
    console.log(`wall.length: ${wall.length}`);
    console.log(`maxEdges: ${maxEdges}`);
    console.log(`result: ${result}`)
    return result;
};
