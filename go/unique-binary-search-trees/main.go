package main

// Inspired by brute force implementation on:
// https://leetcode.com/problems/unique-binary-search-trees/discuss/1565543/C%2B%2BPython-5-Easy-Solutions-w-Explanation-or-Optimization-from-Brute-Force-to-DP-to-Catalan-O(N)
func numTrees(n int) (sum int) {
	if n <= 1 {
		return 1
	}

	for i := 1; i <= n; i++ {
		sum += numTrees(i-1) * numTrees(n-i)
	}
	return sum
}
