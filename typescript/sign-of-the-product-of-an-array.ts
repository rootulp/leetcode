function arraySign(nums: number[]): number {
    return signFunc(product(nums));
};

function signFunc(x: number): number {
    if (x > 0) {
        return 1;
    } else if (x < 0) {
        return -1;
    } else {
        return 0;
    }
}

function product(nums: number[]): number {
    return nums.reduce((a, b) => a * b);
}
