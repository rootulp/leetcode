type Solution = [isSolved: boolean, solution: number[]];

class ArraySet extends Set {
  add(arr: number[]) {
    return super.add(arr.toString());
  }
  has(arr: number[]) {
    return super.has(arr.toString());
  }
}

const invalidArrangements = new ArraySet();

function constructArray(n: number, k: number): number[] {
  const [result, solution] = getBeautifulArrangement([], n, k)
  if (result === true) {
    return solution
  }
  // console.log(`Failed to find a valid solution for n: ${n}, k: %{k}`)
  return []
};

function getBeautifulArrangement(arrangement: number[], n: number, k: number): Solution {
  // console.log(`getBeautifulArrangement called with arrangement ${arrangement}`)
  // console.log(`invalidArrangements ${invalidArrangements}`)
  if (isBeautifulArrangement(arrangement, n, k)) {
    // console.log(`Beautiful arrangement found: ${arrangement}`)
    return [true, arrangement]
  }

  if (isInvalid(arrangement, n, k)) {
    invalidArrangements.add(arrangement)
    return [false, arrangement]
  }

  const differences = getDifferences(arrangement)
  const distinctDifferencesCount = getDistinctDifferencesCount(differences)

  if (arrangement.length === 0) {
    const newArrangement = [1]
    return getBeautifulArrangement(newArrangement, n, k)
  } else if (distinctDifferencesCount < k) {
    return getNumberThatCreatesDistinctDifference(arrangement, n, k)
  } else {
    return getNumberThatMatchesExistingDifference(arrangement, n, k)
  }
}

function isBeautifulArrangement(arrangement: number[], n: number, k: number): boolean {
    const differences = getDifferences(arrangement)
    const distinctDifferencesCount = getDistinctDifferencesCount(differences)
    const possibleNumbers = new Set(Array.from(Array(n).keys()).map(i => i += 1))
    const usedNumbers = new Set(arrangement)

    const usedAllPossibleNumbers = possibleNumbers.size === usedNumbers.size
    const distinctDifferencesCountMatchesK = distinctDifferencesCount === k
    return usedAllPossibleNumbers && distinctDifferencesCountMatchesK
}

function isInvalid(arrangement: number[], n: number, k: number): boolean {
   if(invalidArrangements.has(arrangement)) {
     return true;
   }

    const differences = getDifferences(arrangement)
    const distinctDifferencesCount = getDistinctDifferencesCount(differences)
    const possibleNumbers = new Set(Array.from(Array(n).keys()).map(i => i += 1))
    const usedNumbers = new Set(arrangement)

    const usedNumbersExceedsPossibleNumbers = usedNumbers.size > possibleNumbers.size
    const distinctDifferencesCountExceedsK = distinctDifferencesCount > k
    return usedNumbersExceedsPossibleNumbers || distinctDifferencesCountExceedsK
}


function getNumberThatCreatesDistinctDifference(arrangement: number[], n: number, k: number): Solution {
    const differences = getDifferences(arrangement)
    const distinctDifferences = new Set([...differences])
    const possibleNumbers = new Set(Array.from(Array(n).keys()).map(i => i += 1))
    const usedNumbers = new Set(arrangement)
    const unusedNumbers = new Set([...possibleNumbers].filter(x => !usedNumbers.has(x)))
    const mostRecentNumber = arrangement[arrangement.length - 1]
    for (let unusedNumber of unusedNumbers) {
      if (!distinctDifferences.has(Math.abs(mostRecentNumber - unusedNumber))) {
         const newArrangement = Object.assign([], arrangement);
         newArrangement.push(unusedNumber)
         const [result, solution] = getBeautifulArrangement(newArrangement, n, k)
         if (result === true) {
           return [result, solution]
         }
      }
    }
    // console.log(`No number that creates distinct difference found for arrangement ${arrangement}, n ${n}, mostRecentNumber ${mostRecentNumber}, unusedNumbers: ${[...unusedNumbers]}`)
    // invalidArrangements.add(arrangement)
    return [false, arrangement]
}

function getNumberThatMatchesExistingDifference(arrangement: number[], n: number, k: number): Solution {
    const differences = getDifferences(arrangement)
    const distinctDifferences = new Set([...differences])
    const possibleNumbers = new Set(Array.from(Array(n).keys()).map(i => i += 1))
    const usedNumbers = new Set(arrangement)
    const unusedNumbers = new Set([...possibleNumbers].filter(x => !usedNumbers.has(x)))
    const mostRecentNumber = arrangement[arrangement.length - 1]
    for (let unusedNumber of unusedNumbers) {
      if (distinctDifferences.has(Math.abs(mostRecentNumber - unusedNumber))) {
         const newArrangement = Object.assign([], arrangement);
         newArrangement.push(unusedNumber)
         const [result, solution] = getBeautifulArrangement(newArrangement, n, k)
         if (result === true) {
           return [result, solution]
         }
      }
    }
    // console.log(`No number that matches existing difference found for arrangement: ${arrangement}, n: ${n}, mostRecentNumber: ${mostRecentNumber}, unusedNumbers: ${[...unusedNumbers]}`)
    // invalidArrangements.add(arrangement)
    return [false, arrangement]
}

function getDistinctDifferencesCount(differences: number[]): number {
  const distinctDifferencesCount = new Set([...differences]).size;
  // console.log(`distinctDifferencesCount: ${distinctDifferencesCount}`)
  return distinctDifferencesCount
}

function getDifferences(arrangement: number[]): number[] {
  let differences = new Array();
  pairwise(arrangement, (curr, next) => differences.push(Math.abs(curr - next)))
  // console.log(`differences: ${differences}`)
  return differences
}

function pairwise(arr: number[], func: (curr: number, next: number) => {}){
    for(var i=0; i < arr.length - 1; i++){
        func(arr[i], arr[i + 1])
    }
}

// const result = constructArray(3, 1)
// console.log(`result: ${result}`)
// const differences = getDifferences([1,3,2])
// const distinctDifferences = getDistinctDifferences(differences)
