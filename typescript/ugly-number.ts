function isUgly(n: number): boolean {
    let current = n;
    for (var divisor of [2, 3, 5]) {
        while (current && current % divisor === 0) {
            current = current / divisor;
        }
    }
    return current === 1;
};
