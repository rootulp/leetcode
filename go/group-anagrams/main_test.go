package main

import (
	"reflect"
	"testing"
)

type test struct {
	input []string
	want  [][]string
}

func TestGroupAnagrams(t *testing.T) {
	tests := []test{
		{[]string{"eat", "tea", "tan", "ate", "nat", "bat"}, [][]string{{"ate", "eat", "tea"}, {"nat", "tan"}, {"bat"}}},
		{[]string{""}, [][]string{{""}}},
		{[]string{"a"}, [][]string{{"a"}}},
	}

	for _, test := range tests {
		got := groupAnagrams(test.input)
		if !reflect.DeepEqual(got, test.want) {
			t.Errorf("groupAnagrams(%v) got %v want %v", test.input, got, test.want)
		}
	}
}

// func isEqualUnsorted(a [][]string, b [][]string) bool {
// 	for _, set := range a {
// 		if !contains(b, set) {
// 			return false
// 		}
// 	}
// 	return true
// }

// func contains(words []string, search string) bool {
// 	for _, word := range words {
// 		if word == search {
// 			return true
// 		}
// 	}
// 	return false
// }
