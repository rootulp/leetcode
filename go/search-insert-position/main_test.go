package searchinsertposition

import "testing"

type test struct {
	nums   []int
	target int
	want   int
}

func TestSearchInsert(t *testing.T) {
	tests := []test{
		{[]int{1, 3, 5, 6}, 5, 2},
		{[]int{1, 3, 5, 6}, 2, 1},
		{[]int{1, 3, 5, 6}, 7, 4},
	}

	for _, test := range tests {
		got := searchInsert(test.nums, test.target)
		if got != test.want {
			t.Errorf("searchInsert(%v, %v) got %v want %v", test.nums, test.target, got, test.want)
		}
	}
}
