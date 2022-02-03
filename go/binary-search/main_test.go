package main

import "testing"

func TestSearch(t *testing.T) {
	nums := []int{-1, 0, 3, 5, 9, 12}
	target := 9
	got := search(nums, target)
	want := 4
	if got != want {
		t.Errorf("search(%v, %v) got %v want %v", nums, target, got, want)
	}
}

func TestSearchWithTargetThatDoesNotExist(t *testing.T) {
	nums := []int{-1, 0, 3, 5, 9, 12}
	target := 2
	got := search(nums, target)
	want := -1
	if got != want {
		t.Errorf("search(%v, %v) got %v want %v", nums, target, got, want)
	}
}
