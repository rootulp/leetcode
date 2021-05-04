function checkPossibility(nums: number[]): boolean {
    let modificationsNeeded = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i-1]) {
            modificationsNeeded++;
            if (i > 1 && i < nums.length - 1 && nums[i - 2] > nums[i] && nums[i + 1] < nums[i - 1]) {
                // impossible to modify nums[i] to create a non-decreasing array
                return false
            }
        }
    }
    return modificationsNeeded <= 1
};
