package main

import "fmt"

// Definition for a binary tree node.
type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

// Solution
func mergeTrees(root1 *TreeNode, root2 *TreeNode) *TreeNode {
	if root1 == nil && root2 == nil {
		return nil
	}
	if root1 != nil && root2 == nil {
		return root1
	}
	if root1 == nil && root2 != nil {
		return root2
	}
	return &TreeNode{
		Val:   root1.Val + root2.Val,
		Left:  mergeTrees(root1.Left, root2.Left),
		Right: mergeTrees(root1.Right, root2.Right),
	}
}

func (t *TreeNode) String() (result string) {
	return fmt.Sprintf("[%v]", preorderTraversal(t))
}

func preorderTraversal(node *TreeNode) string {
	if node == nil {
		return "null"
	}
	return fmt.Sprintf("%v,%v,%v", node.Val, preorderTraversal(node.Left), preorderTraversal(node.Right))
}

func isIdentical(root1 *TreeNode, root2 *TreeNode) bool {
	if root1 == nil && root2 == nil {
		return true
	}
	if root1 != nil && root2 == nil {
		return false
	}
	if root1 == nil && root2 != nil {
		return false
	}
	return root1.Val == root2.Val && isIdentical(root1.Left, root2.Left) && isIdentical(root1.Right, root2.Right)
}
