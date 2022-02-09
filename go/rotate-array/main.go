package main

func rotate(nums []int, k int) {
	numToShift := len(nums) - (k % len(nums))
	rotated := append(nums[numToShift:], nums[0:numToShift]...)
	copy(nums, rotated)
}
