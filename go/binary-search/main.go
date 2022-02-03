package main

import "fmt"

func search(nums []int, target int) int {
	return binary_search(nums, target, 0, len(nums)-1)
}

func binary_search(nums []int, target int, low int, high int) int {
	if low > high {
		return -1
	}
	middleIndex := int((low + high) / 2)
	middle := nums[middleIndex]
	// fmt.Printf("binarySearch(%v, %v, %v, %v) and middleIndex %v\n", nums, target, low, high, middleIndex)
	if target == middle {
		return middleIndex
	} else if target < middle {
		// recursively search left side
		return binary_search(nums, target, 0, middleIndex-1)
	} else if target > middle {
		// recursively search right side
		return binary_search(nums, target, middleIndex+1, high)
	} else {
		panic(fmt.Sprintf("failed to match any comparison conditional for middle %v and target %v", middle, target))
	}
}
