package main

import (
	"reflect"
	"testing"
)

func TestRotate(t *testing.T) {
	nums := []int{1, 2, 3, 4, 5, 6, 7}
	want := []int{5, 6, 7, 1, 2, 3, 4}
	rotate(nums, 3)

	if !reflect.DeepEqual(nums, want) {
		t.Errorf("rotate() got %v want %v", nums, want)
	}
}
