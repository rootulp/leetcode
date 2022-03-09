package main

func twoSum(numbers []int, target int) []int {
	left := 0
	right := len(numbers) - 1

	for numbers[left]+numbers[right] != target {
		if numbers[left]+numbers[right] > target {
			right--
		}
		if numbers[left]+numbers[right] < target {
			left++
		}
	}

	return []int{left + 1, right + 1}
}
