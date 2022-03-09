package main

func moveZeroes(nums []int) {
	nextNonZeroIndex := 0
	for i := range nums {
		if nums[i] != 0 {
			nums[nextNonZeroIndex], nums[i] = nums[i], nums[nextNonZeroIndex]
			nextNonZeroIndex++
		}
	}
}
