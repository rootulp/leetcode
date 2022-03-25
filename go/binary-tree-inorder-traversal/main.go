package main

//   Definition for a binary tree node.
type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func inorderTraversal(root *TreeNode) []int {
	return traverse(root, []int{})
}

func traverse(node *TreeNode, visited []int) []int {
	if node == nil {
		return visited
	}
	if node.Left != nil {
		visited = traverse(node.Left, visited)
	}
	visited = append(visited, node.Val)
	if node.Right != nil {
		visited = traverse(node.Right, visited)
	}
	return visited
}
