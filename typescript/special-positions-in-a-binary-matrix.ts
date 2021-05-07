function numSpecial(mat: number[][]): number {
    let specialCount = 0;
    for (let row = 0; row < mat.length; row++) {
        for (let col = 0; col < mat[row].length; col++) {
            if (isSpecial(mat, row, col)) {
                specialCount++;
            }
        }
    }
    return specialCount;
};

function isSpecial(mat: number[][], r: number, c: number): boolean {
    if (mat[r][c] !== 1) {
        return false;
    }

    for (let row = 0; row < mat.length; row++) {
        if (row === r) {
            continue;
        }
        if (mat[row][c] !== 0) {
            return false;
        }
    }

    for (let col = 0; col < mat[0].length; col++) {
        if (col === c) {
            continue;
        }
        if (mat[r][col] !== 0) {
            return false;
        }
    }

    return true;
}
