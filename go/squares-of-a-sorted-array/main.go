package main

import (
	"fmt"
	"math"
)

func sortedSquares(nums []int) (result []int) {
	left := indexOfLastNegative(nums)
	right := indexOfFirstPositive(nums)
	fmt.Printf("left %v, right %v. \n", left, right)
	for len(nums) != len(result) {
		if left < 0 {
			result = append(result, pow(nums[right], 2))
			right += 1
		} else if right >= len(nums) {
			result = append(result, pow(nums[left], 2))
			left -= 1
		} else if pow(nums[left], 2) <= pow(nums[right], 2) {
			result = append(result, pow(nums[left], 2))
			left -= 1
		} else if pow(nums[left], 2) > pow(nums[right], 2) {
			result = append(result, pow(nums[right], 2))
			right += 1
		}
	}
	return result
}

func indexOfLastNegative(nums []int) (index int) {
	for i, num := range nums {
		if num >= 0 {
			return i - 1
		}
	}
	return len(nums) - 1
}

func indexOfFirstPositive(nums []int) (index int) {
	for i, num := range nums {
		if num >= 0 {
			return i
		}
	}
	return len(nums)
}

func pow(a int, b int) (result int) {
	return int(math.Pow(float64(a), float64(b)))
}
