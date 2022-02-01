package main

import (
	"sort"
)

func groupAnagrams(words []string) (result [][]string) {
	sortedToAnagrams := map[string][]string{}

	for _, word := range words {
		sorted := SortString(word)
		_, ok := sortedToAnagrams[sorted]
		if !ok {
			sortedToAnagrams[sorted] = []string{}
		}
		sortedToAnagrams[sorted] = append(sortedToAnagrams[sorted], word)
	}

	for _, anagrams := range sortedToAnagrams {
		// The problem description states that anagrams can be returned in any
		// order but sorting makes it easier to test the output
		sort.Strings(anagrams)
		result = append(result, anagrams)
	}
	return result
}

type sortRunes []rune

func (s sortRunes) Less(i, j int) bool {
	return s[i] < s[j]
}
func (s sortRunes) Swap(i, j int) {
	s[i], s[j] = s[j], s[i]
}
func (s sortRunes) Len() int {
	return len(s)
}
func SortString(s string) string {
	r := []rune(s)
	sort.Sort(sortRunes(r))
	return string(r)
}
