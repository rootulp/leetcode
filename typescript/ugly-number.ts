function isUgly(n: number): boolean {
    if (n <= 0) {
        return false;
    }
    const factors = primeFactors(n);
    const uniqueFactors = new Set(factors);
    const uglyFactors = new Set([2, 3, 5]);
    // console.log(uniqueFactors);
    return isSuperset(uglyFactors, uniqueFactors);
};

function primeFactors(n: number): number[] {
    let current = n;
    let factors = [];
    while (current > 1) {
        for (let i = 2; i <= current; i++) {
            if (current % i === 0 && isPrime(i)) {
                factors.push(i);
                current = current / i;
                break;
            }
        }
    }
    return factors;
}

function isPrime(n: number): boolean {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function isSuperset(set: Set<number>, subset: Set<number>): boolean {
    for (let elem of subset) {
        if (!set.has(elem)) {
            return false
        }
    }
    return true
}

// console.log(primeFactors(20));
// console.log(primeFactors(12));
