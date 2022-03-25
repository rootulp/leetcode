package main

import "math"

//   Definition for a binary tree node.
type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func isValidBST(root *TreeNode) bool {
	if root == nil {
		return true
	}

	if root.Left != nil && isNodeGreaterThan(root.Left, root.Val) {
		return false
	}

	if root.Right != nil && isNodeLessThan(root.Right, root.Val) {
		return false
	}

	return isValidBST(root.Left) && isValidBST(root.Right)
}

func isNodeGreaterThan(node *TreeNode, val int) bool {
	if node == nil {
		return false
	}
	if node.Val >= val {
		return true
	}
	return isNodeGreaterThan(node.Left, val) || isNodeGreaterThan(node.Right, val)
}

func isNodeLessThan(node *TreeNode, val int) bool {
	if node == nil {
		return false
	}
	if node.Val <= val {
		return true
	}
	return isNodeLessThan(node.Left, val) || isNodeLessThan(node.Right, val)
}

func minInt(a int, b int) int {
	return int(math.Min(float64(a), float64(b)))
}

func maxInt(a int, b int) int {
	return int(math.Max(float64(a), float64(b)))
}
