package main

import (
	"fmt"
	"testing"
)

func TestTreeNodeString(t *testing.T) {
	root1 := TreeNode{
		Val:   1,
		Left:  nil,
		Right: nil,
	}
	got := root1.String()
	want := "[1,null,null]"
	if got != want {
		t.Errorf("%v.String() got %v want %v", root1, got, want)
	}
}

func TestIsIdentical(t *testing.T) {
	root1 := TreeNode{
		Val:   1,
		Left:  nil,
		Right: nil,
	}
	root2 := TreeNode{
		Val:   3,
		Left:  nil,
		Right: nil,
	}
	got := isIdentical(&root1, &root2)
	want := false
	if got != want {
		t.Errorf("isIdentical(%v, %v) got %v want %v", root1, root2, got, want)
	}
}

func TestMergeTrees(t *testing.T) {
	root1 := TreeNode{
		Val:   1,
		Left:  nil,
		Right: nil,
	}
	root2 := TreeNode{
		Val:   2,
		Left:  nil,
		Right: nil,
	}

	got := mergeTrees(&root1, &root2)
	want := &TreeNode{
		Val:   3,
		Left:  nil,
		Right: nil,
	}
	fmt.Printf("got %v, want %v", got, want)
	if !isIdentical(got, want) {
		t.Errorf("mergeTrees(%v, %v) got %v want %v", root1, root2, got, want)
	}
}
