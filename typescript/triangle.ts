function minimumTotal(triangle: number[][]): number {
    const minTriangle = constructMinTriangle(triangle);
    return minTriangle[0][0];
};

function constructMinTriangle(triangle: number[][]) {
    for (let row = triangle.length - 2; row >= 0; row -= 1) {
        const rowBelow = triangle[row + 1];
        for (let col = 0; col < triangle[row].length; col += 1) {
            triangle[row][col] += Math.min(rowBelow[col], rowBelow[col + 1])
        }
    }
    // console.log(JSON.stringify(triangle))
    return triangle;
}
