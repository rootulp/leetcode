function isPowerOfThree(n: number): boolean {
    if (n <= 0) { return false; }
    let quotient = n;
    let remainder;

    while (quotient > 1) {
        [quotient, remainder] = divmod(quotient, 3);
        if (remainder !== 0) {
            return false;
        }
    }
    return true;
};

const divmod = (x, y) => [Math.floor(x / y), x % y];
