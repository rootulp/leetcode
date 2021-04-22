function minimumTotal(triangle: number[][]): number {
    return minTriangle(triangle, 0, 0, 0);
};

function minTriangle(triangle: number[][], row: number, col: number, sum: number) {
    // console.log(`minTriangle with row: ${row}, col: ${col}, triangle: ${JSON.stringify(triangle)}`);
    if (row >= triangle.length) {
        return sum;
    }
    sum += triangle[row][col];
    const left = minTriangle(triangle, row + 1, col, sum);
    const right = minTriangle(triangle, row + 1, col + 1, sum);
    return Math.min(left, right);
}
