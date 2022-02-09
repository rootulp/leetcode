package main

func rotate(nums []int, k int) {
	rotated := make([]int, len(nums))
	copy(rotated, nums)
	for i := 0; i < k; i += 1 {
		rotated = rotateOnce(rotated)
	}

	// this problem wants nums to be modified in place
	// assigning nums = rotated would modify the pointer to nums
	// therefore, we must copy rotated back into nums
	copy(nums, rotated)
}

func rotateOnce(nums []int) (rotated []int) {
	return append([]int{nums[len(nums)-1]}, nums[0:len(nums)-1]...)
}
