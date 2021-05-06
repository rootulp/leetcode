function jump(nums: number[]): number {
    return jumpsWithPosition(nums, 0, 0);
};

function jumpsWithPosition(nums: number[], position: number, jumps: number): number {
    if (position === nums.length - 1) {
        return jumps;
    }
    let possibleJumps = [];
    for (let i = 1; i <= nums[position]; i++) {
        const jump = jumpsWithPosition(nums, position + i, jumps + 1);
        possibleJumps.push(jump);
    }
    return Math.min(...possibleJumps);
}
