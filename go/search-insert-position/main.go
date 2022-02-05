package searchinsertposition

import "fmt"

// searchInsert returns the index of target value in nums. If target does not
// exist in nums, returns the index at which target should be inserted to
// preserve sorted order. nums must be provided in sorted order.
func searchInsert(nums []int, target int) (insertIndex int) {
	return binarySearchInsert(nums, target, 0, len(nums)-1)
}

func binarySearchInsert(nums []int, target int, low int, high int) (insertIndex int) {
	fmt.Printf("binarySearchInsert(%v, %v, %v, %v)\n", nums, target, low, high)
	if low >= high {
		fmt.Printf("low >= high\n")
		if target == nums[low] {
			return low
		} else if target < nums[low] {
			return low
		} else if target > nums[low] {
			return low + 1
		}
	}
	middle := int((low + high) / 2)
	middleVal := nums[middle]
	if target == middleVal {
		return middle
	} else if target < middleVal {
		return binarySearchInsert(nums, target, low, middle-1)
	} else {
		return binarySearchInsert(nums, target, middle+1, high)
	}
}
