package firstbadversion

import "fmt"

/**
 * Forward declaration of isBadVersion API.
 * @param   version   your guess about first bad version
 * @return 	 	      true if current version is bad
 *			          false if current version is good
 * func isBadVersion(version int) bool;
 */

func firstBadVersion(n int) int {
	return binarySearch(n, 0, n, n)
}

func binarySearch(n int, low int, high int, firstBadVersionSoFar int) (firstBadVersion int) {
	fmt.Printf("binarySearch(%v, %v, %v, %v)\n", n, low, high, firstBadVersionSoFar)
	if low == high {
		if isBadVersion(low) {
			return low
		}
		return firstBadVersionSoFar
	}
	if low > high {
		return firstBadVersionSoFar
	}

	middle := int((high + low) / 2)
	if isBadVersion(middle) {
		return binarySearch(n, low, middle-1, middle)
	} else {
		return binarySearch(n, middle+1, high, firstBadVersionSoFar)
	}
}
