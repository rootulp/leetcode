package main

import (
	"reflect"
	"testing"
)

type test struct {
	input []int
	want  []int
}

func TestSortedSquares(t *testing.T) {
	tests := []test{
		// {[]int{-4, -1, 0, 3, 10}, []int{0, 1, 9, 16, 100}},
		// {[]int{-7, -3, 2, 3, 11}, []int{4, 9, 9, 49, 121}},
		// {[]int{-5, -3, -2, -1}, []int{1, 4, 9, 25}},
		{[]int{0, 2}, []int{0, 4}},
	}
	for _, test := range tests {
		got := sortedSquares(test.input)
		if !reflect.DeepEqual(got, test.want) {
			t.Errorf("sortedSquares(%v) got %v want %v", test.input, got, test.want)
		}

	}

}
