package main

import (
	"fmt"
	"math"
)

func sortedSquares(nums []int) (result []int) {
	left := indexOfLastNegative(nums)
	right := indexOfFirstPositive(nums)
	for left >= 0 || right < len(nums)-1 {
		fmt.Printf("left %v right %v\n", left, right)
		leftSquared := pow(nums[left], 2)
		rightSquared := pow(nums[right], 2)
		if left == 0 {
			fmt.Printf("left is 0, adding rightSquared %v\n", rightSquared)
			result = append(result, rightSquared)
			right += 1
		} else if right == len(nums)-1 {
			fmt.Printf("right is %v, adding leftSquared %v\n", len(nums)-1, leftSquared)
			result = append(result, leftSquared)
			left -= 1
		} else if leftSquared <= rightSquared {
			fmt.Printf("leftSquared %v <= rightSquared %v\n", leftSquared, rightSquared)
			result = append(result, leftSquared)
			left -= 1
		} else if leftSquared > rightSquared {
			fmt.Printf("leftSquared %v > rightSquared %v\n", leftSquared, rightSquared)
			result = append(result, rightSquared)
			right += 1
		}
	}
	return result
}

func indexOfLastNegative(nums []int) (index int) {
	for i, num := range nums {
		if num >= 0 {
			if i == 0 {
				return 0
			} else {
				return i - 1
			}
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
	return len(nums) - 1
}

func pow(a int, b int) (result int) {
	return int(math.Pow(float64(a), float64(b)))
}
