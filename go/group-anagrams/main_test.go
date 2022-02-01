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
		{[]string{""}, [][]string{{""}}},
	}

	for _, test := range tests {
		got := groupAnagrams(test.input)
		if !reflect.DeepEqual(got, test.want) {
			t.Errorf("groupAnagrams(%v) got %v want %v", test.input, got, test.want)
		}
	}
}
