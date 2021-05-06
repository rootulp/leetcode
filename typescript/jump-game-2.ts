// Linear solution inspired by https://www.youtube.com/watch?v=vBdo7wtwlXs&t=215s
function jump(nums: number[]): number {
    if (nums.length <= 1) {
        return 0;
    }

    let jumps = 1;
    let stairs = nums[0];
    let ladder = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (i === nums.length - 1) {
            return jumps;
        }
        if (i + nums[i] > ladder) {
            ladder = i + nums[i];
        }
        stairs--;
        if (stairs === 0) {
            jumps++;
            stairs = ladder - i;
        }
    }
    return jumps;
};
