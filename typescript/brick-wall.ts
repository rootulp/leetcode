function leastBricks(wall: number[][]): number {
    const indexToNumEdges = new Map<Number, number>();
    for (let row = 0; row < wall.length; row += 1) {
        let index = 0;

        for (let col = 0; col < wall[row].length - 1; col += 1) {
            index += wall[row][col]
            if (!indexToNumEdges.has(index)) {
                indexToNumEdges.set(index, 0);
            }
            const incrementedEdges = indexToNumEdges.get(index) + 1
            indexToNumEdges.set(index, incrementedEdges);
        }
    }

    // Include default value of 0 in case no edges were added to indexToNumEdges
    const maxEdges = Math.max(0, ...indexToNumEdges.values())
    return wall.length - maxEdges;
};
