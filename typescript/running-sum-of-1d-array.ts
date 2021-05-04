function runningSum(nums: number[]): number[] {
    let sums = [];
    for (let i = 0; i < nums.length; i++) {
        const lastSum = sums.length > 0 ? sums[sums.length - 1] : 0;
        const nextSum = nums[i] + lastSum
        sums.push(nextSum)
    }
    return sums;
};
